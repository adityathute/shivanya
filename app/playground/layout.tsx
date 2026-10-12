"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { AppShell, ShellSidebar, ShellMobileNav } from "shivanya-shell";
import {
  AuthModal,
  UserDropdown,
  useAuth,
  type UserDropdownView,
  type AccountView,
} from "shivanya-auth";
import { useState } from "react";
import {
  HomeIcon,
  GridIcon,
  ShieldCheckIcon,
  LayoutIcon,
  CodeIcon,
} from "shivanya-ui";
import { playgroundPackages } from "../../components/playground/packageData";
import SiteMobileHeader from "../../components/site/SiteMobileHeader";
import SiteMobileFooter from "../../components/site/SiteMobileFooter";
import "./playground.css";

const packageIcons = {
  ui: <GridIcon />,
  auth: <ShieldCheckIcon />,
  shell: <LayoutIcon />,
  core: <CodeIcon />,
};

const navigation = [
  {
    label: "Overview",
    href: "/playground",
    icon: <HomeIcon />,
    exact: true,
  },
  ...Object.entries(playgroundPackages).map(([key, item]) => ({
    label: item.route,
    href: item.href,
    icon: packageIcons[key as keyof typeof packageIcons],
  })),
];

const branding = {
  name: "Shivanya",
  src: "/logo.png",
  href: "/",
};

export default function PlaygroundLayout({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();

  const { loading } = useAuth();

  const [authModal, setAuthModal] = useState(false);
  const [authInitialView, setAuthInitialView] = useState<"login" | "register">(
    "login",
  );
  const [accountView, setAccountView] = useState<AccountView>("overview");

  const handleNavigate = (view: UserDropdownView) => {
    setAccountView(view);
    setAuthInitialView("login");
    setAuthModal(true);
  };

  const handleLogin = () => {
    setAccountView("overview");
    setAuthInitialView("login");
    setAuthModal(true);
  };

  const handleRegister = () => {
    setAccountView("overview");
    setAuthInitialView("register");
    setAuthModal(true);
  };

  return (
    <AppShell className="sdk-playground">
      <SiteMobileHeader
        actions={
          !loading ? (
            <UserDropdown
              onNavigate={handleNavigate}
              onLogin={handleLogin}
              onRegister={handleRegister}
            />
          ) : null
        }
      />

      <AuthModal
        open={authModal}
        onClose={() => setAuthModal(false)}
        initialView={authInitialView}
        accountView={accountView}
        onAuthenticated={() => setAuthModal(false)}
      />

      <ShellMobileNav
        navigation={navigation}
        pathname={pathname}
        linkComponent={Link}
        branding={branding}
        panelClassName="site-mobile-nav"
        sidebarClassName="site-mobile-sidebar"
        size={248}
        footer={<SiteMobileFooter />}
      />

      <div className="sdk-playground-layout">
        <ShellSidebar
          navigation={navigation}
          pathname={pathname}
          linkComponent={Link}
          branding={branding}
          width={248}
          variant="static"
          className="sdk-playground-desktop-sidebar"
          footer={<SiteMobileFooter />}
        />

        <main className="sdk-playground-main">{children}</main>
      </div>
    </AppShell>
  );
}
