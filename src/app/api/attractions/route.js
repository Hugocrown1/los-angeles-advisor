import { register } from "@/instrumentation";

import { NextResponse } from "next/server";
import Attraction from "@/models/attraction";

export async function GET() {
  try {
    await register();
    const attractions = await Attraction.find();
    return NextResponse.json(attractions);
  } catch (error) {
    return NextResponse.error(error);
  }
}

export async function POST(request) {
  try {
    await register();
    const body = await request.json();
    const attraction = new Attraction({ ...body });
    await attraction.save();
    return NextResponse.json(attraction);
  } catch (error) {
    return NextResponse.error(error);
  }
}
