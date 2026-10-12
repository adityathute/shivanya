"use client";

import Link from "next/link";
import { useState } from "react";
import {
  UserDropdown,
  AuthModal,
  useAuth,
  type UserDropdownView,
  type AccountView,
} from "shivanya-auth";
import type { PlaygroundPackage } from "./packageData";
import PlaygroundHomeLink from "./PlaygroundHomeLink";

export default function PackageOverview({ item }: { item: PlaygroundPackage }) {
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
          <Link href="/playground">Playground</Link>
          <span>/</span>
          <span>{item.route}</span>
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
