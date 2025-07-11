import { makeRole } from "@/app/lib/utils/MakeRole";
import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const role = makeRole(user.email ?? "");
        token.role = role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
        if (!session.user.image) {
          session.user.image = null;
        }
      }
      return session;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
