"use client";

import * as React from "react";

export interface MobileNavigationProps {
  items: Array<{ label: string; href: string }>;
}

export function MobileNavigation({ items }: MobileNavigationProps) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation-panel"
        aria-label="Toggle navigation menu"
        onClick={() => setOpen((value) => !value)}
        className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] p-2 text-[var(--color-text)]"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 7h16M4 12h16M4 17h16"
          />
        </svg>
      </button>

      {open ? (
        <div
          id="mobile-navigation-panel"
          className="absolute inset-x-0 top-16 border-b border-[var(--color-border)] bg-[var(--color-background)] px-4 py-4 shadow-md"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-3">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-[var(--color-text)] transition-colors hover:text-[var(--color-primary-700)]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
