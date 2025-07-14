"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginPayload } from "@/types/Auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { LoginSchema } from "@/app/lib/utils/AuthSchema";
import Button from "../ui/Button";
import ErrorDiv from "../ui/ErrorDiv";
import { FormField } from "../ui/FormField";
import { FormInput } from "../ui/FormInput";
import AuthMethods from "../AuthMethods";

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setErrorMsg] = useState("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPayload>({
    resolver: zodResolver(LoginSchema),
  });
  const onSubmit = async (data: LoginPayload) => {
    setIsLoading(true);
    setErrorMsg("");
    try {
      const { email, password } = data;
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (res?.error) {
        setErrorMsg("Invalid email or password");
      } else {
        router.push("/");
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      setErrorMsg(`Something went wrong. ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-6 flex flex-col gap-5"
    >
      {error && <ErrorDiv error={error} />}
      <FormField label="Email" error={errors.email?.message}>
        <FormInput
          {...register("email")}
          placeholder="Alexei@gmail.com"
          error={!!errors.email}
          name="email"
        />
      </FormField>
      <FormField label="Password" error={errors.password?.message}>
        <FormInput
          {...register("password")}
          placeholder="*********"
          error={!!errors.password}
          type="password"
          name="password"
        />
      </FormField>
      <Link
        href="#"
        className="text-sm text-gray-secondary text-start underline"
      >
        Forgot password?
      </Link>

      <Button variant="primary" size="large" type="submit" disabled={isLoading}>
        {isLoading ? "Logging in..." : "Login"}
      </Button>
      <AuthMethods />
    </form>
  );
}
