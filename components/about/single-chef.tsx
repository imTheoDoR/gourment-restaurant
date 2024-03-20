"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

const AboutSingleChef = ({
  image,
  name,
  position,
  isChef,
}: SingleChefProps) => {
  return (
    <div className="mx-auto px-5">
      <Image
        src={`/images/about/${image}`}
        alt={name}
        width={311}
        height={306}
        className="w-auto px-2 pb-2"
      />

      <div
        className={cn(
          "w-full py-3 px-10",
          isChef ? "bg-yellow" : "bg-[#FAE3C6]"
        )}
      >
        <p className="text-xl font-bold text-dark">{name}</p>
        <p className="text-[16px] text-gray">{position}</p>
      </div>
    </div>
  );
};

export default AboutSingleChef;
