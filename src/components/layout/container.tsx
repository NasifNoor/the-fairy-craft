import * as React from "react";

import { Container as UiContainer } from "../ui/container";

export interface LayoutContainerProps extends React.HTMLAttributes<HTMLElement> {
  as?: keyof React.JSX.IntrinsicElements;
}

export function Container({
  as: Component = "div",
  className = "",
  ...props
}: LayoutContainerProps) {
  return <UiContainer as={Component as any} className={className} {...props} />;
}
