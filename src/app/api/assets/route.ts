import { NextResponse } from "next/server";
import { assets } from "@/lib/data";

export async function GET() {
  return NextResponse.json({ assets });
}
