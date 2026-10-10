import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "../components/providers/AuthProvider";

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

const themeScript = `
(function () {
  try {
    var savedTheme = localStorage.getItem("shivanya-theme");
    var theme;

    if (savedTheme === "dark" || savedTheme === "light") {
      theme = savedTheme;
    } else {
      theme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }

    document.documentElement.dataset.theme = theme;
  } catch {
    document.documentElement.dataset.theme = "light";
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
