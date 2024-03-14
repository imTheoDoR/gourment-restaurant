"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import { Button } from "../ui/button";

const MeetWithChef = () => {
  return (
    <div className="bg-meet bg-cover w-full h-auto overflow-y-hidden">
      <div className="container flex justify-center">
        <div className="flex items-center justify-stretch pt-20 gap-0 lg:gap-20">
          <Image
            src="/images/chef.png"
            alt="gourment restaurant main chef"
            width={550}
            height={694}
            className="-mb-16"
          />

          <div className="relative">
            <div className="w-12 h-12 bg-orange3 rounded-full border-[6px] border-white absolute -bottom-5 -left-5 z-10" />

            <div className="bg-white2 min-w-[500px] max-w-xl py-10 px-20 rounded-t-[18px] rounded-br-[18px] border-b-4 border-orange2/40 z-50 relative">
              <h4 className="font-colus text-3xl text-center">
                Meet with Chef&apos;s
              </h4>
              <div className="bg-[#AE9E8A]/60 h-px w-48 mt-3 mx-auto relative">
                <div className="w-[6px] h-[6px] bg-[#AE9E8A]/60 rotate-45 absolute top-1/2 bottom-1/2 transform -translate-y-1/2 -left-1"></div>
                <div className="w-[6px] h-[6px] bg-[#AE9E8A]/60 rotate-45 absolute top-1/2 bottom-1/2 transform -translate-y-1/2 -right-1"></div>
              </div>
              <p className="pt-5 text-center">
                Embark on a culinary journey behind the scenes with our talented
                team of chefs at Gourmet Restaurant.
              </p>

              <div className="mt-10 flex justify-between items-center">
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

                  <div className="rounded-full flex items-center justify-center shadow-md shadow-black/30 -ml-7 overflow-hidden">
                    <Image
                      src="/images/chef1.png"
                      alt="gourment restaurant chef one"
                      width={79}
                      height={78}
                      className="w-16 h-16"
                    />
                  </div>
                </div>
                <div>
                  <Button className="bg-red text-white h-16 px-16 hover:bg-green shadow-md">
                    Meet With Chef&apos;s
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetWithChef;
