import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { publicAssetUrl } from '../utils/publicAsset';

const NATIVE_SCALE = 1;
const MAX_SCALE = 4;
const WHEEL_SENSITIVITY = 0.0012;

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function snapScale(value) {
  const rounded = Math.round(value * 100) / 100;
  if (Math.abs(rounded - NATIVE_SCALE) < 0.02) return NATIVE_SCALE;
  return rounded;
}

/** Strip cache-bust query so dimensions load reliably. */
function imageSrcPath(src) {
  const q = src.indexOf('?');
  return q === -1 ? src : src.slice(0, q);
}

export default function HelpArticleFigure({
  src,
  alt,
  wide = false,
  narrow = false,
  zoom = 1,
  bleed = false,
}) {
  const figureZoom = typeof zoom === 'number' && zoom > 1 ? zoom : 1;
  const imageSrc = imageSrcPath(publicAssetUrl(src));
  const [open, setOpen] = useState(false);
  const [naturalSize, setNaturalSize] = useState({ w: 0, h: 0 });
  const [fitScale, setFitScale] = useState(1);
  const [scale, setScale] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });

  const containerRef = useRef(null);
  const naturalSizeRef = useRef({ w: 0, h: 0 });
  const stateRef = useRef({ scale: 1, pan: { x: 0, y: 0 }, fitScale: 1 });
  const dragRef = useRef(null);

  const syncRef = useCallback((nextScale, nextPan, nextFit) => {
    const snapped = snapScale(nextScale);
    stateRef.current = {
      scale: snapped,
      pan: nextPan,
      fitScale: nextFit ?? stateRef.current.fitScale,
    };
    setScale(snapped);
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

  const centerImage = useCallback((targetScale, imgW, imgH) => {
    const box = containerRef.current;
    if (!box) return { x: 0, y: 0 };
    const displayW = imgW * targetScale;
    const displayH = imgH * targetScale;
    return {
      x: (box.clientWidth - displayW) / 2,
      y: (box.clientHeight - displayH) / 2,
    };
  }, []);

  const applyScale = useCallback(
    (targetScale, clientX, clientY) => {
      const box = containerRef.current;
      const { w, h } = naturalSizeRef.current;
      if (!box || !w || !h) return;
      const { scale: cur, pan: curPan, fitScale: fit } = stateRef.current;
      const clamped = snapScale(clamp(targetScale, fit, MAX_SCALE));

      const rect = box.getBoundingClientRect();
      const px = clientX ?? rect.left + rect.width / 2;
      const py = clientY ?? rect.top + rect.height / 2;

      const wx = (px - rect.left - curPan.x) / cur;
      const wy = (py - rect.top - curPan.y) / cur;

      syncRef(clamped, {
        x: px - rect.left - wx * clamped,
        y: py - rect.top - wy * clamped,
      });
    },
    [syncRef],
  );

  const fitToScreen = useCallback(() => {
    const { w, h } = naturalSizeRef.current;
    if (!w || !h) return;
    const fit = measureFit(w, h);
    const pos = centerImage(fit, w, h);
    syncRef(fit, pos, fit);
  }, [measureFit, centerImage, syncRef]);

  const zoomToNative = useCallback(() => {
    const box = containerRef.current;
    if (!box) return;
    const rect = box.getBoundingClientRect();
    const { w, h } = naturalSizeRef.current;
    const pos = centerImage(NATIVE_SCALE, w, h);
    syncRef(NATIVE_SCALE, pos, stateRef.current.fitScale);
    applyScale(NATIVE_SCALE, rect.left + rect.width / 2, rect.top + rect.height / 2);
  }, [centerImage, syncRef, applyScale]);

  const close = useCallback(() => {
    setOpen(false);
    dragRef.current = null;
  }, []);

  const openViewer = useCallback(() => {
    const cached = naturalSizeRef.current;
    if (cached.w > 0) {
      setNaturalSize(cached);
    } else {
      setNaturalSize({ w: 0, h: 0 });
    }
    setOpen(true);
  }, []);

  useEffect(() => {
    if (!open || !naturalSize.w) return undefined;
    const id = requestAnimationFrame(() => {
      const box = containerRef.current;
      if (!box) return;
      const fit = measureFit(naturalSize.w, naturalSize.h);
      const pos = centerImage(fit, naturalSize.w, naturalSize.h);
      syncRef(fit, pos, fit);
    });
    return () => cancelAnimationFrame(id);
  }, [open, naturalSize.w, naturalSize.h, measureFit, centerImage, syncRef]);

  const handleNaturalSize = useCallback(
    (w, h) => {
      naturalSizeRef.current = { w, h };
      setNaturalSize({ w, h });
      if (open) {
        requestAnimationFrame(() => {
          const fit = measureFit(w, h);
          const pos = centerImage(fit, w, h);
          syncRef(fit, pos, fit);
        });
      }
    },
    [open, measureFit, centerImage, syncRef],
  );

  const handleThumbLoad = useCallback(
    (e) => {
      const img = e.currentTarget;
      handleNaturalSize(img.naturalWidth, img.naturalHeight);
    },
    [handleNaturalSize],
  );

  const handleViewerLoad = useCallback(
    (e) => {
      const img = e.currentTarget;
      handleNaturalSize(img.naturalWidth, img.naturalHeight);
    },
    [handleNaturalSize],
  );

  const zoomIn = useCallback(() => {
    const box = containerRef.current;
    if (!box) return;
    const rect = box.getBoundingClientRect();
    applyScale(stateRef.current.scale * 1.25, rect.left + rect.width / 2, rect.top + rect.height / 2);
  }, [applyScale]);

  const zoomOut = useCallback(() => {
    const box = containerRef.current;
    if (!box) return;
    const rect = box.getBoundingClientRect();
    applyScale(stateRef.current.scale / 1.25, rect.left + rect.width / 2, rect.top + rect.height / 2);
  }, [applyScale]);

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
      if (e.key === '1') {
        e.preventDefault();
        zoomToNative();
      }
    };

    const onWheel = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const factor = 1 - e.deltaY * WHEEL_SENSITIVITY;
      applyScale(stateRef.current.scale * factor, e.clientX, e.clientY);
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
  }, [open, close, zoomIn, zoomOut, fitToScreen, applyScale, zoomToNative]);

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
    if (Math.abs(cur - NATIVE_SCALE) < 0.05) {
      fitToScreen();
      return;
    }
    if (cur > fit * 1.05) {
      zoomToNative();
      return;
    }
    applyScale(NATIVE_SCALE, e.clientX, e.clientY);
  };

  const percent = Math.round(scale * 100);
  const displayW = Math.round(naturalSize.w * scale);
  const displayH = Math.round(naturalSize.h * scale);

  const viewer = open
    ? createPortal(
        <div
          data-image-viewer
          className="fixed inset-0 z-[200] flex flex-col bg-black/95"
          role="dialog"
          aria-modal="true"
          aria-label={alt}
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
                onClick={zoomToNative}
                className="rounded-lg border border-white/20 bg-white/10 px-2.5 py-1.5 text-xs font-medium text-white hover:bg-white/20"
                title="Full HD — 100% original pixels"
              >
                100%
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
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            onDoubleClick={onDoubleClick}
            style={{ cursor: scale > fitScale ? 'grab' : 'zoom-in' }}
          >
            {naturalSize.w > 0 ? (
              <img
                src={imageSrc}
                alt={alt}
                draggable={false}
                onLoad={handleViewerLoad}
                width={naturalSize.w}
                height={naturalSize.h}
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: displayW,
                  height: displayH,
                  transform: `translate3d(${Math.round(pan.x)}px, ${Math.round(pan.y)}px, 0)`,
                  transformOrigin: '0 0',
                  userSelect: 'none',
                }}
                className="pointer-events-none max-w-none select-none help-article-figure-viewer-img"
              />
            ) : (
              <img
                src={imageSrc}
                alt={alt}
                className="absolute left-1/2 top-1/2 max-h-full max-w-full -translate-x-1/2 -translate-y-1/2 opacity-0"
                onLoad={handleViewerLoad}
                decoding="sync"
              />
            )}
          </div>

          <p className="shrink-0 border-t border-white/10 px-4 py-2 text-center text-xs text-slate-400">
            Wheel to zoom · drag to move · double-click for 100% · 100% = full size · Esc to close
          </p>
        </div>,
        document.body
      )
    : null;

  return (
    <>
      <div
        className={`help-article-figure mt-5${
          narrow ? ' help-article-figure--narrow' : ''
        }${bleed ? ' help-article-figure--bleed' : ''}${
          figureZoom > 1 ? ' help-article-figure--zoom' : ''
        }`}
        style={figureZoom > 1 ? { '--help-figure-zoom': figureZoom } : undefined}
      >
        <button
          type="button"
          onClick={openViewer}
          className={`help-article-figure-btn group flex cursor-zoom-in justify-center overflow-hidden rounded-lg border border-slate-200/60 bg-white transition hover:border-sky-400/40 hover:ring-2 hover:ring-sky-400/25 dark:border-slate-600/60 dark:bg-slate-950${
            wide
              ? ' help-article-figure-btn--wide w-full p-0'
              : narrow
                ? ' help-article-figure-btn--narrow w-full p-1 sm:p-2'
                : ' w-full p-1 sm:p-2'
          }`}
          aria-label={`View full size: ${alt}`}
        >
          <img
            src={imageSrc}
            alt={alt}
            onLoad={handleThumbLoad}
            className={`help-article-figure-img pointer-events-none ${
              wide
                ? `help-article-figure-img--wide${figureZoom > 1 ? ' help-article-figure-img--scaled' : ''}`
                : narrow
                  ? 'help-article-figure-img--narrow'
                  : 'help-article-figure-img--default'
            }`}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            draggable={false}
          />
        </button>
      </div>
      {viewer}
    </>
  );
}
