
import { DUMMY_NEWS } from "@/dummy-news";

import NewsList from "@/components/news-list";

export default function NewsPage() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">News Page</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <NewsList news={DUMMY_NEWS}/>
        
      </ul>
    </div>
  );
}
