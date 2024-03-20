"use client";

import { cn } from "@/lib/utils";
import { IoMdPlay } from "react-icons/io";

const PlayButton = ({ haveText, isSmaller, secondary }: PlayButtonProps) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-3 group cursor-pointer">
      <div
        className={cn(
          "rounded-full flex justify-center items-center duration-300",
          !secondary
            ? "bg-dark/40 hover:bg-dark/60 border-white/50 group-hover:border-white border-2 p-2"
            : "bg-dark/80 p-1 group w-12 h-12"
        )}
      >
        <IoMdPlay
          className={cn(
            "text-white/50 group-hover:text-white duration-300",
            isSmaller ? "p-2 w-10 h-10" : "w-20 h-20 pl-3",
            secondary &&
              "bg-dark/80 group-hover:bg-dark/90 rounded-full border-2 border-white/60 group-hover:border-white/80"
          )}
        />
      </div>
      {haveText && (
        <span className="uppercase text-2xl tracking-widest text-white/40 group-hover:text-white duration-300">
          play
        </span>
      )}
    </div>
  );
};

export default PlayButton;
