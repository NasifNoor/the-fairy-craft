import "./globals.css";
import "../styles/tokens.css";
import { site } from "../data/site";

export const metadata = {
  title: site.businessName,
  description: site.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
