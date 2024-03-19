"use client";

import { cn } from "@/lib/utils";

const Title = ({
  text,
  isDark,
  className,
}: {
  text: string;
  isDark?: boolean;
  className?: string;
}) => {
  return (
    <h1
      className={cn(
        "font-colus text-4xl lg:text-5xl tracking-wide uppercase",
        isDark ? "text-brown" : "text-white",
        className
      )}
    >
      {text}
    </h1>
  );
};

export default Title;
