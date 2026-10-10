import Link from "next/link";
import type { ReactNode } from "react";
import SiteHeader from "../../components/site/SiteHeader";
import SiteFooter from "../../components/site/SiteFooter";
import "./playground.css";

const navigation = [
  { label: "Overview", href: "/playground", icon: "⌂" },
  { label: "UI components", href: "/playground/ui", icon: "◈" },
  { label: "Authentication", href: "/playground/auth", icon: "⌘" },
  { label: "Application shell", href: "/playground/shell", icon: "▣" },
  { label: "Core SDK", href: "/playground/core", icon: "{}" },
  { label: "AI tools", href: "/playground/ai", icon: "✳" },
];

export default function PlaygroundLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <div className="sdk-playground">
        <aside className="sdk-playground-sidebar" aria-label="Playground navigation">
          <div className="sdk-sidebar-heading">
            <span className="sdk-sidebar-mark">S</span>
            <span><strong>SDK Playground</strong><small>Explore the ecosystem</small></span>
          </div>
          <div className="sdk-sidebar-label">GET STARTED</div>
          <nav className="sdk-playground-nav">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="sdk-playground-nav-link">
                <span className="sdk-nav-icon" aria-hidden="true">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="sdk-sidebar-note">
            <span className="sdk-online-dot" />
            <span><strong>Shivanya SDK</strong><small>Explore packages and examples</small></span>
          </div>
        </aside>
        <main className="sdk-playground-main">{children}</main>
      </div>
      <SiteFooter />
    </>
  );
}
