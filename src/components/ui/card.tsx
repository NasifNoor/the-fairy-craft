import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: "sm" | "md" | "lg";
}

const paddingClasses = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({ className = "", padding = "md", ...props }: CardProps) {
  return (
    <div
      className={[
        "rounded-xl",
        "border",
        "border-[var(--color-border)]",
        "bg-[var(--color-surface)]",
        "shadow-sm",
        paddingClasses[padding],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
