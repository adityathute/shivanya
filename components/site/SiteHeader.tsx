"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AuthModal,
  UserDropdown,
  useAuth,
  type UserDropdownView,
  type AccountView,
} from "shivanya-auth";
import { ShellProvider, ShellMobileNav, useShell } from "shivanya-shell";
import { IconButton } from "shivanya-ui";
import {
  HomeIcon,
  MenuIcon,
  LoginIcon,
  UserPlusIcon,
  FoundationIcon,
  DialogIcon,
  PlayIcon,
} from "shivanya-ui/icons";
import NpmDownloads from "./NpmDownloads";
import SiteMobileHeader from "./SiteMobileHeader";
import SiteMobileFooter from "./SiteMobileFooter";
import { usePathname } from "next/navigation";
import "./SiteHeader.css";

function NavIcon({
  type,
}: {
  type: "package" | "book" | "play" | "login" | "register";
}) {
  return <HomeIcon size={19} aria-hidden="true" />;
}

const navigation = [
  { label: "Home", href: "/", icon: <NavIcon type="package" /> },
  { label: "SDK", href: "#packages", icon: <FoundationIcon type="package" /> },
  {
    label: "Documentation",
    href: "#quick-start",
    icon: <DialogIcon type="book" />,
  },
  { label: "Playground", href: "/playground", icon: <PlayIcon type="play" /> },
];

const branding = {
  name: "Shivanya",
  src: "/logo.png",
  href: "/",
};

function SiteHeaderContent() {
  const { loading, isAuthenticated } = useAuth();
  const { toggleMobile, closeMobile } = useShell();
  const pathname = usePathname();

  const [authOpen, setAuthOpen] = useState(false);
  const [accountView, setAccountView] = useState<AccountView>("overview");
  const [authInitialView, setAuthInitialView] = useState<"login" | "register">(
    "login",
  );

  const handleNavigate = (view: UserDropdownView) => {
    setAccountView(view);
    setAuthInitialView("login");
    setAuthOpen(true);
  };

  const handleLogin = () => {
    setAuthInitialView("login");
    setAccountView("overview");
    setAuthOpen(true);
  };

  const handleRegister = () => {
    setAuthInitialView("register");
    setAccountView("overview");
    setAuthOpen(true);
  };

  const handleAuthClose = () => {
    setAuthOpen(false);
    closeMobile();
  };

  const mobileSidebarActions = (
    <>
      {!loading && !isAuthenticated && (
        <div className="site-mobile-auth-section">
          <div className="site-mobile-divider" />

          <div className="site-mobile-auth-actions">
            <button
              type="button"
              className="site-mobile-login"
              onClick={handleLogin}
            >
              <LoginIcon type="login" />
              <span>Login</span>
            </button>

            <button
              type="button"
              className="site-mobile-register"
              onClick={handleRegister}
            >
              <UserPlusIcon type="register" />
              <span>Register</span>
            </button>
          </div>
        </div>
      )}
    </>
  );

  const handleHomeClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    closeMobile();

    if (pathname === "/") {
      event.preventDefault();
      window.history.replaceState(null, "", "/");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <SiteMobileHeader />
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
            onClick={handleHomeClick}
          >
            <Image src="/logo.png" alt="" width={20} height={20} priority />
            <span className="brand-name">Shivanya</span>
          </Link>

          <nav className="site-nav" aria-label="Main navigation">
            {navigation
              .filter((item) => item.label !== "Home")
              .map((item) => (
                <Link key={item.label} href={item.href}>
                  {item.icon}
                  <span>{item.label}</span>
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
                onRegister={handleRegister}
              />
            )}
          </div>
        </div>
      </header>

      <ShellMobileNav
        navigation={navigation}
        pathname={pathname}
        linkComponent={Link}
        branding={branding}
        open={undefined}
        onClose={closeMobile}
        size={280}
        panelClassName="site-mobile-nav"
        sidebarClassName="site-mobile-sidebar"
        footer={<SiteMobileFooter />}
      >
        {mobileSidebarActions}
      </ShellMobileNav>

      <AuthModal
        open={authOpen}
        onClose={handleAuthClose}
        initialView={authInitialView}
        accountView={accountView}
        onAuthenticated={() => {
          setAuthOpen(false);
          closeMobile();
        }}
      />
    </>
  );
}

export default function SiteHeader() {
  return (
    <ShellProvider defaultMobileOpen={false}>
      <SiteHeaderContent />
    </ShellProvider>
  );
}
