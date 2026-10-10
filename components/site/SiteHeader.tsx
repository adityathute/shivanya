"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AuthModal,
  AuthProvider,
  UserDropdown,
  useAuth,
  type UserDropdownView,
  type AccountView,
} from "shivanya-auth";
import { ShellProvider, ShellMobileNav, useShell } from "shivanya-shell";
import { IconButton } from "shivanya-ui";
import { MenuIcon } from "shivanya-ui/icons";
import NpmDownloads from "./NpmDownloads";
import "./SiteHeader.css";

const navigation = [
  { label: "SDK", href: "#packages" },
  { label: "Documentation", href: "#quick-start" },
  { label: "Playground", href: "/playground" },
];

const branding = {
  name: "Shivanya",
  // subtitle: "SDK",
  src: "/logo.png",
  href: "/",
};

function SiteHeaderContent() {
  const { loading } = useAuth();
  const { toggleMobile, closeMobile } = useShell();

  const [authOpen, setAuthOpen] = useState(false);
  const [accountView, setAccountView] = useState<AccountView>("overview");

  const handleNavigate = (view: UserDropdownView) => {
    setAccountView(view);
    setAuthOpen(true);
  };

  const handleLogin = () => {
    setAccountView("overview");
    setAuthOpen(true);
  };

  return (
    <>
      <header className="site-header">
        <div className="site-header-inner">
          <div className="mobile-menu-trigger">
            <IconButton
              type="button"
              variant="ghost"
              size="md"
              aria-label="Open menu"
              onClick={toggleMobile}
            >
              <MenuIcon />
            </IconButton>
          </div>

          <Link
            className="brand"
            href="/"
            aria-label="Shivanya home"
            onClick={closeMobile}
          >
            <Image src="/logo.png" alt="" width={24} height={24} priority />
            <span className="brand-name">Shivanya</span>
          </Link>

          <nav className="site-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-cta-group">
            <NpmDownloads />

            <a
              className="header-cta"
              href="https://github.com/adityathute/shivanya-sdk"
              target="_blank"
              rel="noreferrer"
              aria-label="View on GitHub"
            >
              <Image
                src="/github-logo.png"
                alt=""
                width={19}
                height={19}
                className="github-logo"
              />
              <span>View on GitHub</span>
              <span className="github-arrow" aria-hidden="true">
                ↗
              </span>
            </a>

            {!loading && (
              <UserDropdown
                onNavigate={handleNavigate}
                onLogin={handleLogin}
                onRegister={handleLogin}
              />
            )}
          </div>
        </div>
      </header>

      <ShellMobileNav
        navigation={navigation}
        pathname="/"
        branding={branding}
        open={undefined}
        onClose={closeMobile}
        size={280}
      />

      <AuthModal
        open={authOpen}
        onClose={() => setAuthOpen(false)}
        initialView="login"
        accountView={accountView}
        onAuthenticated={() => setAuthOpen(false)}
      />
    </>
  );
}

export default function SiteHeader() {
  return (
    <AuthProvider
      config={{
        baseUrl: "http://localhost:8000",
        mode: "cookie",
      }}
    >
      <ShellProvider defaultMobileOpen={false}>
        <SiteHeaderContent />
      </ShellProvider>
    </AuthProvider>
  );
}
