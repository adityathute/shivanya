"use client";

import type { ReactNode } from "react";
import { ShellHeader } from "shivanya-shell";
import "./SiteMobileHeader.css";

type SiteMobileHeaderProps = {
  actions?: ReactNode;
};

const branding = {
  name: "Shivanya",
  src: "/logo.png",
  href: "/",
};

export default function SiteMobileHeader({
  actions,
}: SiteMobileHeaderProps) {
  return (
    <div
      className={`site-mobile-header-wrapper ${
        actions ? "site-mobile-header-wrapper--with-actions" : ""
      }`}
    >
      <ShellHeader
        branding={branding}
        position="sticky"
        height={66}
        className="site-mobile-header"
      />

      {actions && (
        <div className="site-mobile-header-actions">
          {actions}
        </div>
      )}
    </div>
  );
}