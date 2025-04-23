import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authConfig } from '@/libs/auth';
import connectMongoDB from '@/libs/connectdb';
import { User } from '@/models/User';

export async function DELETE(req: Request, { params }: { params: { trackId: number } }) {
  const session = await getServerSession(authConfig);

  if (!session || !session.user?.email) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const { trackId } = params;

  try {
    await connectMongoDB();
    
    const user = await User.findOne({ email: session.user.email });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // Remove song from playlist
    user.playlist = user.playlist.filter((song) => song.trackId !== trackId);
    await user.save();

    return NextResponse.json({ message: 'Song removed from playlist' }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
  }
}


