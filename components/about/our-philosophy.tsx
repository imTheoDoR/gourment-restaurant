"use client";

import Title from "@/components/title";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";

const OurPhilosophy = () => {
  return (
    <section className="container py-32">
      <div className="flex flex-col xl:flex-row gap-32 justify-center items-center">
        <div className="max-w-xl">
          <Title text="our philosophy" className="mb-10 lg:mb-20" isDark />

          <p className="text-gray3 text-xl mb-10 lg:mb-20">
            Whether you&apos;re seeking a romantic dinner for two, a business
            meeting, or a family gathering, we&apos;re here to welcome you with
            open arms and offer you an unforgettable experience.
          </p>

          <Image
            src="/images/about/philosophy-1.png"
            alt="gourmet restaurant philosophy 1"
            width={557}
            height={319}
            className="w-auto"
          />
        </div>

        <div className="max-w-[557px]">
          <div className="bg-yellow px-5 lg:px-10 rounded-t-full rounded-r-full">
            <Image
              src="/images/about/philosophy-2.png"
              alt="gourmet restaurant philosophy 2"
              width={433}
              height={473}
              className="mx-auto max-w-[300px] md:max-w-max"
            />

            <p className="max-w-[400px] mx-auto pt-5 font-colus text-brown text-sm pb-3">
              &quot;we promise that you&apos;ll leave with flavorful memories
              and return with pleasure.&quot;
            </p>

            <span className="text-dark font-colus flex items-center pb-10">
              <GoDotFill className="w-3 h-3 mr-1" /> by founder
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPhilosophy;
