import Link from "next/link";
import { SiteLayout } from "../components/SiteLayout";

export default function NotFound() {
  return <SiteLayout><main className="shv-content-page"><section className="shv-page-hero"><span className="shv-eyebrow">404 · Page not found</span><h1>This page isn't here.</h1><p>The link may be outdated or the page may have moved. Return to the home page or explore the documentation.</p><Link className="shv-nav-cta" href="/">Go to home</Link><span> </span><Link className="shv-text-link" href="/docs">Open docs →</Link></section></main></SiteLayout>;
}
