import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, description } = await request.json();
    const category = { title, description };
    console.log(category);
    return new NextResponse().json(category); // Create an instance of NextResponse and call json method
  } catch (error) {
    console.log(error);
    return new NextResponse().json(
      {
        error,
        message: "Failed to create a category",
      },
      {
        status: 500,
      }
    );
  }
}
