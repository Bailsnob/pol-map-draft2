import { NextResponse } from "next/server";
export function POST(req) {
  return NextResponse.json({ status: "good", data: {} }, { status: 201 });
}