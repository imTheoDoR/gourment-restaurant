"use client";

import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { Button } from "../ui/button";
import Link from "next/link";

const Discover = () => {
  return (
    <section className="bg-white2 relative">
      <div className="container pt-20 lg:pt-40 pb-60 xl:pb-80 overflow-x-hidden">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-around items-center">
          <div className="max-w-[600px]">
            <h4 className="font-colus text-3xl pb-10">
              Discover the secrets that make our culinary experience truly
              exceptional.
            </h4>
            <p className="max-w-[500px] pb-5">
              At Gourmet Restaurant, our success isn&apos;t just about the
              ingredients we use; it&apos;s about the passion, dedication, and
              expertise that go into every dish we serve.
            </p>
            <p className="max-w-[500px] pb-10">
              Our journey begins with a commitment to sourcing the finest
              seasonal produce, locally-sourced whenever possible, ensuring
              freshness and flavor in every bite.
            </p>

            <Link href="#learn-more">
              <Button
                className="bg-green text-white hover:bg-green/90 font-colus"
                size="lg"
              >
                Learn more
              </Button>
            </Link>
          </div>

          <div className="relative mt-20 lg:mt-0">
            <Image
              src="/images/leaf.svg"
              alt="gourment restaurant leaf"
              width={117}
              height={69}
              className="w-24 absolute top-0 -right-28 hidden xl:block"
            />

            <Image
              src="/images/flower.svg"
              alt="gourment restaurant flower"
              width={117}
              height={69}
              className="w-24 absolute left-[25%] bottom-[-35%] hidden xl:block"
            />
            <div className="bg-contain bg-no-repeat bg-discover w-[350px] md:w-[400px] h-[434px] relative">
              <div className="bg-white/5 backdrop-blur-xl shadow-lg z-50 px-5 lg:px-10 py-5 rounded-r-[38px] rounded-tl-[38px] w-full absolute -bottom-32 left-0 lg:-left-80 lg:-bottom-28 duration-300">
                <h4 className="text-lg font-bold max-w-[200px] text-center mx-auto mb-5">
                  Visit us for the ultimate culinary adventure
                </h4>
                <span className="flex items-center mb-3">
                  <IoLocationOutline className="w-8 h-8 mr-2 font-medium text-orange2" />
                  179 Murphy Court Valley, Dublin 92182
                </span>
                <span className="flex items-center">
                  <CiClock2 className="w-8 h-8 mr-2 text-orange2" />
                  Everyday: 10 AM To 11 PM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Image
        src="/images/cooker.png"
        alt="gourment restaurant cooker"
        width={598}
        height={598}
        className="absolute bottom-[-20%] left-1/2 right-1/2 transform -translate-x-1/2 max-w-[500px] hidden xl:block"
      />
    </section>
  );
};

export default Discover;
