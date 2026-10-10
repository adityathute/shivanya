import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <Link className="brand footer-brand" href="/" aria-label="Shivanya home">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </span>
          <span className="brand-name">shivanya</span>
        </Link>
        <p>Tools for building thoughtful digital experiences.</p>
        <span className="footer-copyright">© {new Date().getFullYear()} Shivanya</span>
      </div>
    </footer>
  );
}
