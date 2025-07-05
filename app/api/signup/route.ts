import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const { username, password } = body;

  if (!username || !password) {
    return NextResponse.json({ message: "Missing fields" }, { status: 400 });
  }

  return NextResponse.json(
    { message: "User registered", status: "success" },
    { status: 201 }
  );
}
