import Link from "next/link";
import type { ReactNode } from "react";
import { Card } from "shivanya-ui";
import { SiteLayout } from "./SiteLayout";

type ContentCard = { title: string; description: string; href?: string; label?: string };
export function ContentPage({
  eyebrow,
  title,
  description,
  cards = [],
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  cards?: ContentCard[];
  children?: ReactNode;
}) {
  return (
    <SiteLayout>
      <main className="shv-content-page">
        <section className="shv-page-hero">
          <span className="shv-eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
        </section>
        {children}
        {cards.length > 0 && (
          <section className="shv-content-grid" aria-label={title}>
            {cards.map((item) => (
              <Card key={item.title} variant="outlined" padding="lg" radius="lg" className="shv-content-card">
                {item.label && <span className="shv-card-label">{item.label}</span>}
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                {item.href && <Link className="shv-text-link" href={item.href}>Explore <span aria-hidden="true">→</span></Link>}
              </Card>
            ))}
          </section>
        )}
      </main>
    </SiteLayout>
  );
}
