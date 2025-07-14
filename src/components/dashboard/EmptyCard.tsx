import Link from "next/link";
import React from "react";
import { ImFileEmpty } from "react-icons/im";

export default function EmptyCard() {
  return (
    <div className="text-center">
      <div className="text-4xl mb-4 flex justify-center">
        <ImFileEmpty />
      </div>
      <h3 className="text-lg font-semibold mb-2 dark:text-white">
        No metrics yet
      </h3>
      <p className="text-secondary-text dark:text-white mb-4">
        Navigate through your website to start collecting performance data
      </p>
      <Link
        href="/"
        className="inline-block px-4 py-2 bg-blue text-white rounded-lg hover:bg-blue/75"
      >
        Go to Homepage
      </Link>
    </div>
  );
}
