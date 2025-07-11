import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { protectedRoutes } from "./app/lib/access";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  const matched = protectedRoutes.find((route) =>
    pathname.startsWith(route.path)
  );

  if (matched) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    const role = token.role;
    if (!role || !matched.allowedRoles.includes(role as string)) {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }
  }

  return NextResponse.next();
}
export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*"],
};

