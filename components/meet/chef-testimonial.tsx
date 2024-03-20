"use client";

import Title from "@/components/title";
import Image from "next/image";
import SingleChef from "./single-chef";

const ChefTestimonial = () => {
  return (
    <section className="container pt-20 pb-52 lg:pt-32 lg:pb-48">
      <Title text="chef testimonials" className="text-center pb-5" isDark />
      <p className="text-center text-xl">
        Insights from Our Culinary Experts on Craftsmanship and Creativity
      </p>

      <div className="grid grid-cols-1 items-center justify-center lg:grid-cols-2 gap-20 gap-y-52 md:gap-y-40 lg:gap-y-40 mt-20 md:mt-32">
        <SingleChef
          image="chef1.png"
          name="David Johnson"
          position="Executive Chef"
          description="“As a chef, my philosophy is simple: let the ingredients shine. I
          believe in using fresh, seasonal produce and letting their natural
          flavors take center stage in every dish.”"
        />

        <SingleChef
          image="chef2.png"
          name="Alexander Petter"
          position="Chef"
          description="“For me, cooking is more than just a job—it's a passion. 
          I approach each dish with creativity and enthusiasm, drawing inspiration from my culinary experiences and personal heritage.”"
        />
      </div>
    </section>
  );
};

export default ChefTestimonial;
