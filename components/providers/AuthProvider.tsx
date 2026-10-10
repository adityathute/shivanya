"use client";

import { AuthProvider as ShivanyaAuthProvider } from "shivanya-auth";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ShivanyaAuthProvider
      config={{
        baseUrl:
          process.env.NEXT_PUBLIC_AUTH_API ||
          "http://localhost:8000",
        mode: "cookie",
        authUrl:
          process.env.NEXT_PUBLIC_AUTH_URL ||
          "https://auth.shivanya.tech",
      }}
    >
      {children}
    </ShivanyaAuthProvider>
  );
}