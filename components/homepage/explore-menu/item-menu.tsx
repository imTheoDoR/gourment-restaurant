"use client";

import Image from "next/image";

const ItemMenu = ({ image, title, description, price }: ItemMenuProps) => {
  return (
    <div className="bg-white rounded-b-[18px] rounded-tr-[18px] p-5 shadow-md shadow-black/30 border-t-8 border-sand hover:bg-sand duration-300">
      <div className="flex flex-col lg:flex-row items-center">
        <Image
          src={image}
          alt={title}
          width={148}
          height={136}
          className="w-auto h-36 mb-5 lg:mb-0"
        />

        <div className="ml-5">
          <h4 className="text-black text-lg font-semibold pb-3">{title}</h4>
          <p className="text-black text-sm pb-3">{description}</p>

          <span className="font-medium text-black text-xl">
            Price: $<span className="font-extrabold">{price}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ItemMenu;