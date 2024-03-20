"use client";

import Title from "@/components/title";
import { ourChefs } from "@/data/our-chefs";
import AboutSingleChef from "../about/single-chef";

const OurTeam = () => {
  return (
    <section className="bg-white2/50 py-20 lg:py-32">
      <div className="container">
        <Title
          text="meet our awesome chefs"
          className="text-dark pb-10"
          isDark
        />
        <p className="text-dark max-w-3xl">
          At Gourmet Restaurant, our culinary team is the heart and soul of our
          kitchen. Get to know the talented individuals who bring passion,
          creativity, and expertise to every dish we serve.
        </p>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-y-10 justify-center items-center mt-20">
          {ourChefs.map((chef, index) => (
            <AboutSingleChef
              key={index}
              name={chef.name}
              position={chef.position}
              image={chef.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
