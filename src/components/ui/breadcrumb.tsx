import * as React from "react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]"
    >
      {items.map((item, index) => (
        <React.Fragment key={item.label}>
          {index > 0 ? <span>/</span> : null}
          {item.href ? (
            <a
              href={item.href}
              className="transition-colors hover:text-[var(--color-primary-700)]"
            >
              {item.label}
            </a>
          ) : (
            <span className="text-[var(--color-text)]">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
