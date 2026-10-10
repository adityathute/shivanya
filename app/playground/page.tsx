import Link from "next/link";

const packages = [
  { name: "shivanya-ui", label: "UI components", description: "Reusable interface components and shared design tokens.", href: "/playground/ui", icon: "◈" },
  { name: "shivanya-auth", label: "Authentication", description: "Authentication and account UI for Shivanya applications.", href: "/playground/auth", icon: "⌘" },
  { name: "shivanya-shell", label: "Application shell", description: "Reusable layouts and application structure.", href: "/playground/shell", icon: "▣" },
  { name: "shivanya-core", label: "Core SDK", description: "Core client functionality for the Shivanya platform.", href: "/playground/core", icon: "{}" },
  { name: "shivanya-ai", label: "AI tools", description: "AI client capabilities for your applications.", href: "/playground/ai", icon: "✳" },
];

export default function PlaygroundPage() {
  return (
    <div className="sdk-playground-page">
      <div className="sdk-breadcrumb"><Link href="/">Shivanya</Link><span>/</span><span>Playground</span></div>
      <div className="sdk-page-eyebrow"><span /> DEVELOPER PLAYGROUND</div>
      <h1>Explore the Shivanya SDK</h1>
      <p className="sdk-page-intro">Browse the packages, learn what each one does, and explore the examples as the public playground grows.</p>
      <section className="sdk-welcome-panel">
        <div><span className="sdk-panel-kicker">ONE ECOSYSTEM</span><h2>Build with the tools you need.</h2><p>Each package has a clear purpose and works as part of the wider Shivanya ecosystem.</p></div>
        <div className="sdk-panel-symbol" aria-hidden="true">{"{ }"}</div>
      </section>
      <div className="sdk-section-heading"><div><h2>Packages</h2><p>Choose a package to explore.</p></div><span className="sdk-package-count">05 packages</span></div>
      <div className="sdk-package-grid">
        {packages.map((item) => (
          <Link className="sdk-package-card" href={item.href} key={item.name}>
            <span className="sdk-package-icon" aria-hidden="true">{item.icon}</span>
            <span className="sdk-package-label">{item.label}</span>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <span className="sdk-card-link">Explore package <span aria-hidden="true">→</span></span>
          </Link>
        ))}
      </div>
      <section className="sdk-next-step">
        <div><h2>Want to use the SDK in your app?</h2><p>Start with the package installation and import the pieces you need.</p></div>
        <Link href="/#quick-start" className="sdk-primary-link">Quick start <span aria-hidden="true">→</span></Link>
      </section>
    </div>
  );
}
