import type { Metadata } from "next";
import "./globals.css";
import "./site-pages.css";

export const metadata: Metadata = {
  title: {
    default: "ShivanyaMS — One connected workspace",
    template: "%s | ShivanyaMS",
  },
  description: "ShivanyaMS brings focused applications and a reusable developer foundation together.",
  metadataBase: new URL("https://shivanya.com"),
  openGraph: {
    title: "ShivanyaMS",
    description: "One connected foundation for your digital workspace.",
    url: "https://shivanya.com",
    siteName: "ShivanyaMS",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
