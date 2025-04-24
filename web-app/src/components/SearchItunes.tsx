'use client';

import React, { useState, useEffect } from 'react';
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

const SearchItunes = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<ItunesItem[]>([]);
  const [message, setMessage] = useState('');
  const { data: session, status } = useSession();
  const router = useRouter();

  // 👮‍♀️ Protect this page — redirect if not logged in
  {/*
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    }
  }, [status, router]);
  */}

  const searchItunes = async () => {
    const res = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&media=music&limit=9`);
    const data = await res.json();
    setResults(data.results);
  };

  const addToPlaylist = async (song: ItunesItem) => {
    try {
      const response = await fetch('/api/music/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          trackName: song.trackName,
          artistName: song.artistName,
          artworkUrl: song.artworkUrl100,
          previewUrl: song.previewUrl,
          trackId: song.trackViewUrl, // or another unique ID like trackId if available
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert('✅ Song added!');
      } else {
        alert(`❌ ${data.message || 'Failed to add song.'}`);
      }
    } catch (error) {
      console.error('Add failed:', error);
      alert('❌ Something went wrong.');
    }
  
    setTimeout(() => setMessage(''), 3000);

  };
  
  
  
  

  if (status === 'loading') {
    return <p>Loading session...</p>;
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-white py-3">

    <div style={{ padding: '1rem' }} >
      <h1 className="text-4xl font-bold mb-2 text-center">🎵 Search iTunes</h1>

      <div className="flex justify-center items-center mt-4">
      <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
        type="text"
        placeholder="Search for music..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ marginRight: '0.5rem' }}
      />
      <button onClick={searchItunes} className="bg-red-700 text-white hover:bg-red-400 hover:text-white p-2 rounded">Search</button>
      </div>

      {message && <p style={{ marginTop: '1rem' }}>{message}</p>}

      <div style={{ marginTop: '1.5rem' }}>
        {results.map((item, i) => (
          <div key={i} style={{ margin: '10px 0', borderBottom: '1px solid #ddd', paddingBottom: '10px' }} className='flex flex-col items-center justify-content:space-between border border-gray-300 rounded-md p-4'>
            <img src={item.artworkUrl100} alt={item.trackName} className='mb-1'/>
            <p className='m-1'><strong>{item.trackName}</strong> by {item.artistName}</p>
            <audio controls src={item.previewUrl} className='mt-1'></audio>
            <br />
            <button onClick={() => addToPlaylist(item)} className="bg-red-700 text-white hover:bg-red-400 hover:text-white p-2 rounded mb-1">➕ Add to Playlist</button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default SearchItunes;


