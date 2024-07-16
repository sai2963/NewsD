import Link from "next/link";
import Image from "next/image";
const NewsList = ({news}) => {
    return (
        <>
            
            {news.map((newsItem) => (
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
           
        </>
    )
}
export default NewsList;