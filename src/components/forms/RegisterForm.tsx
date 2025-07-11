"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RegisterPayload } from "@/types/Auth";
import { makeRole } from "@/app/lib/utils/MakeRole";
import { RegisterSchema } from "@/app/lib/utils/AuthSchema";
import { addProfile, registerUser } from "@/app/lib/authServices";
import ErrorDiv from "../ui/ErrorDiv";
import { FormField } from "../ui/FormField";
import Button from "../ui/Button";
import { FormInput } from "../ui/FormInput";

export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterPayload>({
    resolver: zodResolver(RegisterSchema),
  });
  const onSubmit = async (data: RegisterPayload) => {
    setIsLoading(true);
    setError("");
    const { email, password, fullName } = data;
    const role = makeRole(email);

    try {
      const response = await registerUser({ email, password, fullName, role });
      if (response.user) {
        await addProfile(response.user, fullName, role);
      }
      router.push("/login");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message);
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
      <FormField label="Full name" error={errors.fullName?.message}>
        <FormInput
          {...register("fullName")}
          placeholder="Alexei Ward"
          error={!!errors.fullName}
        />
      </FormField>
      <FormField label="Email" error={errors.email?.message}>
        <FormInput
          {...register("email")}
          placeholder="Alexei@gmail.com"
          error={!!errors.email}
        />
      </FormField>
      <FormField label="Password" error={errors.password?.message}>
        <FormInput
          {...register("password")}
          placeholder="*********"
          error={!!errors.password}
          type="password"
        />
      </FormField>
      <FormField
        label="Confirm password"
        error={errors.confirmPassword?.message}
      >
        <FormInput
          {...register("confirmPassword")}
          placeholder="*********"
          error={!!errors.confirmPassword}
          type="password"
        />
      </FormField>
      <Button variant="primary" size="large" type="submit" disabled={isLoading}>
        {isLoading ? "Signing up..." : "Sign up"}
      </Button>
    </form>
  );
}
