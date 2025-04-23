'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import DeleteSong from './DeleteSong';

type Song = {
  trackName: string;
  artistName: string;
  artworkUrl: string;
  previewUrl: string;
  trackId: number;
};

const DisplaySongs = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [message, setMessage] = useState('');
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    }
  }, [status, router]);

  useEffect(() => {
    if (status === 'authenticated') {
      fetchPlaylist();
    }
  }, [status]);

  const fetchPlaylist = async () => {
    try {
      const res = await fetch('/api/music/playlist');
      const data = await res.json();

      if (res.ok) {
        setSongs(data.playlist);
      } else {
        setMessage(data.message || 'Failed to load playlist.');
      }
    } catch (error) {
      setMessage('Something went wrong.');
    }
  };

  const deleteSong = async (trackId: number | string) => {
    try {
      const res = await fetch('/api/music/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ trackId }),
      });
      const data = await res.json();
  
      if (res.ok) {
        setSongs((prev) => prev.filter((song) => song.trackId !== trackId));
        setMessage('Song removed from playlist!');
      } else {
        setMessage(data.message || 'Failed to delete song.');
      }
    } catch (error) {
      setMessage('Something went wrong while deleting.');
    }
  };
  
  
  
  if (status === 'loading') return <p>Loading...</p>;

  return (
    <div style={{ padding: '1rem' }} >
      <h2 className="text-4xl font-bold mb-4 text-center">📀 My Playlist</h2>

      {message && <p className='text-center'>{message}</p>}

      {songs.length === 0 ? (
        <p className='text-center'>You don’t have any songs in your playlist yet.</p>
      ) : (
        <div>
          {songs.map((song) => (
            <div key={song.trackId} style={{ margin: '10px 0', borderBottom: '1px solid #ccc', padding: '18px' }} className='flex flex-col items-center justify-content:space-between border border-gray-300 rounded-md m-3'>
              <img src={song.artworkUrl} alt={song.trackName} className='mb-1'/>
              <p className='m-1'><strong>{song.trackName}</strong> by {song.artistName}</p>
              <audio controls src={song.previewUrl} className='mt-1'></audio>
              <div>
              <DeleteSong trackId={song.trackId} onDelete={deleteSong} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DisplaySongs;


