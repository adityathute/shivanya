
import Link from "next/link";

export default function PlaygroundAuthPage() {
  return (
    <div className="sdk-playground-page">
      <div className="sdk-breadcrumb">
        <Link href="/">Shivanya</Link>
        <span>/</span>
        <Link href="/playground">Playground</Link>
        <span>/</span>
        <span>Auth</span>
      </div>

      <div className="sdk-page-eyebrow">
        <span /> PACKAGE OVERVIEW
      </div>

      <h1>shivanya-auth</h1>
      <p className="sdk-page-intro">
        Authentication and account UI for Shivanya applications.
      </p>

      <section className="sdk-detail-grid">
        <div className="sdk-detail-card">
          <span className="sdk-detail-label">INSTALLATION</span>
          <div className="sdk-code-block">
            <code>npm install shivanya-auth</code>
          </div>
          <p>Install the authentication package in your application.</p>
        </div>

        <div className="sdk-detail-card">
          <span className="sdk-detail-label">IMPORT EXAMPLE</span>
          <pre className="sdk-code-block sdk-code-multiline">
            <code>{`import "shivanya-auth/styles";
// Import the authentication components you need`}</code>
          </pre>
          <p>Check the package exports for the available authentication APIs.</p>
        </div>
      </section>

      <section className="sdk-features-section">
        <h2>What you can explore</h2>
        <div className="sdk-feature-list">
          {[
            "Authentication and account experiences",
            "Built on Shivanya Core and UI",
            "Reusable React components",
            "Designed for integration with Shivanya Auth",
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
