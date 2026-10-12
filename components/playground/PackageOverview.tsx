import Link from "next/link";
import type { PlaygroundPackage } from "./packageData";

export default function PackageOverview({
  item,
}: {
  item: PlaygroundPackage;
}) {
  return (
    <div className="sdk-playground-page">
      <div className="sdk-breadcrumb">
        <Link href="/">Shivanya</Link>
        <span>/</span>
        <Link href="/playground">Playground</Link>
        <span>/</span>
        <span>{item.route}</span>
      </div>

      <div className="sdk-page-eyebrow">
        <span /> PACKAGE OVERVIEW
      </div>

      <h1>{item.title}</h1>
      <p className="sdk-page-intro">{item.description}</p>

      <section className="sdk-detail-grid">
        <div className="sdk-detail-card">
          <span className="sdk-detail-label">INSTALLATION</span>
          <div className="sdk-code-block">
            <code>{item.install}</code>
          </div>
          <p>{item.installDescription}</p>
        </div>

        <div className="sdk-detail-card">
          <span className="sdk-detail-label">IMPORT EXAMPLE</span>
          <pre className="sdk-code-block sdk-code-multiline">
            <code>{item.example}</code>
          </pre>
          <p>{item.exampleDescription}</p>
        </div>
      </section>

      <section className="sdk-features-section">
        <h2>What you can explore</h2>
        <div className="sdk-feature-list">
          {item.features.map((feature) => (
            <div className="sdk-feature-row" key={feature}>
              <span aria-hidden="true">✓</span>
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
