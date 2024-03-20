"use client";

import { BsCheckCircle } from "react-icons/bs";
import Title from "@/components/title";
import ReservationForm from "@/components/homepage/reservation/reservation-form";

const ReservationWrapper = () => {
  return (
    <section className="bg-reserve bg-cover w-full">
      <div className="container py-20 lg:py-10 flex flex-col lg:flex-row justify-between items-center max-w-6xl">
        <div className="space-y-10 pb-16 lg:pb-0  max-w-[640px]">
          <Title
            text="reserved for private dining"
            className="text-white2 max-w-[420px]"
          />
          <p className="text-lg text-white">
            Whether you&apos;re celebrating a milestone birthday, hosting a
            corporate event, or planning an intimate gathering with loved ones,
            our private dining spaces provide the perfect setting for an
            unforgettable event.
          </p>

          <ul className="space-y-5">
            <li className="flex items-center text-white text-lg">
              <BsCheckCircle className="text-yellow w-7 h-7 mr-5" />
              Unforgettable Culinary Experience
            </li>
            <li className="flex items-center text-white text-lg">
              <BsCheckCircle className="text-yellow w-7 h-7 mr-5" />
              Elegant and Relaxing Atmosphere
            </li>
            <li className="flex items-center text-white text-lg">
              <BsCheckCircle className="text-yellow w-7 h-7 mr-5" />
              Impeccable Service and Attention to Detail
            </li>
          </ul>
        </div>

        <ReservationForm />
      </div>
    </section>
  );
};

export default ReservationWrapper;
