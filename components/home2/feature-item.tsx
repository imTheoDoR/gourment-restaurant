import Image from "next/image";
import React from "react";

const FeatureItem = ({ image, title, description }: FeatureItemProps) => {
  return (
    <div className="bg-white px-5 py-8 max-w-[400px] flex items-center gap-5 border border-transparent hover:border-green duration-200">
      <Image
        src={`/images/${image}`}
        alt="gourmet restaurant quality"
        width={78}
        height={78}
        className="w-20"
      />

      <div>
        <h4 className="text-dark font-bold">{title}</h4>
        <div className="w-10 h-[6px] bg-yellow my-2" />
        <p className="text-[#5E665E]">{description}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
