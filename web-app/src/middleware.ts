// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";


// Your secret from .env.local
const secret = process.env.AUTH_SECRET;


export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret });
  const isAuthenticated = !!token;


  const protectedRoutes = ["/create-item", "/edit-item", "/profile", "/api/items"];


  const isProtected = protectedRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route)
  );


  if (!isAuthenticated && isProtected) {
    // console.log("Unauthorized access to:", req.nextUrl.pathname);
    return NextResponse.redirect(new URL("/", req.url));
  }


  return NextResponse.next(); // Allow access
}





