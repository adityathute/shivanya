import type { Metadata } from "next";
import "./globals.css";
import "./site-pages.css";

export const metadata: Metadata = {
  title: {
    default: "Shivanya — One connected workspace",
    template: "%s | Shivanya",
  },
  description:
    "Shivanya brings focused applications and a reusable developer foundation together.",
  metadataBase: new URL("https://shivanya.tech"),
  openGraph: {
    title: "Shivanya",
    description: "One connected foundation for your digital workspace.",
    url: "https://shivanya.tech",
    siteName: "Shivanya",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
