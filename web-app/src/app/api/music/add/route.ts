import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authConfig } from '@/libs/auth';
import connectMongoDB from '@/libs/connectdb';
import {User} from '@/models/User'; // you likely don’t need the `{}` import anymore


export async function POST(req: Request) {
  const session = await getServerSession(authConfig);


  if (!session || !session.user?.email) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }


  const body = await req.json();


  const song = {
    trackName: body.trackName,
    artistName: body.artistName,
    artworkUrl: body.artworkUrl,
    previewUrl: body.previewUrl,
    trackId: body.trackId,
  };


  try {
    await connectMongoDB();


    const user = await User.findOne({ email: session.user.email });


    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }


    // Avoid adding duplicates
    const alreadyExists = user.playlist.some((track) => track.trackId === song.trackId);
    if (alreadyExists) {
      return NextResponse.json({ message: 'Song already in playlist' }, { status: 400 });
    }


    user.playlist.push(song);
    await user.save();


    return NextResponse.json({ message: 'Song added to playlist' }, { status: 200 });
  } catch (err) {
    console.error('Error adding song to playlist:', err);
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
  }
}





