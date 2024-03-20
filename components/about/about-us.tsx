"use client";

import Title from "@/components/title";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const AboutUs = () => {
  return (
    <section className="bg-white2">
      <div className="container py-20 lg:py-32 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-32 overflow-x-hidden relative">
        {/* flower */}
        <div className="bg-flower bg-contain bg-no-repeat w-24 h-28 absolute z-40 bottom-0 left-0 hidden xl:block" />

        <Image
          src="/images/about/chef.png"
          alt="gourmet restaurant about chef"
          width={500}
          height={661}
          className="w-auto max-h-[550px] xl:max-h-[650px] h-full"
        />

        <div className="max-w-xl flex flex-col-reverse lg:flex-col relative">
          {/* leaf */}
          <div className="bg-leaf bg-contain bg-no-repeat w-24 h-28 absolute z-40 top-20 -right-36 hidden xl:block" />

          <div className="pt-20 lg:pt-0">
            <Title text="about us" className="pb-12" isDark />
            <p className="pb-5 text-gray3">
              Our story began with the vision of one man, Gabrielle Preda, who
              set out to create a place where guests could feel at home and
              enjoy an authentic and memorable dining experience.
            </p>
            <p className="text-gray3">
              With steady determination, Gabrielle turned this vision into
              reality, and today, Gourmet Restaurant is a preferred destination
              for those who appreciate delicious cuisine and quality service.
            </p>
          </div>

          <div className="flex gap-5 lg:gap-10 flex-col lg:flex-row flex-shrink-0 items-center -ml-0 lg:-ml-60 -mt-20 lg:mt-16 xl:mt-24">
            <div className="max-w-[412px] w-full h-[206px] bg-white/5 backdrop-blur-lg rounded-t-[38px] rounded-br-[38px] flex flex-col items-center justify-center shadow-md">
              <h4 className="text-black text-xl px-5 lg:px-20 text-center font-bold">
                Visit us for the ultimate culinary adventure
              </h4>

              <Link href="#meet-with-chefs">
                <Button variant="red" size="md" className="mt-5 font-colus">
                  Meet with chef&apos;s
                </Button>
              </Link>
            </div>

            <div className="w-auto lg:w-full h-[206px]">
              <Image
                src="/images/about/female.png"
                alt="gourmet restaurant about female"
                width={412}
                height={206}
                className="w-auto max-h-[206px] h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
