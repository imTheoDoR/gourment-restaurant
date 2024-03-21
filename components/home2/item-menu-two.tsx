"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

const ItemMenuTwo = ({
  image,
  title,
  description,
  price,
}: ItemMenuTwoProps) => {
  return (
    <div className="flex flex-col bg-white h-full max-w-[260px]">
      <div className="bg-[#88776E]">
        <Image
          src={image}
          alt={title}
          width={191}
          height={127}
          className="w-[200px] h-[127px] mx-auto -mb-12 mt-5"
        />
      </div>

      <div className="px-5 pt-20 pb-5 flex flex-col justify-between">
        <div>
          <h4 className="text-black text-lg font-semibold h-14">{title}</h4>
          <p className="text-black text-sm pb-3 pt-5 max-h-[150px] h-full overflow-y-auto">
            {description.length > 100
              ? description.substring(0, 100) + "..."
              : description}
          </p>
        </div>

        <span className="font-bold text-black text-xl text-end">${price}</span>
      </div>
    </div>
  );
};

export default ItemMenuTwo;
