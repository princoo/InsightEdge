"use client";

// import { PiGithubLogo } from "react-icons/pi";
import { RiGoogleLine } from "react-icons/ri";
import Button from "./ui/Button";
import { signIn } from "next-auth/react";

export default function AuthMethods() {
  return (
    <>
      <Button
        variant="secondary"
        size="large"
        type="button"
        className="flex items-center justify-center gap-2"
        onClick={() => signIn("google", { callbackUrl: "/" })}
      >
        <RiGoogleLine className="text-black" size={20} />
        <span className="text-black">Continue with Google</span>
      </Button>
    </>
  );
}
