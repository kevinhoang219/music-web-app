// app/api/music/playlist/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authConfig } from '@/libs/auth';
import connectMongoDB from '@/libs/connectdb';
import { User } from '@/models/User';

export async function GET() {
  const session = await getServerSession(authConfig);

  if (!session || !session.user?.email) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  await connectMongoDB();

  const user = await User.findOne({ email: session.user.email });

  if (!user) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }

  return NextResponse.json({ playlist: user.playlist });
}


