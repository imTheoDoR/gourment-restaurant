"use client";

import Image from "next/image";

const WhyItem = ({ image, title, description }: WhyItemProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-32 border-2 border-[#85BCB5] p-5 rounded-full mb-6">
        <Image
          src={`/images/${image}.png`}
          alt={title}
          width={89}
          height={63}
          className="w-32 h-20 p-2"
        />
      </div>

      <h4 className="font-bold text-lg pb-2">{title}</h4>
      <p className="text-[#665E5E] max-w-[250px] text-center">{description}</p>
    </div>
  );
};

export default WhyItem;
