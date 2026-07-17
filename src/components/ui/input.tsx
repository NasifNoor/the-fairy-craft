import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
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
].join(" ");

export function Input({ className = "", error = false, ...props }: InputProps) {
  const borderClass = error
    ? "border-[var(--input-error-border)]"
    : "border-[var(--input-border)]";

  return (
    <input
      className={[baseClasses, borderClass, className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
