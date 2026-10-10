import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shivanya.tech"),
  title: {
    default: "Shivanya — Tools for modern developers",
    template: "%s | Shivanya",
  },
  description:
    "A growing ecosystem of reusable TypeScript and React packages for building modern applications.",
  applicationName: "Shivanya",
  openGraph: {
    title: "Shivanya — Tools for modern developers",
    description:
      "Discover reusable packages, developer tools, and examples from the Shivanya ecosystem.",
    url: "https://shivanya.tech",
    siteName: "Shivanya",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
