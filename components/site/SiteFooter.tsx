import Image from "next/image";
import Link from "next/link";
import "./SiteFooter.css";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <Link className="footer-brand" href="/" aria-label="Shivanya home">
          <Image
            src="/logo.png"
            alt=""
            width={24}
            height={24}
          />
          <span className="footer-brand-name">Shivanya</span>
        </Link>

        <p className="footer-description">
          Tools for building thoughtful digital experiences.
        </p>

        <span className="footer-copyright">
          © {new Date().getFullYear()} Shivanya
        </span>
      </div>
    </footer>
  );
}