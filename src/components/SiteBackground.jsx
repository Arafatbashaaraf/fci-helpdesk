import styles from './SiteBackground.module.css';

const PARTICLES = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  left: `${(i * 19 + 5) % 100}%`,
  delay: `${(i % 6) * 1.2}s`,
  duration: `${10 + (i % 4)}s`,
}));

export default function SiteBackground() {
  return (
    <div className={styles.root} aria-hidden>
      <div className={styles.grid} />
      <div className={`${styles.orb} ${styles.orb1}`} />
      <div className={`${styles.orb} ${styles.orb2}`} />
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
