import { NextResponse } from "next/server";

export async function POST(req) {
  return NextResponse.json({
    status:"good",
    message:"password updated successfully"
  }, {status:201});
}