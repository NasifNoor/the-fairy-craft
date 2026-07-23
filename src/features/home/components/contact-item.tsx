"use client";

import * as React from "react";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  actionLabel: string;
  actionIcon?: React.ReactNode;
}

export function ContactItem({
  icon,
  label,
  value,
  href,
  actionLabel,
  actionIcon,
}: ContactItemProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  const content = (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group flex flex-col items-start justify-between gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-primary-700)] sm:flex-row"
    >
      <div className="flex w-full items-start gap-3">
        <div className="mt-0.5 text-[var(--color-primary-700)]">{icon}</div>
        <div className="">
          <p className="text-sm font-semibold text-[var(--color-text)]">
            {label}
          </p>
          <p className="mt-1 text-sm leading-6 text-[var(--color-text-muted)]">
            {value}
          </p>
        </div>
      </div>
      <div
        className={`flex items-center justify-end w-full ${isHovered ? "" : "hidden"}`}
      >
        <span
          className={`flex items-center gap-2 text-sm font-medium text-[var(--color-primary-700)] transition-all duration-200 ${
            isHovered ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
          }`}
        >
          {actionIcon}
          <span>{actionLabel}</span>
          <LuArrowRight size={18} />
        </span>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} target="_blank" rel="noreferrer" className="block">
        {content}
      </Link>
    );
  }

  return content;
}
