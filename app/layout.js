import "./globals.css";

export const metadata = {
  title: "Shivanya",
  description: "Shivanya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}