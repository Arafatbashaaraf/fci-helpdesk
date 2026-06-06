import HelpSectionHeading from './HelpSectionHeading';

export default function HelpArticleLines({ items, blockKey = 'blk' }) {
  if (!items?.length) return null;
  return (
    <div className="mt-5 min-w-0 space-y-4 text-base leading-7 [overflow-wrap:anywhere] break-words text-slate-700 dark:text-slate-300 sm:text-lg sm:leading-8">
      {items.map((item, index) => {
        if (typeof item === 'object' && item !== null && typeof item.heading === 'string') {
          return (
            <HelpSectionHeading key={`${blockKey}-h-${index}`}>{item.heading}</HelpSectionHeading>
          );
        }
        if (typeof item === 'string') {
          return (
            <p
              key={`${blockKey}-p-${index}-${item.slice(0, 48)}`}
              className="max-w-none [overflow-wrap:anywhere]"
            >
              {item}
            </p>
          );
        }
        return null;
      })}
    </div>
  );
}
