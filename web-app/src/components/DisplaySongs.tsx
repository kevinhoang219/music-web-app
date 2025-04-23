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
    <div style={{ padding: '1rem' }}>
      <h2 className="text-4xl font-bold mb-4 text-center">📀 My Playlist</h2>

      {message && <p>{message}</p>}

      {songs.length === 0 ? (
        <p>You don’t have any songs in your playlist yet.</p>
      ) : (
        <div>
          {songs.map((song) => (
            <div key={song.trackId} style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
              <img src={song.artworkUrl} alt={song.trackName} />
              <p><strong>{song.trackName}</strong> by {song.artistName}</p>
              <audio controls src={song.previewUrl}></audio>
              <DeleteSong trackId={song.trackId} onDelete={deleteSong} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DisplaySongs;


