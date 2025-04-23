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
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    }
  }, [status, router]);

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
    <div style={{ padding: '1rem' }}>
      <h2>🎵 Search iTunes</h2>

      <input
        type="text"
        placeholder="Search for music..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ marginRight: '0.5rem' }}
      />
      <button onClick={searchItunes}>Search</button>

      {message && <p style={{ marginTop: '1rem' }}>{message}</p>}

      <div style={{ marginTop: '1.5rem' }}>
        {results.map((item, i) => (
          <div key={i} style={{ margin: '10px 0', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
            <img src={item.artworkUrl100} alt={item.trackName} />
            <p><strong>{item.trackName}</strong> by {item.artistName}</p>
            <audio controls src={item.previewUrl}></audio>
            <br />
            <button onClick={() => addToPlaylist(item)}>➕ Add to Playlist</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchItunes;


