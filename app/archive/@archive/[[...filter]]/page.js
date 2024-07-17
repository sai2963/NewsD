import Link from 'next/link';
import NewsList from '@/components/news-list';
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from '@/lib/news';

export default function FilteredNewsPage({ params }) {
  const filter = params.filter;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let news;
  let links = getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }
  if (
    (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))
  ) {
    throw new Error('Invalid filter.');
  }

  let newsContent = <p className="text-gray-500">No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <header id="archive-header" className="mb-8">
        <nav>
          <ul className="flex flex-wrap gap-2 sm:gap-4 justify-center">
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;

              return (
                <li key={link}>
                  <Link href={href}>
                    <p className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out">
                      {link}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <main className="bg-white shadow-md rounded-lg p-4 sm:p-6 lg:p-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Filtered News</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none">
          {newsContent}
        </div>
      </main>
    </div>
  );
}
