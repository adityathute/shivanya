
import Link from "next/link";

export default function PlaygroundUIPage() {
  return (
    <div className="sdk-playground-page">
      <div className="sdk-breadcrumb">
        <Link href="/">Shivanya</Link>
        <span>/</span>
        <Link href="/playground">Playground</Link>
        <span>/</span>
        <span>UI</span>
      </div>

      <div className="sdk-page-eyebrow">
        <span /> PACKAGE OVERVIEW
      </div>

      <h1>shivanya-ui</h1>
      <p className="sdk-page-intro">
        Reusable React interface components and design-system styles.
      </p>

      <section className="sdk-detail-grid">
        <div className="sdk-detail-card">
          <span className="sdk-detail-label">INSTALLATION</span>
          <div className="sdk-code-block">
            <code>npm install shivanya-ui</code>
          </div>
          <p>Install the package before importing its components.</p>
        </div>

        <div className="sdk-detail-card">
          <span className="sdk-detail-label">IMPORT EXAMPLE</span>
          <pre className="sdk-code-block sdk-code-multiline">
            <code>{`import "shivanya-ui/styles";
import { Button } from "shivanya-ui";`}</code>
          </pre>
          <p>Import the components and styles required by your application.</p>
        </div>
      </section>

      <section className="sdk-features-section">
        <h2>What you can explore</h2>
        <div className="sdk-feature-list">
          {[
            "Foundation and form components",
            "Feedback and overlay components",
            "Layout, navigation, and data display",
            "Shared icons and design tokens",
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
