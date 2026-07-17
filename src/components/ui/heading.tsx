import * as React from "react";

export type HeadingLevel = "h1" | "h2" | "h3" | "h4";
export type HeadingTone = "default" | "muted" | "accent";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
  tone?: HeadingTone;
}

const toneClasses: Record<HeadingTone, string> = {
  default: "text-[var(--color-text)]",
  muted: "text-[var(--color-text-muted)]",
  accent: "text-[var(--color-primary-700)]",
};

const sizeClasses: Record<HeadingLevel, string> = {
  h1: "text-4xl font-semibold tracking-tight sm:text-5xl",
  h2: "text-3xl font-semibold tracking-tight sm:text-4xl",
  h3: "text-2xl font-semibold tracking-tight",
  h4: "text-xl font-semibold tracking-tight",
};

export function Heading({
  as: Component = "h2",
  tone = "default",
  className = "",
  ...props
}: HeadingProps) {
  return (
    <Component
      className={[sizeClasses[Component], toneClasses[tone], className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
