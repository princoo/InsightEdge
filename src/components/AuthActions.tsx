"use client";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";
import LogOut from "./LogOut";
import { usePathname } from "next/navigation";

export default function AuthActions() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const isActive = pathname === "/login";
  return (
    <>
      {!session ? (
        <Link
          href="/login"
          className={`text-secondary-text dark:text-white hover:text-blue ${
            isActive ? "font-semibold text-blue underline" : ""
          }`}
        >
          Login
        </Link>
      ) : (
        <LogOut />
      )}
    </>
  );
}
