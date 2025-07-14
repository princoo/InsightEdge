import RegisterForm from "@/components/forms/RegisterForm";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="w-1/2 mx-auto px-20 py-5 text-center border rounded-md border-blue my-2">
      <h1 className="font-bold text-xl text-blue">Create your account</h1>
      <RegisterForm />
      <p className="text-sm text-secondary-text mt-4">
        Already have an account?
        <Link href="/login" className="underline text-blue">
          Sign in
        </Link>
      </p>
    </div>
  );
}
