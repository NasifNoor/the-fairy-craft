import * as React from "react";

export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
}

export function Dialog({
  open = false,
  className = "",
  ...props
}: DialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div
        className={[
          "w-full",
          "max-w-lg",
          "rounded-xl",
          "border",
          "border-[var(--color-border)]",
          "bg-[var(--color-surface)]",
          "p-6",
          "shadow-lg",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />
    </div>
  );
}
