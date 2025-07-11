import { User } from "next-auth";
import { supabase } from "./superbase";

interface RegisterInput {
  email: string;
  password: string;
  fullName: string;
  role: string;
}

export async function registerUser({
  email,
  password,
  fullName,
  role,
}: RegisterInput) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        role,
      },
    },
  });

  if (error) throw error;
  return data;
}

export async function addProfile(user: User, fullName: string, role: string) {
  const { error } = await supabase.from("profiles").insert({
    id: user.id,
    full_name: fullName,
    role,
  });

  if (error) throw error;
}
