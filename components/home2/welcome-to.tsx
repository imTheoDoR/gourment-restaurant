"use client";

import Title from "@/components/title";
import ReservationForm from "@/components/homepage/reservation/reservation-form";
import FeatureItem from "./feature-item";

const WelcomeTo = () => {
  const items = [
    {
      image: "w-fresh.png",
      title: "Exceptional Quality",
      description: "Fresh, premium, locally sourced produce.",
    },
    {
      image: "w-innovation.png",
      title: "Creative Culinary Innovation",
      description: "Innovative menu, reinventing classics.",
    },
    {
      image: "w-serving.png",
      title: "Impeccable Service",
      description: "Warm welcome, attentive staff, memorable experience.",
    },
    {
      image: "w-ambiance.png",
      title: "Ambiance and Atmosphere",
      description: "Cozy, inviting, elegant, charming setting.",
    },
  ];

  return (
    <div className="container py-20 lg:py-32">
      <div className="flex flex-col lg:flex-row justify-center gap-20 max-w-7xl mx-auto">
        <div className="w-full">
          <Title
            text="welcome to gourmet restaurant"
            className="text-dark max-w-max lg:max-w-[370px] pb-5 !text-[30px]"
          />
          <p className="text-dark/70 max-w-lg">
            At Gourmet, we believe that every meal is an opportunity to
            celebrate the joy of life and share special moments with loved ones.
          </p>

          <div className="mt-8 ml-0 lg:ml-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
            {items.map((item, index) => (
              <FeatureItem
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
        <ReservationForm />
      </div>
    </div>
  );
};

export default WelcomeTo;
