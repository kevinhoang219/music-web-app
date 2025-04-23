import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import connectMongoDB from '@/lib/connectdb';
import { User } from '@/models/User';
export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  if (!name || !email || !password) {
    return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
  }

  await connectMongoDB();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return NextResponse.json({ message: 'User already exists' }, { status: 409 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await User.create({ name, email, password: hashedPassword });

  return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
}



