import styles from './SiteBackground.module.css';

const PARTICLES = Array.from({ length: 32 }, (_, i) => ({
  id: i,
  left: `${(i * 13 + 5) % 100}%`,
  delay: `${(i % 10) * 0.8}s`,
  duration: `${8 + (i % 6)}s`,
}));

export default function SiteBackground() {
  return (
    <div className={styles.root} aria-hidden>
      <div className={styles.grid} />
      <div className={`${styles.orb} ${styles.orb1}`} />
      <div className={`${styles.orb} ${styles.orb2}`} />
      <div className={`${styles.orb} ${styles.orb3}`} />
      <div className={`${styles.orb} ${styles.orb4}`} />
      <div className={styles.particles}>
        {PARTICLES.map((p) => (
          <span
            key={p.id}
            className={styles.particle}
            style={{ left: p.left, animationDelay: p.delay, animationDuration: p.duration }}
          />
        ))}
      </div>
      <div className={styles.vignette} />
    </div>
  );
}
