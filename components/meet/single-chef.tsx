"use client";

import Image from "next/image";

const SingleChef = ({ image, name, position, description }: ChefProps) => {
  return (
    <div className="bg-yellow rounded-tr-[50px] max-h-[200px] mx-auto lg:mx-0 max-w-xl">
      <div className="flex flex-shrink-0">
        <Image
          src={`/images/meet/${image}`}
          alt="chef testimonial chef one"
          width={154}
          height={154}
          className="w-32 h-32 ml-5 -mt-10"
        />

        <div className="pl-3 pt-5">
          <h4 className="text-xl font-bold text-dark">{name}</h4>
          <p className="text-dark/60">{position}</p>
        </div>
      </div>

      <div className="mx-auto mr-0 lg:-mr-20 mt-3 relative max-w-lg">
        <div className="w-10 h-10 bg-red rounded-full z-30 absolute -top-3 -left-3" />
        <div className="bg-white/40 backdrop-blur-xl rounded-[30px] px-10 py-10 shadow-md relative z-40 max-w-lg">
          {description}
        </div>
      </div>
    </div>
  );
};

export default SingleChef;
