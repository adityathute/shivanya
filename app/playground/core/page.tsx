
import Link from "next/link";

export default function PlaygroundCorePage() {
  return (
    <div className="sdk-playground-page">
      <div className="sdk-breadcrumb">
        <Link href="/">Shivanya</Link>
        <span>/</span>
        <Link href="/playground">Playground</Link>
        <span>/</span>
        <span>Core</span>
      </div>

      <div className="sdk-page-eyebrow">
        <span /> PACKAGE OVERVIEW
      </div>

      <h1>shivanya-core</h1>
      <p className="sdk-page-intro">
        Core client functionality for the Shivanya platform.
      </p>

      <section className="sdk-detail-grid">
        <div className="sdk-detail-card">
          <span className="sdk-detail-label">INSTALLATION</span>
          <div className="sdk-code-block">
            <code>npm install shivanya-core</code>
          </div>
          <p>Install the core SDK package in your application.</p>
        </div>

        <div className="sdk-detail-card">
          <span className="sdk-detail-label">IMPORT EXAMPLE</span>
          <pre className="sdk-code-block sdk-code-multiline">
            <code>{`import { /* core exports */ } from "shivanya-core";`}</code>
          </pre>
          <p>Check the package exports for the available core APIs.</p>
        </div>
      </section>

      <section className="sdk-features-section">
        <h2>What you can explore</h2>
        <div className="sdk-feature-list">
          {[
            "Core platform client",
            "Shared platform functionality",
            "TypeScript package",
            "Foundation for other SDK packages",
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
