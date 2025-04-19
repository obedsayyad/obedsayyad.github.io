// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Redirect to another domain
  return NextResponse.redirect("https://obed1s.vercel.app/");
}
