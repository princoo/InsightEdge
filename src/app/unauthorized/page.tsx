import Link from "next/link";
import React from "react";

export default function index() {
  return (
    <div className="bg-red-100 border-2 border-red-300 p-4 m-4 rounded-lg">
      <p className="text-sm text-gray-secondary">
        <span>You are not authorized to access this page</span>
        <Link className="ml-2 underline" href="/">
          Go Home
        </Link>
      </p>
    </div>
  );
}
