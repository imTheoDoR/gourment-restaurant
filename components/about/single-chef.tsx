"use client";

import Image from "next/image";

const AboutSingleChef = ({ image, name, position }: SingleChefProps) => {
  return (
    <div className="mx-auto px-0 lg:px-5 group ">
      <Image
        src={`/images/about/${image}`}
        alt={name}
        width={311}
        height={306}
        className="w-[311px] h-[306px] px-2 pb-2"
      />

      <div className="w-full py-3 px-10 bg-[#FAE3C6] group-hover:bg-yellow duration-300 text-center">
        <p className="text-xl font-bold text-dark">{name}</p>
        <p className="text-[16px] text-gray">{position}</p>
      </div>
    </div>
  );
};

export default AboutSingleChef;
