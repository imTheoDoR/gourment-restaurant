"use client";

import Title from "@/components/title";
import { Button } from "../ui/button";
import Link from "next/link";

const MasterChef = () => {
  return (
    <section className="bg-gradient-to-r from-[#37333D] from-10% to-[#88776E] to-90%">
      <div className="max-w-max xl:max-w-7xl mx-auto flex items-center justify-center flex-col-reverse xl:flex-row gap-0 xl:gap-20 px-5 xl:px-0">
        <div className="my-auto max-w-lg w-full pb-10 xl:pb-0">
          <Title
            text="our master chef"
            className="pb-10 pt-5 md:pt-10 xl:pt-0"
          />
          <p className="text-white max-w-[400px] pb-7">
            Embark on a culinary journey behind the scenes with our talented
            team of chefs at Gourmet Restaurant.
          </p>

          <Link href="/meet-our-chefs">
            <Button variant="red" className="h-12 capitalize">
              meet with chefs
            </Button>
          </Link>
        </div>

        <div className="bg-meetwo bg-contain bg-no-repeat max-w-[700px] w-full h-48 md:h-60 xl:h-80 -mt-3"></div>
      </div>
    </section>
  );
};

export default MasterChef;
