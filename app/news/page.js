import Link from "next/link";
import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";

export default function NewsPage() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">News Page</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {DUMMY_NEWS.map((newsItem) => (
          <li key={newsItem.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Link href={`/news/${newsItem.slug}`} className="block">
              <div className="relative w-full h-48">
                <Image
                  src={`/images/news/${newsItem.image}`}
                  alt={newsItem.title}
                  layout="fill"
                  objectFit="cover"
                  className="hover:opacity-90 transition-opacity duration-300"
                />
              </div>
              <div className="p-4">
                <span className="block text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-300">{newsItem.title}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
