'use client';

type DeleteSongProps = {
  trackId: number;
  onDelete: (trackId: number) => void;
};

const DeleteSong = ({ trackId, onDelete }: DeleteSongProps) => {
  return (
    <button onClick={() => onDelete(trackId)} className="bg-red-700 text-white hover:bg-red-400 hover:text-white p-2 rounded mt-3">Delete</button>
  );
};

export default DeleteSong;


