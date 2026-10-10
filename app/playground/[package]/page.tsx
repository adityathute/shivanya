import Link from "next/link";
import { notFound } from "next/navigation";

const packageDetails: Record<string, { title: string; description: string; install: string; example: string; features: string[] }> = {
  ui: { title: "shivanya-ui", description: "Reusable React interface components and design-system styles.", install: "npm install shivanya-ui", example: 'import "shivanya-ui/styles";\nimport { Button } from "shivanya-ui";', features: ["Foundation and form components", "Feedback and overlay components", "Layout, navigation, and data display", "Shared icons and design tokens"] },
  auth: { title: "shivanya-auth", description: "Authentication and account UI for Shivanya applications.", install: "npm install shivanya-auth", example: 'import "shivanya-auth/styles";\nimport { /* exported auth components */ } from "shivanya-auth";', features: ["Authentication and account experiences", "Built on Shivanya Core and UI", "Reusable React components", "Designed for integration with Shivanya Auth"] },
  shell: { title: "shivanya-shell", description: "Reusable layouts, shell components, and application structure.", install: "npm install shivanya-shell", example: 'import "shivanya-shell/styles";\nimport { WebsiteShell } from "shivanya-shell";', features: ["Website and application layouts", "Header, sidebar, and main regions", "Reusable shell context and hooks", "Consistent application structure"] },
  core: { title: "shivanya-core", description: "Core client functionality for the Shivanya platform.", install: "npm install shivanya-core", example: 'import { /* core exports */ } from "shivanya-core";', features: ["Core platform client", "Shared platform functionality", "TypeScript package", "Foundation for other SDK packages"] },
  ai: { title: "shivanya-ai", description: "AI client capabilities for applications built on Shivanya.", install: "npm install shivanya-ai", example: 'import { /* AI exports */ } from "shivanya-ai";', features: ["AI client package", "Uses Shivanya Core", "TypeScript-friendly API", "Designed for application integration"] },
};

export function generateStaticParams() {
  return Object.keys(packageDetails).map((pkg) => ({ package: pkg }));
}

export default async function PlaygroundPackagePage({ params }: { params: Promise<{ package: string }> }) {
  const { package: packageKey } = await params;
  const item = packageDetails[packageKey];
  if (!item) notFound();

  return (
    <div className="sdk-playground-page">
      <div className="sdk-breadcrumb"><Link href="/">Shivanya</Link><span>/</span><Link href="/playground">Playground</Link><span>/</span><span>{item.title}</span></div>
      <div className="sdk-page-eyebrow"><span /> PACKAGE OVERVIEW</div>
      <h1>{item.title}</h1>
      <p className="sdk-page-intro">{item.description}</p>
      <section className="sdk-detail-grid">
        <div className="sdk-detail-card"><span className="sdk-detail-label">INSTALLATION</span><div className="sdk-code-block"><code>{item.install}</code></div><p>Install the package in your application before importing it.</p></div>
        <div className="sdk-detail-card"><span className="sdk-detail-label">IMPORT EXAMPLE</span><pre className="sdk-code-block sdk-code-multiline"><code>{item.example}</code></pre><p>Check the package exports in the SDK source for exact APIs.</p></div>
      </section>
      <section className="sdk-features-section"><h2>What you can explore</h2><div className="sdk-feature-list">{item.features.map((feature) => <div className="sdk-feature-row" key={feature}><span>✓</span>{feature}</div>)}</div></section>
      <Link className="sdk-back-link" href="/playground">← Back to all packages</Link>
    </div>
  );
}
