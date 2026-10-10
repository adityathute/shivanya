"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "./NpmDownloads.css";

const packages = [
  "shivanya-ui",
  "shivanya-shell",
  "shivanya-core",
  "shivanya-ai",
  "shivanya-auth",
];

export default function NpmDownloads() {
  const [downloads, setDownloads] = useState<number | null>(null);

  const CACHE_KEY = "shivanya-npm-downloads";

  useEffect(() => {
    let cancelled = false;

    async function fetchDownloads() {
      // Immediately show the last successful value for this tab.
      try {
        const cached = sessionStorage.getItem(CACHE_KEY);

        if (cached) {
          const parsed = JSON.parse(cached);

          if (typeof parsed.downloads === "number") {
            setDownloads(parsed.downloads);
          }
        }
      } catch {
        // Continue without browser cache.
      }

      // Then try to retrieve a fresher value.
      try {
        const response = await fetch("/api/npm-downloads");

        if (!response.ok) {
          throw new Error("Download statistics unavailable");
        }

        const data: { downloads: number } = await response.json();

        if (cancelled || typeof data.downloads !== "number") {
          return;
        }

        setDownloads(data.downloads);

        try {
          sessionStorage.setItem(
            CACHE_KEY,
            JSON.stringify({
              downloads: data.downloads,
              savedAt: Date.now(),
            }),
          );
        } catch {
          // The displayed count still works if storage is unavailable.
        }
      } catch (error) {
        console.warn("Using cached npm download statistics.", error);
        // Keep the previously cached count.
      }
    }

    fetchDownloads();

    return () => {
      cancelled = true;
    };
  }, []);

  const formattedDownloads =
    downloads === null
      ? "—"
      : new Intl.NumberFormat("en", {
          notation: "compact",
          maximumFractionDigits: 1,
        }).format(downloads);

  return (
    <a
      className="npm-downloads"
      href="https://www.npmjs.com/package/shivanya-sdk"
      target="_blank"
      rel="noreferrer"
      aria-label={`Shivanya SDK weekly downloads: ${formattedDownloads}`}
    >
      <Image src="/npm-logo.png" alt="npm" width={20} height={20} />

      <span className="npm-downloads-count">{formattedDownloads}</span>
    </a>
  );
}
