import { NextAuthConfig } from "next-auth";
export const authConfig = {
  providers: [],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashbord", nextUrl));
      }
      return true;
    },
  },
  pages: {
    signIn: "/logins",
  },
} satisfies NextAuthConfig;
