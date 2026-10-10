"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { WebsiteShell } from "shivanya-shell";

const navigation = [
  ["Products", "/apps"],
  ["Components", "/components"],
  ["Docs", "/docs"],
  ["Packages", "/packages"],
  ["Guides", "/guides"],
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <WebsiteShell
      className="shv-site-shell"
      branding={{
        name: <span className="shv-brand-name">Shivanya<span>MS</span></span>,
        subtitle: "Developer platform",
        href: "/",
      }}
      headerStart={
        <Link href="/" className="shv-brand-mark" aria-label="Shivanya home">S</Link>
      }
      headerEnd={
        <nav className="shv-nav" aria-label="Main navigation">
          {navigation.map(([label, href]) => (
            <Link href={href} key={href}>{label}</Link>
          ))}
          <Link className="shv-nav-cta" href="/auth/login">Sign in</Link>
        </nav>
      }
      footer={
        <div className="shv-footer-inner">
          <div><strong>Shivanya</strong><p>One connected foundation for your digital workspace.</p></div>
          <div className="shv-footer-links">
            <Link href="/docs">Documentation</Link>
            <Link href="/packages">SDK packages</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
          <small>© {new Date().getFullYear()} Shivanya</small>
        </div>
      }
    >
      {children}
    </WebsiteShell>
  );
}
