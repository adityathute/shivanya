"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AuthPage, AuthProvider } from "shivanya-auth";

const views = ["login", "register", "forgot", "reset", "verify"] as const;
type View = (typeof views)[number];

export function AuthRouteClient({ requestedView }: { requestedView: string }) {
  const view: View = views.includes(requestedView as View) ? requestedView as View : "login";
  const [tokens, setTokens] = useState({ resetToken: "", verifyToken: "" });
  const baseUrl = process.env.NEXT_PUBLIC_AUTH_BASE_URL?.trim();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setTokens({
      resetToken: params.get("token") ?? "",
      verifyToken: params.get("token") ?? "",
    });
  }, []);

  if (!baseUrl) {
    return (
      <main className="shv-auth-config">
        <span className="shv-eyebrow">Authentication setup</span>
        <h1>Connect your Shivanya Auth API</h1>
        <p>Set <code>NEXT_PUBLIC_AUTH_BASE_URL</code> in your local environment to enable the real authentication screens. No fake login response is used.</p>
        <pre>{'NEXT_PUBLIC_AUTH_BASE_URL=https://your-auth-api.example.com'}</pre>
        <Link className="shv-text-link" href="/">Back to Shivanya home →</Link>
      </main>
    );
  }

  return (
    <div className="shv-auth-page">
      <Link className="shv-auth-brand" href="/">S <span>ShivanyaMS</span></Link>
      <AuthProvider config={{ baseUrl, mode: "cookie" }}>
        <AuthPage
          initialView={view}
          resetToken={tokens.resetToken || undefined}
          verifyToken={tokens.verifyToken || undefined}
          features={["login", "register", "forgot", "reset", "verify"]}
          onAuthenticated={() => { window.location.href = "/app/dashboard"; }}
        />
      </AuthProvider>
      <Link className="shv-auth-back" href="/">← Back to website</Link>
    </div>
  );
}
