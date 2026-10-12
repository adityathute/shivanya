"use client";

import Link from "next/link";
import { useState } from "react";
import { CodeIcon } from "shivanya-ui";
import {
  AuthModal,
  UserDropdown,
  useAuth,
  type UserDropdownView,
  type AccountView,
} from "shivanya-auth";
import { playgroundPackages } from "../../components/playground/packageData";
import PlaygroundHomeLink from "../../components/playground/PlaygroundHomeLink";

const packages = Object.values(playgroundPackages);

export default function PlaygroundOverviewPage() {
  const { loading } = useAuth();

  const [authModal, setAuthModal] = useState(false);
  const [authInitialView, setAuthInitialView] = useState<"login" | "register">(
    "login",
  );
  const [accountView, setAccountView] = useState<AccountView>("overview");

  const handleNavigate = (view: UserDropdownView) => {
    setAccountView(view);
    setAuthInitialView("login");
    setAuthModal(true);
  };

  const handleLogin = () => {
    setAccountView("overview");
    setAuthInitialView("login");
    setAuthModal(true);
  };

  const handleRegister = () => {
    setAccountView("overview");
    setAuthInitialView("register");
    setAuthModal(true);
  };

  return (
    <div className="sdk-playground-page">
      <div className="sdk-breadcrumb">
        <div className="sdk-breadcrumb-links">
          <PlaygroundHomeLink />
          <span>/</span>
          <span>Playground</span>
        </div>

        <div className="sdk-breadcrumb-user">
          {!loading && (
            <UserDropdown
              onNavigate={handleNavigate}
              onLogin={handleLogin}
              onRegister={handleRegister}
            />
          )}
        </div>
      </div>

      <div className="sdk-page-eyebrow">
        <span /> SDK PLAYGROUND
      </div>

      <h1>Explore the Shivanya SDK</h1>

      <p className="sdk-page-intro">
        Browse the packages, learn what each one does, and explore the examples.
      </p>

      <section className="sdk-welcome-panel">
        <div>
          <span className="sdk-panel-kicker">ONE ECOSYSTEM</span>
          <h2>Build with the tools you need.</h2>
          <p>
            Each package has a clear purpose and works as part of the wider
            Shivanya ecosystem.
          </p>
        </div>

        <div className="sdk-panel-symbol">
          <CodeIcon />
        </div>
      </section>

      <section>
        <div className="sdk-section-heading">
          <div>
            <h2>Packages</h2>
            <p>Choose a package to explore.</p>
          </div>

          <span className="sdk-package-count">{packages.length} packages</span>
        </div>

        <div className="sdk-package-grid">
          {packages.map((item) => (
            <Link className="sdk-package-card" href={item.href} key={item.href}>
              <div className="sdk-package-icon" aria-hidden="true">
                {item.icon}
              </div>

              <span className="sdk-package-label">{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="sdk-card-link">Explore package →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="sdk-next-step">
        <div>
          <h2>Want to use the SDK in your app?</h2>
          <p>Start with package installation and import the pieces you need.</p>
        </div>

        <Link className="sdk-primary-link" href="/playground/ui">
          Quick start →
        </Link>
      </section>

      <AuthModal
        open={authModal}
        onClose={() => setAuthModal(false)}
        initialView={authInitialView}
        accountView={accountView}
        onAuthenticated={() => setAuthModal(false)}
      />
    </div>
  );
}
