import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PRODUCT_SHOWCASE_ITEMS } from '../../data/productShowcase';
import ShowcaseMockPreview from './ShowcaseMockPreview';
import styles from './ProductShowcaseSection.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const blockStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const PARTICLES = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  left: `${(i * 17 + 8) % 100}%`,
  top: `${(i * 23 + 5) % 100}%`,
  size: 2 + (i % 3),
  delay: `${(i % 8) * 0.7}s`,
  duration: `${10 + (i % 5)}s`,
}));

function CalloutArrow({ side }) {
  const isLeft = side === 'left';
  return (
    <svg
      className={`pointer-events-none absolute h-16 w-16 text-sky-400/70 ${isLeft ? '-left-10 top-1/2 -translate-y-1/2 rotate-180' : '-right-10 top-1/2 -translate-y-1/2'}`}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden
    >
      <motion.path
        d="M8 32 C24 32, 28 12, 44 20 L52 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
      <path d="M52 16 L46 24 M52 16 L44 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ShowcaseCallout({ callout, index }) {
  const isLeft = callout.cardSide === 'left';

  return (
    <>
      <motion.span
        className="pointer-events-none absolute z-20 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-sky-400/70 bg-sky-500/10 shadow-[0_0_28px_rgba(56,189,248,0.45)]"
        style={{ left: callout.x, top: callout.y }}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 + index * 0.12, type: 'spring', stiffness: 200 }}
      >
        <span className="absolute inset-0 rounded-full border border-sky-300/40" />
        <span className="relative h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_12px_#38bdf8]" />
      </motion.span>

      <motion.div
        className="absolute z-30 w-44 max-w-[min(220px,42vw)] rounded-xl border border-white/10 bg-slate-900/90 px-3 py-2.5 shadow-xl backdrop-blur-md sm:w-48"
        style={{
          left: callout.x,
          top: callout.y,
          transform: isLeft ? 'translate(-108%, -50%)' : 'translate(14px, -50%)',
        }}
        initial={{ opacity: 0, x: isLeft ? 12 : -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 + index * 0.1, duration: 0.45 }}
        whileHover={{ scale: 1.03, borderColor: 'rgba(56, 189, 248, 0.45)' }}
      >
        <CalloutArrow side={callout.cardSide} />
        <p className="text-xs font-semibold text-sky-200">{callout.label}</p>
        <p className="mt-0.5 text-[11px] leading-snug text-slate-400">{callout.detail}</p>
      </motion.div>
    </>
  );
}

function ShowcaseImage({ src, alt }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <ShowcaseMockPreview />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

function ShowcaseBlock({ item }) {
  const isReversed = item.reverse;

  return (
    <motion.article
      className={`group relative grid items-center gap-10 lg:gap-14 ${
        isReversed ? 'lg:grid-cols-[1fr_1.15fr]' : 'lg:grid-cols-[1.15fr_1fr]'
      }`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={blockStagger}
    >
      <div className={isReversed ? 'lg:col-start-2' : ''}>
        <motion.div
          className="relative overflow-hidden rounded-2xl border border-sky-500/20 bg-slate-900/40 p-1 shadow-[0_24px_80px_rgba(0,0,0,0.45),0_0_60px_rgba(37,99,235,0.12)] backdrop-blur-xl transition-all duration-500 hover:border-sky-400/40 hover:shadow-[0_28px_90px_rgba(0,0,0,0.5),0_0_80px_rgba(56,189,248,0.18)]"
          whileHover={{ y: -6 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        >
          <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-sky-500/30 via-transparent to-indigo-500/25 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <motion.div
            className="relative aspect-[16/10] overflow-hidden rounded-[14px] bg-slate-950 ring-1 ring-white/5"
            initial={{ opacity: 0, scale: 0.94, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <ShowcaseImage src={item.image} alt={item.imageAlt} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />

            {item.callouts.map((c, i) => (
              <ShowcaseCallout key={c.id} callout={c} index={i} />
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className={isReversed ? 'lg:col-start-1 lg:row-start-1' : ''}>
        <motion.span
          className={`inline-flex items-center gap-1.5 rounded-full border border-sky-500/25 bg-sky-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${styles.showcaseBadge}`}
          variants={fadeUp}
        >
          <Sparkles className="h-3 w-3" aria-hidden />
          {item.badge}
        </motion.span>

        <motion.h3 className={styles.showcaseTitle} variants={fadeUp}>
          {item.title}
        </motion.h3>

        <motion.p className={styles.showcaseDesc} variants={fadeUp}>
          {item.description}
        </motion.p>

        <motion.div variants={fadeUp}>
          <Link to={item.link} className={styles.showcaseCta}>
            {item.linkLabel}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </motion.article>
  );
}

export default function ProductShowcaseSection() {
  return (
    <section
      id="product-showcase"
      className={`${styles.showcaseSection} relative overflow-hidden py-20 sm:py-28`}
      aria-labelledby="showcase-heading"
    >
      <div className={styles.showcaseBg} aria-hidden />
      <div className={styles.showcaseGlowA} aria-hidden />
      <div className={styles.showcaseGlowB} aria-hidden />

      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {PARTICLES.map((p) => (
          <span
            key={p.id}
            className={`${styles.showcaseParticle} absolute rounded-full animate-[floatParticle_12s_ease-in-out_infinite]`}
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.header
          className="mx-auto max-w-2xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${styles.showcaseEyebrow}`}>
            Product tour
          </p>
          <h2 id="showcase-heading" className={styles.showcaseHeading}>
            See how FCI Help Desk works
          </h2>
          <p className={`${styles.showcaseLead} sm:text-lg`}>
            Premium SaaS-style walkthroughs with annotated UI — built for training,
            support, and self-service documentation.
          </p>
        </motion.header>

        <div className="mt-16 flex flex-col gap-24 sm:mt-20 sm:gap-28 lg:gap-32">
          {PRODUCT_SHOWCASE_ITEMS.map((item) => (
            <ShowcaseBlock key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
