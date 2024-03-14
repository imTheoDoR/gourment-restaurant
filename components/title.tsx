"use client";

import { cn } from "@/lib/utils";

const Title = ({ text, isDark }: { text: string; isDark?: boolean }) => {
  return (
    <h1
      className={cn(
        "font-colus text-5xl tracking-wide uppercase",
        isDark ? "text-brown" : "text-white"
      )}
    >
      {text}
    </h1>
  );
};

export default Title;
