"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import Delimiter from "@/components/delimiter";

const MeetWithChef = () => {
  return (
    <section className="bg-meet bg-cover w-full h-auto overflow-y-hidden pb-20 lg:pb-0">
      <div className="container flex justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-stretch pt-20 gap-0 lg:gap-20">
          <Image
            src="/images/chef.png"
            alt="gourment restaurant main chef"
            width={550}
            height={694}
            className="-mb-16 w-56 lg:w-96"
          />

          <div className="relative">
            <div className="w-12 h-12 bg-orange3 rounded-full border-[6px] border-white absolute -bottom-5 -left-5 z-10" />

            <div className="bg-white2 max-w-xl py-10 px-5 lg:px-10 rounded-t-[18px] rounded-br-[18px] border-b-4 border-orange2/40 z-50 relative">
              <h4 className="font-colus text-3xl text-center">
                Meet with Chef&apos;s
              </h4>
              <Delimiter />
              <p className="pt-5 text-center">
                Embark on a culinary journey behind the scenes with our talented
                team of chefs at Gourmet Restaurant.
              </p>

              <div className="mt-10 flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center">
                <div className="flex flex-row-reverse group">
                  <Link href="#meet-chefs">
                    <div className="w-16 h-16 bg-orange2 hover:bg-red duration-300 rounded-full flex items-center justify-center shadow-md shadow-black/30 -ml-7">
                      <FaPlus className="text-white w-8 h-8" />
                    </div>
                  </Link>

                  <div className="rounded-full flex items-center justify-center shadow-md shadow-black/30 -ml-7 overflow-hidden">
                    <Image
                      src="/images/chef3.png"
                      alt="gourment restaurant chef three"
                      width={79}
                      height={78}
                      className="w-16 h-16"
                    />
                  </div>

                  <div className="rounded-full flex items-center justify-center shadow-md shadow-black/30 -ml-7 overflow-hidden">
                    <Image
                      src="/images/chef2.png"
                      alt="gourment restaurant chef two"
                      width={79}
                      height={78}
                      className="w-16 h-16"
                    />
                  </div>

                  <div className="rounded-full flex items-center justify-center shadow-md shadow-black/30 overflow-hidden">
                    <Image
                      src="/images/chef1.png"
                      alt="gourment restaurant chef one"
                      width={79}
                      height={78}
                      className="w-16 h-16"
                    />
                  </div>
                </div>

                <Link href="/meet-our-chefs">
                  <Button className="bg-red text-white h-16 px-16 hover:bg-green shadow-md">
                    Meet With Chef&apos;s
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetWithChef;
