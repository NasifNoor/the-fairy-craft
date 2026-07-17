import React from "react";

export type BadgeVariant =
  | "default"
  | "accent"
  | "success"
  | "warning"
  | "danger";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-[var(--color-surface-muted)] text-[var(--color-text)]",
  accent: "bg-[var(--color-accent-50)] text-[var(--color-accent-600)]",
  success: "bg-[var(--color-accent-50)] text-[var(--color-success-500)]",
  warning: "bg-[#fff7ed] text-[var(--color-warning-500)]",
  danger: "bg-[#fef2f2] text-[var(--color-danger-500)]",
};

export function Badge({
  className = "",
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex",
        "items-center",
        "rounded-full",
        "px-2.5",
        "py-1",
        "text-xs",
        "font-medium",
        variantClasses[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
