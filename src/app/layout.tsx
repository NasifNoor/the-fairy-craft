import "./globals.css";
import "../styles/tokens.css";
import { site } from "../data/site";

export const metadata = {
  title: site.businessName,
  description: site.description,
  icons: {
    icon: site.icons.icon,
    apple: site.icons.apple,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.webp" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
