import * as React from "react";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

const baseClasses = [
  "w-full",
  "rounded-md",
  "border",
  "bg-[var(--input-bg)]",
  "px-3",
  "py-2",
  "text-[var(--input-text)]",
  "placeholder:text-[var(--input-placeholder)]",
  "outline-none",
  "transition-colors",
  "focus:border-[var(--input-border-focus)]",
  "min-h-28",
].join(" ");

export function Textarea({
  className = "",
  error = false,
  ...props
}: TextareaProps) {
  const borderClass = error
    ? "border-[var(--input-error-border)]"
    : "border-[var(--input-border)]";

  return (
    <textarea
      className={[baseClasses, borderClass, className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
