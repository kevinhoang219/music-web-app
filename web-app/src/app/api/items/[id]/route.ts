<<<<<<< Updated upstream
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import mongoose from "mongoose";
import connectMongoDB from "../../../../lib/mongodb";
import Item from "../../../../models/itemSchema";
=======
import connectMongoDB from '@/libs/connectdb';
import Item from '@/models/itemSchema';
import { NextResponse } from 'next/server';
>>>>>>> Stashed changes

export async function GET({ params }: { params: { id: string } }) {
  try {
    await connectMongoDB();
    const item = await Item.findById(params.id); // Retrieve specific item by ID
    if (!item) return NextResponse.json({ message: 'Item not found' }, { status: 404 });
    return NextResponse.json({ item }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function PUT({ params, request }: { params: { id: string }; request: Request }) {
  try {
    const { title, description, url } = await request.json();
    await connectMongoDB();
    const updatedItem = await Item.findByIdAndUpdate(
      params.id,
      { title, description, url },
      { new: true }
    ); // Update item
    if (!updatedItem) return NextResponse.json({ message: 'Item not found' }, { status: 404 });
    return NextResponse.json({ message: 'Item updated successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function DELETE({ params }: { params: { id: string } }) {
  try {
    await connectMongoDB();
    const deletedItem = await Item.findByIdAndDelete(params.id); // Delete item by ID
    if (!deletedItem) return NextResponse.json({ message: 'Item not found' }, { status: 404 });
    return NextResponse.json({ message: 'Item deleted successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
