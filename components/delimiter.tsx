"use client";

import { cn } from "@/lib/utils";

const Delimiter = ({ isLight }: DelimiterProps) => {
  return (
    <div
      className={cn(
        " h-px w-48 mt-3 mx-auto relative",
        isLight ? "bg-[#F8F2E6]/60" : "bg-[#AE9E8A]/60"
      )}
    >
      <div
        className={cn(
          "w-[6px] h-[6px] rotate-45 absolute top-1/2 bottom-1/2 transform -translate-y-1/2 -left-1",
          isLight ? "bg-[#F8F2E6]/60" : "bg-[#AE9E8A]/60"
        )}
      ></div>
      <div
        className={cn(
          "w-[6px] h-[6px] rotate-45 absolute top-1/2 bottom-1/2 transform -translate-y-1/2 -right-1",
          isLight ? "bg-[#F8F2E6]/60" : "bg-[#AE9E8A]/60"
        )}
      ></div>
    </div>
  );
};

export default Delimiter;
