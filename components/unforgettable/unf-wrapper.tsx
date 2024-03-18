"use client";

import Image from "next/image";
import Title from "@/components/title";
import { BsCheckCircle } from "react-icons/bs";
import Evidence from "@/components/unforgettable/evidence";

const UnforgettableWrapp = () => {
  return (
    <section className="bg-white2 pb-16">
      <div className="bg-gray rounded-br-[400px] ">
        <div className="container flex items-center flex-row gap-10 w-full pt-10 space-x-20 relative">
          <div className="space-y-8 px-10">
            <Image
              src="/images/unforgettable/plate1.png"
              alt="gourment restaurant unforgettable plate 1"
              width={509}
              height={262}
              className="w-auto lg:w-full"
            />

            <Image
              src="/images/unforgettable/plate2.png"
              alt="gourment restaurant unforgettable plate 1"
              width={509}
              height={262}
              className="w-auto lg:w-full"
            />

            <Image
              src="/images/unforgettable/plate3.png"
              alt="gourment restaurant unforgettable plate 1"
              width={501}
              height={168}
              className="w-auto lg:w-full"
            />
          </div>
          <div>
            <Title
              text="for your best unforgettable moments"
              className="max-w-[400px] leading-[65px]"
            />

            <p className="text-white font-light max-w-[400px] pt-12">
              At Gourmet Restaurant, we understand that every moment is
              precious. That&apos;s why we strive to create unforgettable
              experiences that you&apos;ll cherish for a lifetime.
            </p>

            <ul className="pt-12 space-y-5">
              <li className="flex items-center text-white">
                <BsCheckCircle className="text-yellow w-7 h-7 mr-5" />
                Private dining
              </li>
              <li className="flex items-center text-white">
                <BsCheckCircle className="text-yellow w-7 h-7 mr-5" />
                Best for your groups
              </li>
              <li className="flex items-center text-white">
                <BsCheckCircle className="text-yellow w-7 h-7 mr-5" />
                Special offers
              </li>
            </ul>
          </div>

          <Image
            src="/images/unforgettable.png"
            alt="gourment restaurant unforgettable moments"
            width={479}
            height={438}
            className="max-w-[420px] absolute right-[10%] bottom-[-12%]"
          />
        </div>
      </div>

      {/* evidence - unforgettable moments */}
      <div className="pt-32 flex flex-col lg:flex-row justify-around container">
        <Evidence label="70+" description="main course options" />
        <Evidence label="5K+" description="happy customers" />
        <Evidence label="30" description="tables in total" />
        <Evidence label="10" description="yers of experience" />
      </div>
    </section>
  );
};

export default UnforgettableWrapp;
