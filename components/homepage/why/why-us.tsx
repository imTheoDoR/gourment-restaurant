"use client";

import Title from "@/components/title";
import { whyUs } from "@/data/why-us";
import WhyItem from "./why-item";

const WhyUs = () => {
  return (
    <section className="container py-32">
      <div className="text-center">
        <Title text="why choose us" isDark />
        <p className="text-gray max-w-4xl mx-auto pt-5">
          At Gourmet Restaurant, we believe in providing more than just a
          meal—we offer an unparalleled dining experience that sets us apart
          from the rest. Here are four reasons why you should choose us
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mt-16">
          {whyUs.map((item, index) => (
            <WhyItem
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
