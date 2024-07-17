import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

const Latest = () => {
  const LatestNews = getLatestNews();
  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Latest News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none">
        <NewsList news={LatestNews} />
      </div>
    </div>
  );
}

export default Latest;
