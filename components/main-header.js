import Link from 'next/link';

export default function MainHeader() {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link href="/">NewsD</Link>
        </div>
        <ul className="flex space-x-8 text-white text-lg font-semibold">
          <li className="hover:text-gray-300 transition duration-300">
            <Link href="/">Homee </Link>
          </li>
          <li className="hover:text-gray-300 transition duration-300">
            <Link href="/news">News</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
