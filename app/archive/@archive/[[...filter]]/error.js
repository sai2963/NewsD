'use client'
import Link from 'next/link';

export default function InvalidFilterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Invalid Filter Applied</h1>
        <p className="text-gray-600 mb-6">It looks like the filter you applied is not valid. Please try again with a different filter.</p>
        <Link href="/archive">
          <p className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out">
            Go Back to Archive
          </p>
        </Link>
      </div>
    </div>
  );
}
