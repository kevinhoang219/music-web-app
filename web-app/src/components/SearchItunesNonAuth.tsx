'use client';


import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';


type ItunesItem = {
  trackName: string;
  artistName: string;
  artworkUrl100: string;
  previewUrl: string;
  trackViewUrl: string;
  trackId: number;
};


const SearchItunesNonAuth = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<ItunesItem[]>([]);
  const [message, setMessage] = useState('');
  const { data: session, status } = useSession();
  const router = useRouter();


  const searchItunes = async () => {
    if (!query.trim()) return;


    const res = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&media=music&limit=5`);
    const data = await res.json();
    setResults(data.results);


    if (!data.results.length) {
      setMessage('No results found');
      setTimeout(() => setMessage(''), 3000);
    }
  };


  if (status === 'loading') {
    return <p className="text-center mt-10 text-gray-500">Loading preview...</p>;
  }


  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-8">
      <h2 className="text-2xl font-bold text-red-700 mb-4 text-center">🎵 iTunes Music Search</h2>


      <div className="flex flex-col sm:flex-row gap-4 items-center mb-6">
        <input
          type="text"
          placeholder="Search for music..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <button
          onClick={searchItunes}
          className="px-4 py-2 bg-red-700 hover:bg-red-300 text-white font-semibold rounded-md transition duration-200"
        >
          Search
        </button>
      </div>


      {message && (
        <p className="text-red-500 text-sm mb-4 text-center">{message}</p>
      )}


      <div className="grid gap-6">
        {results.map((item) => (
          <div
            key={item.trackId}
            className="flex flex-col sm:flex-row items-center gap-4 p-4 border rounded-md hover:shadow-md transition"
          >
            <img
              src={item.artworkUrl100}
              alt={item.trackName}
              className="w-24 h-24 rounded-md shadow-sm"
            />
            <div className="flex-1">
              <p className="font-semibold text-lg">{item.trackName}</p>
              <p className="text-gray-600 text-sm">by {item.artistName}</p>
              <audio controls src={item.previewUrl} className="mt-2 w-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default SearchItunesNonAuth;





