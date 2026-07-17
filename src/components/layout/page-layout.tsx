import * as React from "react";

import { Footer } from "./footer";
import { Navbar } from "./navbar";

export interface PageLayoutProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function PageLayout({
  children,
  className = "",
  ...props
}: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      <Navbar />
      <main
        id="main-content"
        className={["flex-1", className].filter(Boolean).join(" ")}
        {...props}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
