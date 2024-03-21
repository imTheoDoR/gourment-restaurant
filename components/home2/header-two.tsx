"use client";

import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";
import { Texturina } from "next/font/google";

const descFont = Texturina({
  subsets: ["latin"],
});

const HeaderTwo = () => {
  return (
    <div className="w-full h-[500px] lg:h-[680px] bg-cover bg-center bg-no-repeat relative pb-10 rounded-br-0 lg:rounded-br-[300px] overflow-visible lg:overflow-hidden">
      <div className="absolute left-0 right-0">
        <Navbar />
      </div>
      <div className="w-full min-h-[500px] lg:min-h-[680px] bg-hero2 text-center flex flex-col justify-center items-center pt-16 lg:pt-20">
        <h1 className="font-colus text-white2 tracking-wide uppercase text-5xl lg:text-7xl drop-shadow-lg">
          Welcome to gourment
        </h1>
        <p
          className={cn(
            "max-w-max lg:max-w-2xl text-2xl lg:text-4xl mx-auto px-5 lg:px-0 pt-5 font-bold drop-shadow-lg text-white2 tracking-wide mb-20",
            descFont.className
          )}
        >
          where culinary delights await!
        </p>
      </div>
    </div>
  );
};

export default HeaderTwo;
