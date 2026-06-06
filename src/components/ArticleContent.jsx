import styles from './ArticleContent.module.css';

export default function ArticleContent({ article }) {
  if (!article) return null;

  const { relatedLink } = article;

  return (
    <article className={styles.article}>
      <h1 className={styles.h1}>{article.title}</h1>
      {article.intro && <p className={styles.intro}>{article.intro}</p>}

      {article.steps.map((step, i) => (
        <section key={i} className={styles.step}>
          <h2 className={styles.h2}>{step.title}</h2>
          <p className={styles.p}>{step.body}</p>
          {step.bullets?.length > 0 && (
            <ul className={styles.ul}>
              {step.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}
        </section>
      ))}

      {article.note && (
        <p className={styles.note}>
          <strong>Note:</strong> {article.note}
        </p>
      )}

      {article.footer && <p className={styles.footer}>{article.footer}</p>}

      {relatedLink?.href && relatedLink?.label && (
        <p className={styles.cta}>
          <a href={relatedLink.href}>{relatedLink.label} →</a>
        </p>
      )}
    </article>
  );
}
