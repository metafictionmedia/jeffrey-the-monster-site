interface NewsItem {
  id: string;
  title: string;
  content: string;
  date: string;
  author?: string;
}

interface NewsFeedProps {
  items: NewsItem[];
  maxItems?: number;
}

export default function NewsFeed({ items, maxItems = 3 }: NewsFeedProps) {
  const displayItems = items.slice(0, maxItems);

  if (items.length === 0) {
    return (
      <section className="mt-8">
        <div className="comic-panel p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Latest News</h2>
          <p className="text-gray-600 dark:text-gray-400">
            No news updates available at this time.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-8">
      <div className="comic-panel p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Latest News</h2>
        <div className="space-y-6">
          {displayItems.map((item) => (
            <article key={item.id} className="border-b border-light-border dark:border-dark-border last:border-b-0 pb-6 last:pb-0">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-light-text dark:text-dark-text flex-1">
                  {item.title}
                </h3>
                <time className="text-sm text-light-text-secondary dark:text-dark-text-secondary ml-4 flex-shrink-0">
                  {new Date(item.date).toLocaleDateString()}
                </time>
              </div>
              {item.author && (
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mb-2">
                  by {item.author}
                </p>
              )}
              <p className="text-light-text-secondary dark:text-dark-text-secondary">
                {item.content}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}