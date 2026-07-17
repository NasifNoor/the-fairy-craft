import * as React from "react";

export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
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

export function Container({
  as: Component = "div",
  className = "",
  ...props
}: ContainerProps) {
  return (
    <Component
      className={[
        "mx-auto",
        "w-full",
        "max-w-7xl",
        "px-4",
        "sm:px-6",
        "lg:px-8",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
