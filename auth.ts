import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { supabase } from "@/app/lib/superbase";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Google,
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        const { email, password } = credentials;
        const { data, error } = await supabase.auth.signInWithPassword({
          email: `${email}`,
          password: `${password}`,
        });
        if (error || !data.user) {
          throw new Error("Invalid email or password");
        }
        return {
          id: data.user.id,
          email: data.user.email,
          name: data.user.user_metadata?.fullName || data.user.email,
          role: data.user.user_metadata?.role || "USER",
        };
      },
    }),
  ],
});
