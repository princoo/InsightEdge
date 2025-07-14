import React from "react";
import { signOut } from "next-auth/react";
export default function LogOut() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="text-secondary-text dark:text-white hover:text-blue cursor-pointer"
    >Logout</button>
  );
}
