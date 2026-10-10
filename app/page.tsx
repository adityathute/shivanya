import SiteFooter from "../components/site/SiteFooter";
import SiteHeader from "../components/site/SiteHeader";

const packages = [
  { number: "01", name: "shivanya-core", tag: "Foundation", description: "Shared utilities and foundations for your application." },
  { number: "02", name: "shivanya-ui", tag: "Components", description: "Reusable interface components with a consistent design system." },
  { number: "03", name: "shivanya-auth", tag: "Authentication", description: "Connect your application to Shivanya authentication." },
  { number: "04", name: "shivanya-shell", tag: "Application UI", description: "Build a consistent application structure and experience." },
  { number: "05", name: "shivanya-ai", tag: "AI tools", description: "AI capabilities designed to fit into your applications." },
];

function CodePreview() {
  return (
    <div className="code-window" aria-label="SDK installation example">
      <div className="code-window-top">
        <div className="window-dots" aria-hidden="true"><span /><span /><span /></div>
        <span className="code-file">terminal</span>
        <span className="code-status"><span /> ready</span>
      </div>
      <div className="code-body">
        <div className="code-line"><span className="line-number">1</span><span className="code-muted"># Install the package you need</span></div>
        <div className="code-line"><span className="line-number">2</span><span><span className="code-purple">npm</span> install <span className="code-green">shivanya-ui</span></span></div>
        <div className="code-line code-spacer"><span className="line-number">3</span><span /></div>
        <div className="code-line"><span className="line-number">4</span><span className="code-muted"># Import and start building</span></div>
        <div className="code-line"><span className="line-number">5</span><span><span className="code-purple">import</span> {"{ Button }"} <span className="code-purple">from</span> <span className="code-green">"shivanya-ui"</span></span></div>
      </div>
      <div className="code-window-bottom">
        <span><span className="status-dot" /> Ready for your next idea</span>
        <span>TypeScript · React</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> THE SHIVANYA DEVELOPER PLATFORM</div>
            <h1>Build better.<br /><span>Build with Shivanya.</span></h1>
            <p className="hero-description">A growing collection of tools and reusable packages to help you build modern applications with less repetition and more confidence.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#quick-start">Get started <span aria-hidden="true">→</span></a>
              <a className="button button-secondary" href="#packages">Explore the SDK</a>
            </div>
            <div className="hero-note"><span className="hero-note-icon">✓</span> TypeScript-friendly <span className="note-divider" /> Built for React</div>
          </div>
          <div className="hero-visual">
            <div className="visual-glow" /><div className="visual-grid" />
            <div className="visual-chip chip-top"><span className="chip-icon chip-icon-purple">{"{}"}</span><span><strong>One toolkit</strong><small>Reusable by design</small></span></div>
            <CodePreview />
            <div className="visual-chip chip-bottom"><span className="chip-icon chip-icon-green">✓</span><span><strong>Ready to integrate</strong><small>Made for your workflow</small></span></div>
            <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
          </div>
        </section>

        <section className="trust-strip">
          <div className="trust-strip-inner"><span>ONE ECOSYSTEM</span><i /><span>REUSABLE PACKAGES</span><i /><span>DEVELOPER FIRST</span><i /><span>BUILT TO GROW</span></div>
        </section>

        <section className="packages-section section-wrap" id="packages">
          <div className="section-heading">
            <div><div className="eyebrow">THE TOOLKIT</div><h2>One ecosystem.<br /><span>Focused packages.</span></h2></div>
            <p>Pick the tools you need today. Keep your stack clear, modular, and ready to grow.</p>
          </div>
          <div className="package-grid">
            {packages.map((item) => (
              <article className="package-card" key={item.name}>
                <div className="package-card-top"><span className="package-number">{item.number}</span><span className="package-arrow" aria-hidden="true">↗</span></div>
                <span className="package-tag">{item.tag}</span>
                <h3>{item.name}</h3><p>{item.description}</p>
                <a href="#quick-start" className="package-link">Explore package <span aria-hidden="true">→</span></a>
              </article>
            ))}
          </div>
        </section>

        <section className="playground-section" id="playground">
          <div className="playground-inner section-wrap">
            <div className="playground-copy">
              <div className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> LEARN BY EXPLORING</div>
              <h2>See it in action.<br /><span>Make it yours.</span></h2>
              <p>Explore examples, understand how the packages work, and build from real usage patterns. Explore the public playground to browse SDK packages and examples, separate from the SDK's local testing tools.</p>
              <a className="button button-light" href="#quick-start">Explore the SDK <span aria-hidden="true">→</span></a>
            </div>
            <div className="playground-preview" aria-label="Illustration of the developer playground">
              <div className="preview-sidebar">
                <div className="preview-brand"><span className="mini-brand-mark">S</span> Shivanya SDK</div>
                <div className="preview-nav active"><span className="preview-nav-icon">⌂</span> Overview</div>
                <div className="preview-nav"><span className="preview-nav-icon">◈</span> UI components</div>
                <div className="preview-nav"><span className="preview-nav-icon">⌘</span> Authentication</div>
                <div className="preview-nav"><span className="preview-nav-icon">✳</span> AI tools</div>
              </div>
              <div className="preview-main">
                <div className="preview-topline"><span>SDK / Overview</span><span className="preview-avatar">S</span></div>
                <div className="preview-kicker">WELCOME TO SHIVANYA</div>
                <div className="preview-title">Build something<br />remarkable.</div>
                <div className="preview-description">Everything you need to get started.</div>
                <div className="preview-demo-card">
                  <span className="preview-card-label">COMPONENT PREVIEW</span>
                  <div className="preview-button-row"><span className="preview-button">Button</span><span className="preview-input">Text input</span></div>
                  <div className="preview-skeleton skeleton-wide" /><div className="preview-skeleton skeleton-short" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="quick-start section-wrap" id="quick-start">
          <div className="quick-start-copy"><div className="eyebrow">GET STARTED</div><h2>Start with the essentials.</h2><p>Install a package, add it to your application, and keep moving. Each package has its own focused purpose.</p></div>
          <div className="install-card">
            <div className="install-card-heading"><span className="install-terminal-icon">›_</span><div><strong>Install a package</strong><small>Use npm in your project</small></div></div>
            <div className="install-command"><code>npm install shivanya-ui</code><span className="copy-symbol" aria-hidden="true">⌘</span></div>
            <p className="install-footnote">Replace <code>shivanya-ui</code> with the package you want to use.</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
