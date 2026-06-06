import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const MAX_SCALE = 6;
const WHEEL_SENSITIVITY = 0.0012;

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

export default function HelpArticleFigure({ src, alt }) {
  const [open, setOpen] = useState(false);
  const [naturalSize, setNaturalSize] = useState({ w: 0, h: 0 });
  const [fitScale, setFitScale] = useState(1);
  const [scale, setScale] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });

  const containerRef = useRef(null);
  const stateRef = useRef({ scale: 1, pan: { x: 0, y: 0 }, fitScale: 1 });
  const dragRef = useRef(null);

  const syncRef = useCallback((nextScale, nextPan, nextFit) => {
    stateRef.current = {
      scale: nextScale,
      pan: nextPan,
      fitScale: nextFit ?? stateRef.current.fitScale,
    };
    setScale(nextScale);
    setPan(nextPan);
    if (nextFit != null) setFitScale(nextFit);
  }, []);

  const measureFit = useCallback((imgW, imgH) => {
    const box = containerRef.current;
    if (!box || !imgW || !imgH) return 1;
    const pad = 32;
    const availW = box.clientWidth - pad;
    const availH = box.clientHeight - pad;
    return Math.min(availW / imgW, availH / imgH, 1);
  }, []);

  const centerImage = useCallback((fit, imgW, imgH) => {
    const box = containerRef.current;
    if (!box) return { x: 0, y: 0 };
    const displayW = imgW * fit;
    const displayH = imgH * fit;
    return {
      x: (box.clientWidth - displayW) / 2,
      y: (box.clientHeight - displayH) / 2,
    };
  }, []);

  const fitToScreen = useCallback(() => {
    const { w, h } = naturalSize;
    if (!w || !h) return;
    const fit = measureFit(w, h);
    const pos = centerImage(fit, w, h);
    syncRef(fit, pos, fit);
  }, [naturalSize, measureFit, centerImage, syncRef]);

  const close = useCallback(() => {
    setOpen(false);
    dragRef.current = null;
  }, []);

  const openViewer = useCallback(() => {
    setNaturalSize({ w: 0, h: 0 });
    syncRef(1, { x: 0, y: 0 }, 1);
    setOpen(true);
  }, [syncRef]);

  const zoomAtPoint = useCallback((nextScale, clientX, clientY) => {
    const box = containerRef.current;
    if (!box) return;
    const { scale: cur, pan: curPan, fitScale: fit } = stateRef.current;
    const clamped = clamp(nextScale, fit, MAX_SCALE);

    const rect = box.getBoundingClientRect();
    const px = clientX - rect.left;
    const py = clientY - rect.top;

    const wx = (px - curPan.x) / cur;
    const wy = (py - curPan.y) / cur;

    syncRef(clamped, {
      x: px - wx * clamped,
      y: py - wy * clamped,
    });
  }, [syncRef]);

  const zoomIn = useCallback(() => {
    const box = containerRef.current;
    if (!box) return;
    const rect = box.getBoundingClientRect();
    zoomAtPoint(stateRef.current.scale * 1.25, rect.left + rect.width / 2, rect.top + rect.height / 2);
  }, [zoomAtPoint]);

  const zoomOut = useCallback(() => {
    const box = containerRef.current;
    if (!box) return;
    const rect = box.getBoundingClientRect();
    zoomAtPoint(stateRef.current.scale / 1.25, rect.left + rect.width / 2, rect.top + rect.height / 2);
  }, [zoomAtPoint]);

  const handleImageLoad = useCallback(
    (e) => {
      const img = e.currentTarget;
      const w = img.naturalWidth;
      const h = img.naturalHeight;
      setNaturalSize({ w, h });
      requestAnimationFrame(() => {
        const fit = measureFit(w, h);
        const pos = centerImage(fit, w, h);
        syncRef(fit, pos, fit);
      });
    },
    [measureFit, centerImage, syncRef]
  );

  useEffect(() => {
    if (!open || !naturalSize.w) return undefined;
    const onResize = () => fitToScreen();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [open, naturalSize, fitToScreen]);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === '+' || e.key === '=') {
        e.preventDefault();
        zoomIn();
      }
      if (e.key === '-') {
        e.preventDefault();
        zoomOut();
      }
      if (e.key === '0') {
        e.preventDefault();
        fitToScreen();
      }
    };

    const onWheel = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const factor = 1 - e.deltaY * WHEEL_SENSITIVITY;
      zoomAtPoint(stateRef.current.scale * factor, e.clientX, e.clientY);
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('wheel', onWheel, { passive: false, capture: true });

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('wheel', onWheel, { capture: true });
    };
  }, [open, close, zoomIn, zoomOut, fitToScreen, zoomAtPoint]);

  const onPointerDown = (e) => {
    if (e.button !== 0) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      panX: stateRef.current.pan.x,
      panY: stateRef.current.pan.y,
    };
  };

  const onPointerMove = (e) => {
    if (!dragRef.current) return;
    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;
    syncRef(stateRef.current.scale, {
      x: dragRef.current.panX + dx,
      y: dragRef.current.panY + dy,
    });
  };

  const onPointerUp = (e) => {
    if (dragRef.current) {
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {
        /* ignore */
      }
    }
    dragRef.current = null;
  };

  const onDoubleClick = (e) => {
    const { scale: cur, fitScale: fit } = stateRef.current;
    if (cur > fit * 1.05) {
      fitToScreen();
    } else {
      zoomAtPoint(fit * 2.5, e.clientX, e.clientY);
    }
  };

  const percent = fitScale > 0 ? Math.round((scale / fitScale) * 100) : 100;

  const viewer = open
    ? createPortal(
        <div
          data-image-viewer
          className="fixed inset-0 z-[200] flex flex-col bg-black/95"
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          data-lenis-prevent
        >
          <div className="flex shrink-0 flex-wrap items-center justify-between gap-2 border-b border-white/10 px-3 py-2.5 sm:px-4">
            <p className="min-w-0 flex-1 truncate text-sm text-slate-200">{alt}</p>
            <div className="flex shrink-0 flex-wrap items-center gap-1.5">
              <button
                type="button"
                onClick={zoomOut}
                disabled={scale <= fitScale}
                className="rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-medium text-white hover:bg-white/20 disabled:opacity-40"
                aria-label="Zoom out"
              >
                −
              </button>
              <span className="min-w-[3.5rem] text-center text-xs text-slate-300 tabular-nums">
                {percent}%
              </span>
              <button
                type="button"
                onClick={zoomIn}
                disabled={scale >= MAX_SCALE}
                className="rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-medium text-white hover:bg-white/20 disabled:opacity-40"
                aria-label="Zoom in"
              >
                +
              </button>
              <button
                type="button"
                onClick={fitToScreen}
                className="rounded-lg border border-white/20 bg-white/10 px-2.5 py-1.5 text-xs font-medium text-white hover:bg-white/20"
              >
                Fit
              </button>
              <button
                type="button"
                onClick={close}
                className="rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-medium text-white hover:bg-white/20"
              >
                Close
              </button>
            </div>
          </div>

          <div
            ref={containerRef}
            className="relative min-h-0 flex-1 touch-none overflow-hidden"
            data-lenis-prevent
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            onDoubleClick={onDoubleClick}
            style={{ cursor: scale > fitScale ? 'grab' : 'zoom-in' }}
          >
            {naturalSize.w > 0 && (
              <img
                src={src}
                alt={alt}
                draggable={false}
                onLoad={handleImageLoad}
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: naturalSize.w,
                  height: naturalSize.h,
                  transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale})`,
                  transformOrigin: '0 0',
                  willChange: 'transform',
                  userSelect: 'none',
                }}
                className="pointer-events-none max-w-none select-none"
              />
            )}
            {naturalSize.w === 0 && (
              <img
                src={src}
                alt={alt}
                className="absolute left-1/2 top-1/2 max-h-full max-w-full -translate-x-1/2 -translate-y-1/2 opacity-0"
                onLoad={handleImageLoad}
              />
            )}
          </div>

          <p className="shrink-0 border-t border-white/10 px-4 py-2 text-center text-xs text-slate-400">
            Mouse wheel to zoom · drag to move · double-click zoom · Fit = full image · Esc to close
          </p>
        </div>,
        document.body
      )
    : null;

  return (
    <>
      <div className="mt-5">
        <button
          type="button"
          onClick={openViewer}
          className="group flex w-full cursor-zoom-in justify-center overflow-hidden rounded-lg border border-slate-200/60 bg-transparent p-2 transition hover:border-sky-400/40 hover:ring-2 hover:ring-sky-400/25 sm:p-4 dark:border-slate-600/60 dark:bg-transparent"
          aria-label={`View full size: ${alt}`}
        >
          <img
            src={src}
            alt={alt}
            className="mx-auto h-auto max-h-[min(70vh,640px)] w-auto max-w-full object-contain object-top pointer-events-none"
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        </button>
      </div>
      {viewer}
    </>
  );
}
