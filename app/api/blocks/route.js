import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, abbreviation } = await request.json();
    const block = { title, abbreviation };
    console.log(block);
    return NextResponse.json(block); // Use json method to send JSON response
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to create a block",
      },
      {
        status: 500,
      }
    );
  }
}
