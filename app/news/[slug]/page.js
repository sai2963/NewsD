import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function NewsDetailPage({ params }) {
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);
  if (!newsItem) {
    notFound();
  }
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        News Detail Page
      </h1>
      <article className="bg-white rounded-lg shadow-md p-6 md:p-12 lg:p-16 max-w-3xl mx-auto">
        <header className="mb-6">
          <div className="relative w-full h-64 mb-4">
            <Link href={`/news/${newsItem.slug}/image`}>
              <Image
                src={`/images/news/${newsItem.image}`}
                alt={newsItem.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </Link>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {newsItem.title}
          </h2>
          <time className="block text-gray-500 mb-4" dateTime={newsItem.date}>
            {newsItem.date}
          </time>
        </header>
        <p className="text-gray-700 text-lg leading-relaxed">
          {newsItem.content}
        </p>
      </article>
    </div>
  );
}
