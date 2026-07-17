import * as React from "react";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-center gap-2"
    >
      {pages.map((page) => {
        const active = page === currentPage;
        return (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange?.(page)}
            className={[
              "h-9",
              "w-9",
              "rounded-full",
              "text-sm",
              "transition-colors",
              active
                ? "bg-[var(--color-primary-600)] text-white"
                : "bg-[var(--color-surface)] text-[var(--color-text)] hover:bg-[var(--color-surface-muted)]",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {page}
          </button>
        );
      })}
    </nav>
  );
}
