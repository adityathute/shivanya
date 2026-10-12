
import Link from "next/link";

export default function PlaygroundShellPage() {
  return (
    <div className="sdk-playground-page">
      <div className="sdk-breadcrumb">
        <Link href="/">Shivanya</Link>
        <span>/</span>
        <Link href="/playground">Playground</Link>
        <span>/</span>
        <span>Shell</span>
      </div>

      <div className="sdk-page-eyebrow">
        <span /> PACKAGE OVERVIEW
      </div>

      <h1>shivanya-shell</h1>
      <p className="sdk-page-intro">
        Reusable layouts, shell components, and application structure.
      </p>

      <section className="sdk-detail-grid">
        <div className="sdk-detail-card">
          <span className="sdk-detail-label">INSTALLATION</span>
          <div className="sdk-code-block">
            <code>npm install shivanya-shell</code>
          </div>
          <p>Install the package to build a consistent application layout.</p>
        </div>

        <div className="sdk-detail-card">
          <span className="sdk-detail-label">IMPORT EXAMPLE</span>
          <pre className="sdk-code-block sdk-code-multiline">
            <code>{`import "shivanya-shell/styles";
import { AppShell, ShellSidebar } from "shivanya-shell";`}</code>
          </pre>
          <p>Use the shell components exported by the package.</p>
        </div>
      </section>

      <section className="sdk-features-section">
        <h2>What you can explore</h2>
        <div className="sdk-feature-list">
          {[
            "Website and application layouts",
            "Header, sidebar, and main regions",
            "Reusable shell context and hooks",
            "Consistent application structure",
          ].map((feature) => (
            <div className="sdk-feature-row" key={feature}>
              <span>✓</span>
              {feature}
            </div>
          ))}
        </div>
      </section>

      <Link className="sdk-back-link" href="/playground">
        ← Back to overview
      </Link>
    </div>
  );
}
