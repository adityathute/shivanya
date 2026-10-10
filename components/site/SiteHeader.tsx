import Link from "next/link";

const navigation = [
  { label: "SDK", href: "#packages" },
  { label: "Documentation", href: "#quick-start" },
  { label: "Playground", href: "/playground" },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link className="brand" href="/" aria-label="Shivanya home">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </span>
          <span className="brand-name">shivanya<span className="brand-period">.</span></span>
        </Link>

        <nav className="site-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="header-cta"
          href="https://github.com/adityathute/shivanya-sdk"
          target="_blank"
          rel="noreferrer"
        >
          View on GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
