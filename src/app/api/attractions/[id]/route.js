import { register } from "@/instrumentation";

import { NextResponse } from "next/server";
import Attraction from "@/models/attraction";

export async function GET(request, { params: { id } }) {
  try {
    await register();

    const attraction = await Attraction.findById(id);

    return NextResponse.json(attraction);
  } catch (error) {
    return NextResponse.error(error);
  }
}

export async function PUT(request, { params: { id } }) {
  try {
    await register();
    const body = await request.json();
    const attraction = await Attraction.findByIdAndUpdate(
      id,
      { ...body },
      { new: true }
    );

    return NextResponse.json(attraction);
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json(error.message, { status: 500 });
  }
}

export async function DELETE(request, { params: { id } }) {
  try {
    await register();
    const response = await Attraction.findByIdAndDelete(id);

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.error(error);
  }
}
