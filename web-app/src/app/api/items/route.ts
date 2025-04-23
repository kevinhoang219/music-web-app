<<<<<<< Updated upstream
import { handlers } from "../../../auth";
export const { GET, POST } = handlers;

=======
<<<<<<< Updated upstream
import connectMongoDB from "../../../../config/mongodb";
import Item from "../../../models/itemSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
=======
import connectMongoDB from '@/libs/connectdb';
import { NextResponse } from 'next/server';
import Item from '@/models/itemSchema';


export async function GET() {
  try {
    await connectMongoDB();
    const items = await Item.find(); // Retrieve all items
    return NextResponse.json({ items }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}


export async function POST(request: Request) {
  try {
    const { title, description, url } = await request.json();
    await connectMongoDB();

    const newItem = new Item({ title, description, url });
    await newItem.save();

    return NextResponse.json({ message: 'Item added successfully' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: `Failed to add item: ${error}` }, { status: 500 });
  }
}


>>>>>>> Stashed changes
>>>>>>> Stashed changes


