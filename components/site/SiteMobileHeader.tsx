"use client";

import { ShellHeader } from "shivanya-shell";
import "./SiteMobileHeader.css";

const branding = {
  name: "Shivanya",
  src: "/logo.png",
  href: "/",
};

export default function SiteMobileHeader() {
  return (
    <ShellHeader
      branding={branding}
      position="sticky"
      height={66}
      className="site-mobile-header"
    />
  );
}
