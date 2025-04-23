'use client';

type DeleteSongProps = {
  trackId: number;
  onDelete: (trackId: number) => void;
};

const DeleteSong = ({ trackId, onDelete }: DeleteSongProps) => {
  return (
    <button onClick={() => onDelete(trackId)}>Delete</button>
  );
};

export default DeleteSong;


