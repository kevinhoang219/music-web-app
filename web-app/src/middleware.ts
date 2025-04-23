import { NextRequest, NextResponse } from "next/server";

const middleware = (request: NextRequest) => {
    const { pathname } = request.nextUrl;

    console.log('Restricted route hit: ${pathname}');
    console.log("Can't go here!");
    return NextResponse.redirect(new URL("/", request.url));
};

export const config = {
    matcher: [
        "/api/items",
        "/api/items/:id"
    ]
};

export default middleware;


import { auth } from "./auth";
import { NextResponse } from "next/server";

// export default auth((req) => {
//   const isLoggedIn = !!req.auth?.user;
//   const protectedRoutes = ["/create-item", "/edit-item"];

//   if (!isLoggedIn && protectedRoutes.some(route => req.nextUrl.pathname.startsWith(route))) {
//     return NextResponse.redirect(new URL("/", req.url));
//   }
// });

// export const config = {
//   matcher: ["/create-item", "/edit-item/:path*"],
// };



