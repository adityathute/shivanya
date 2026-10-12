"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import {
  AppShell,
  ShellSidebar,
  ShellMobileNav,
} from "shivanya-shell";
import {
  HomeIcon,
  GridIcon,
  ShieldCheckIcon,
  LayoutIcon,
  CodeIcon,
} from "shivanya-ui";
import SiteMobileHeader from "../../components/site/SiteMobileHeader";
import SiteMobileFooter from "../../components/site/SiteMobileFooter";
import "./playground.css";

const navigation = [
  {
    label: "Overview",
    href: "/playground",
    icon: <HomeIcon />,
    exact: true,
  },
  {
    label: "UI",
    href: "/playground/ui",
    icon: <GridIcon />,
  },
  {
    label: "Auth",
    href: "/playground/auth",
    icon: <ShieldCheckIcon />,
  },
  {
    label: "Shell",
    href: "/playground/shell",
    icon: <LayoutIcon />,
  },
  {
    label: "Core",
    href: "/playground/core",
    icon: <CodeIcon />,
  },
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

  return (
    <AppShell className="sdk-playground">
      <SiteMobileHeader />

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
