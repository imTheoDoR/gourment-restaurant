"use client";

import Subtitle from "@/components/subtitle";
import Title from "@/components/title";
import { ourChefs } from "@/data/our-chefs";
import AboutSingleChef from "./single-chef";
import { Button } from "../ui/button";
import Link from "next/link";

const OurChefs = () => {
  return (
    <section className="container py-20 lg:py-32">
      <div className="text-center">
        <Subtitle text="Our chefs" />
        <Title text="meet our awesome chefs" className="mt-3 mb-5" isDark />
        <p className="text-lg">
          At Gourmet Restaurant, our culinary team is the heart and soul of our
          kitchen.
        </p>

        <div className="flex flex-col lg:flex-row flex-wrap gap-5 gap-y-10 lg:gap-y-20 justify-around items-center max-w-6xl mx-auto mt-20">
          {ourChefs.map((chef, index) => (
            <AboutSingleChef
              key={index}
              image={chef.image}
              name={chef.name}
              position={chef.position}
            />
          ))}
        </div>

        <Link href="/meet-our-chefs">
          <Button variant="red" size="lg" className="mt-12">
            Meet our chefs
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default OurChefs;
