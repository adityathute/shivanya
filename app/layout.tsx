import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shivanya SDK — UI Components, Auth, Core & Shell",
  description: "Explore Shivanya SDK packages, published UI components, authentication, core utilities, AI, and application layouts.",
  metadataBase: new URL("https://shivanya.com"),
  openGraph: { title: "Shivanya SDK", description: "Reusable tools for modern web apps.", url: "https://shivanya.com", siteName: "Shivanya", type: "website" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
