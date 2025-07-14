import { NextResponse } from "next/server";
import { protectedRoutes } from "./app/lib/access";
import { auth } from "../auth";

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const session = req.auth;

  if (session && pathname === "/login") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  const matched = protectedRoutes.find((route) =>
    pathname.startsWith(route.path)
  );

  if (matched) {
    if (!session) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    const role = session.user?.role;
    if (!role || !matched.allowedRoles.includes(role as string)) {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }
  }

  const res = NextResponse.next();
  res.headers.set("x-powered-by", "InsightEdge");
  return res;
});

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/unauthorized"],
};
