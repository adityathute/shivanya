"use client";

import { useEffect, type ReactNode } from "react";
import Link from "next/link";
import { Activity, Grid2X2, Home, Settings, Sparkles, UserRound } from "lucide-react";
import { AuthProvider, useAuth } from "shivanya-auth";
import { DashboardShell } from "shivanya-shell";

const navigation = [
  { id: "dashboard", label: "Overview", href: "/app/dashboard", icon: <Home size={17} />, exact: true },
  { id: "apps", label: "Applications", href: "/apps", icon: <Grid2X2 size={17} /> },
  { id: "activity", label: "Activity", href: "/app/activity", icon: <Activity size={17} /> },
  { id: "assistant", label: "Syra assistant", href: "/app/assistant", icon: <Sparkles size={17} /> },
  { id: "profile", label: "Profile & settings", href: "/app/profile", icon: <UserRound size={17} /> },
];

function ProtectedWorkspace({ children, pathname }: { children: ReactNode; pathname: string }) {
  const { loading, isAuthenticated, user, logout } = useAuth();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      window.location.replace("/auth/login?next=" + encodeURIComponent(pathname));
    }
  }, [loading, isAuthenticated, pathname]);

  if (loading || !isAuthenticated) {
    return <main className="shv-auth-config"><span className="shv-eyebrow">Secure workspace</span><h1>{loading ? "Checking your session…" : "Redirecting to sign in…"}</h1><p>Your workspace is available after Shivanya Auth verifies your session.</p></main>;
  }

  return (
    <DashboardShell
      className="shv-app-shell"
      branding={{ name: "ShivanyaMS", subtitle: "Workspace", href: "/app/dashboard" }}
      navigation={navigation}
      pathname={pathname}
      linkComponent={Link}
      headerEnd={<div className="shv-shell-account"><span>{user?.email?.slice(0, 1).toUpperCase() || "U"}</span><span>{user?.email || "Account"}</span><button type="button" onClick={() => void logout()} className="shv-shell-logout">Sign out</button><Settings size={15}/></div>}
      sidebarFooter={<Link href="/" className="shv-shell-back">← Public website</Link>}
      contentPadding={0}
    >
      {children}
    </DashboardShell>
  );
}

export function AppLayout({ children, pathname }: { children: ReactNode; pathname: string }) {
  const baseUrl = process.env.NEXT_PUBLIC_AUTH_BASE_URL?.trim();

  if (!baseUrl) {
    return <main className="shv-auth-config"><span className="shv-eyebrow">Authentication setup</span><h1>Connect your Shivanya Auth API</h1><p>Protected workspace routes require the real Auth API. Set NEXT_PUBLIC_AUTH_BASE_URL in your local environment before signing in.</p><pre>{"NEXT_PUBLIC_AUTH_BASE_URL=https://your-auth-api.example.com"}</pre><Link className="shv-text-link" href="/auth/login">Open sign in →</Link></main>;
  }

  return <AuthProvider config={{ baseUrl, mode: "cookie" }}><ProtectedWorkspace pathname={pathname}>{children}</ProtectedWorkspace></AuthProvider>;
}
