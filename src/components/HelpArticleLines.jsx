import HelpSectionHeading from './HelpSectionHeading';

export default function HelpArticleLines({ items, blockKey = 'blk' }) {
  if (!items?.length) return null;
  return (
    <div className="mt-5 min-w-0 space-y-4 text-base leading-7 [overflow-wrap:anywhere] break-words text-slate-700 dark:text-slate-300 sm:text-lg sm:leading-8">
      {items.map((item, index) => {
        if (typeof item === 'object' && item !== null && Array.isArray(item.list)) {
          if (item.plain) {
            return (
              <ul
                key={`${blockKey}-ul-${index}`}
                className="my-1 list-disc space-y-2 pl-6 marker:text-slate-500 dark:marker:text-slate-400"
              >
                {item.list.map((line, lineIndex) => (
                  <li
                    key={`${blockKey}-li-${lineIndex}-${String(line).slice(0, 48)}`}
                    className="[overflow-wrap:anywhere]"
                  >
                    {line}
                  </li>
                ))}
              </ul>
            );
          }
          return (
            <ul
              key={`${blockKey}-ul-${index}`}
              className="my-1 list-none space-y-2.5 pl-0"
            >
              {item.list.map((line, lineIndex) => {
                const label = typeof line === 'object' && line?.text ? line.text : String(line);
                return (
                <li
                  key={`${blockKey}-li-${lineIndex}-${label.slice(0, 48)}`}
                  className="flex gap-2.5 [overflow-wrap:anywhere]"
                >
                  <span className="shrink-0 text-[1.15em] leading-7" aria-hidden>
                    {typeof line === 'object' && line?.icon ? line.icon : '•'}
                  </span>
                  <span className="min-w-0 flex-1">{label}</span>
                </li>
                );
              })}
            </ul>
          );
        }
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
