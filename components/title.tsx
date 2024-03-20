"use client";

import { cn } from "@/lib/utils";

const Title = ({ text, isDark, className, isSmaller }: TitleProps) => {
  return (
    <h1
      className={cn(
        "font-colus tracking-wide uppercase",
        isDark ? "text-brown" : "text-white",
        className,
        isSmaller ? "text-3xl lg:text-4xl" : "text-4xl lg:text-5xl"
      )}
    >
      {text}
    </h1>
  );
};

export default Title;
