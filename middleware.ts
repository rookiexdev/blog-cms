import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  const isAuthPage = pathname === "/login" || pathname === "/signup";
  const isProtectedRoute =
    pathname.startsWith("/write-blog") || pathname.startsWith("/api/blogs");

  if (isAuthPage && token) {
    try {
      jwt.verify(token, JWT_SECRET);
      return NextResponse.redirect(new URL("/", request.url));
    } catch {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/signup", "/write-blog", "/api/blogs/:path*"],
};
