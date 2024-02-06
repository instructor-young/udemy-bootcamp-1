import { PropsWithChildren } from "react";

interface DisplayProps {
  size: "sm" | "md" | "lg";
}

function Display({ size, children }: PropsWithChildren<DisplayProps>) {
  return <div>{children}</div>;
}

export default Display;
