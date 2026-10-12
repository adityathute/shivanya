"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./SiteFooter.css";

export default function SiteFooter() {
  const pathname = usePathname();

  const handleBrandClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      event.preventDefault();
      window.history.replaceState(null, "", "/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <Link
          className="footer-brand"
          href="/"
          aria-label="Shivanya home"
          onClick={handleBrandClick}
        >
          <Image src="/logo.png" alt="" width={24} height={24} />
          <span className="footer-brand-name">Shivanya</span>
        </Link>

        <p className="footer-description">
          Tools for building thoughtful digital experiences.
        </p>

        <span className="footer-copyright">
          © {new Date().getFullYear()} Shivanya. All rights reserved.
        </span>
      </div>
    </footer>
  );
}