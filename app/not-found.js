import Link from 'next/link';

export default function PageNotFound() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-lg p-8 md:p-16 text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-8">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Sorry, the page you are looking for does not exist. You can always go back to the homepage.
        </p>
        <Link href="/">
          <p className="text-blue-500 hover:text-blue-700 font-semibold text-lg transition duration-300">
            Go to Homepage
          </p>
        </Link>
      </div>
    </div>
  );
}
