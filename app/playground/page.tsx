
import Link from "next/link";
import {
  GridIcon,
  ShieldCheckIcon,
  LayoutIcon,
  CodeIcon,
} from "shivanya-ui";

const packages = [
  {
    title: "shivanya-ui",
    category: "UI components",
    description: "Reusable interface components and shared design tokens.",
    href: "/playground/ui",
    icon: <GridIcon />,
  },
  {
    title: "shivanya-auth",
    category: "Authentication",
    description: "Authentication and account UI for Shivanya applications.",
    href: "/playground/auth",
    icon: <ShieldCheckIcon />,
  },
  {
    title: "shivanya-shell",
    category: "Application shell",
    description: "Reusable layouts and application structure.",
    href: "/playground/shell",
    icon: <LayoutIcon />,
  },
  {
    title: "shivanya-core",
    category: "Core SDK",
    description: "Core client functionality for the Shivanya platform.",
    href: "/playground/core",
    icon: <CodeIcon />,
  },
  {
    title: "shivanya-ai",
    category: "AI tools",
    description: "AI client capabilities for applications built on Shivanya.",
    href: "/playground/ai",
    icon: <CodeIcon />,
  },
];

export default function PlaygroundOverviewPage() {
  return (
    <div className="sdk-playground-page">
      <div className="sdk-breadcrumb">
        <Link href="/">Shivanya</Link>
        <span>/</span>
        <span>Playground</span>
      </div>

      <div className="sdk-page-eyebrow">
        <span /> SDK PLAYGROUND
      </div>

      <h1>Explore the Shivanya SDK</h1>

      <p className="sdk-page-intro">
        Browse the packages, learn what each one does, and explore the examples.
      </p>

      <section className="sdk-welcome-panel">
        <div>
          <span className="sdk-panel-kicker">ONE ECOSYSTEM</span>
          <h2>Build with the tools you need.</h2>
          <p>
            Each package has a clear purpose and works as part of the wider
            Shivanya ecosystem.
          </p>
        </div>
        <div className="sdk-panel-symbol">
          <CodeIcon />
        </div>
      </section>

      <section>
        <div className="sdk-section-heading">
          <div>
            <h2>Packages</h2>
            <p>Choose a package to explore.</p>
          </div>
          <span className="sdk-package-count">05 packages</span>
        </div>

        <div className="sdk-package-grid">
          {packages.map((item) => (
            <Link
              className="sdk-package-card"
              href={item.href}
              key={item.href}
            >
              <div className="sdk-package-icon">{item.icon}</div>
              <span className="sdk-package-label">{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="sdk-card-link">Explore package →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="sdk-next-step">
        <div>
          <h2>Want to use the SDK in your app?</h2>
          <p>Start with package installation and import the pieces you need.</p>
        </div>
        <Link className="sdk-primary-link" href="/playground/ui">
          Quick start →
        </Link>
      </section>
    </div>
  );
}
