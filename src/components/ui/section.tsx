import * as React from "react";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?:
    | "div"
    | "section"
    | "main"
    | "article"
    | "header"
    | "footer"
    | "aside"
    | "nav";
}

export function Section({
  as: Component = "section",
  className = "",
  ...props
}: SectionProps) {
  return (
    <Component
      className={["py-16", "sm:py-20", "lg:py-24", className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
