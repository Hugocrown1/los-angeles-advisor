import { register } from "@/instrumentation";

import { NextResponse } from "next/server";
import Attraction from "@/models/attraction";

export async function GET(request) {
  try {
    await register();

    if (!request.nextUrl.searchParams.has("page")) {
      const attractions = await Attraction.find();
      return NextResponse.json(attractions);
    }

    const page = parseInt(request.nextUrl.searchParams.get("page"), 10);
    const pageSize =
      parseInt(request.nextUrl.searchParams.get("pageSize"), 10) || 6;

    const skip = (page - 1) * pageSize;

    const attractionsPage = await Attraction.find().skip(skip).limit(pageSize);
    const total = await Attraction.countDocuments();

    return NextResponse.json({ attractionsPage, total });
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
