import { notFound } from "next/navigation";
import { ContentPage } from "../../../components/ContentPage";

const guides: Record<string, { title: string; description: string; body: string[]; code?: string }> = {
  "getting-started": {
    title: "Getting started",
    description: "Install and compose the published Shivanya packages.",
    body: ["Use Node.js and your application's existing package manager. Install only the modules you use and keep React and React DOM as application peer dependencies.", "Import the shared stylesheet once in your application root. Keep product-specific styles scoped and avoid recreating components already provided by the SDK.", "The root shivanya-sdk repository is currently a workspace containing separate packages. Use the individual npm package names until a unified package entry point is published and verified."],
    code: "npm install shivanya-ui shivanya-shell shivanya-core shivanya-auth shivanya-ai"
  },
  authentication: {
    title: "Authentication integration",
    description: "Use the supported authentication client and provider.",
    body: ["The browser flow defaults to cookie mode. Configure the actual authentication API base URL using an environment variable and keep CSRF protection enabled.", "Use AuthProvider around the part of the application that needs authentication and use useAuth for the current user, loading state, login and logout actions.", "Do not persist browser access tokens in localStorage as a shortcut. Follow the SDK's supported cookie flow or implement secure platform storage for token-mode clients."],
    code: 'import { AuthProvider, useAuth } from "shivanya-auth";\n\n<AuthProvider config={{ baseUrl: process.env.NEXT_PUBLIC_AUTH_BASE_URL!, mode: "cookie" }}>\n  <App />\n</AuthProvider>'
  },
  shell: {
    title: "Shell integration",
    description: "Reuse the official layout and navigation components.",
    body: ["WebsiteShell provides the public website structure with header, main content and footer slots.", "DashboardShell provides the authenticated app structure, navigation, responsive sidebar and header. Supply navigation items and the current pathname.", "Import shivanya-shell/styles and shivanya-ui/styles from the application root. Avoid reimplementing the shell with duplicate sidebar and header components."],
    code: 'import { DashboardShell } from "shivanya-shell";\nimport "shivanya-shell/styles";\n\n<DashboardShell branding={{ name: "My app" }} navigation={navigation} pathname="/dashboard">\n  <Dashboard />\n</DashboardShell>'
  },
  troubleshooting: {
    title: "Troubleshooting",
    description: "Resolve common integration and build issues.",
    body: ["If a package import fails, check that the package is installed, its published version includes the required export, and the application's React version matches the package peer dependencies.", "If styles are missing, import the public styles export documented by that package. Avoid importing private source paths.", "If authentication fails, check the configured API URL, allowed origins, cookie settings, CSRF configuration and network responses. Never replace real API calls with fake success states.", "After dependency changes, run npm install to refresh package-lock.json, then run the TypeScript check, lint, tests and production build."]
  }
};

export function generateStaticParams() {
  return Object.keys(guides).map((slug) => ({ slug }));
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guides[slug];
  if (!guide) notFound();
  return <ContentPage eyebrow="Developer guide" title={guide.title} description={guide.description}>
    <section className="shv-prose">
      {guide.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      {guide.code && <><h2>Example</h2><pre>{guide.code}</pre></>}
    </section>
  </ContentPage>;
}
