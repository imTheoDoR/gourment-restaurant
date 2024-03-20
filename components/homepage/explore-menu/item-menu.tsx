"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

const ItemMenu = ({
  image,
  title,
  description,
  price,
  secondary,
}: ItemMenuProps) => {
  return (
    <div
      className={cn(
        "rounded-b-[18px] rounded-tr-[18px] shadow-md  border-t-8  duration-300",
        !secondary
          ? "border-sand hover:bg-sand shadow-black/30 bg-white p-5"
          : "border-[#FAE3C6] bg-white hover:bg-white2 p-2"
      )}
    >
      <div className="flex flex-col lg:flex-row items-center">
        <Image
          src={image}
          alt={title}
          width={148}
          height={136}
          className="w-auto h-36 mb-5 lg:mb-0"
        />

        <div
          className={cn(
            !secondary ? "ml-5" : "flex justify-between items-center gap-10"
          )}
        >
          <div className={cn(secondary ? "ml-5 pt-3 lg:pr-10" : null)}>
            <h4 className="text-black text-lg font-semibold pb-3">{title}</h4>
            <p className={cn("text-black text-sm pb-3")}>{description}</p>
          </div>

          <span
            className={cn(
              "font-medium text-black text-xl",
              secondary && "pr-5"
            )}
          >
            {!secondary && "Price:"} $
            <span className="font-extrabold">{price}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ItemMenu;
