"use client";

import Title from "@/components/title";
import { deals } from "@/data/deals";
import Link from "next/link";
import { IoChevronForwardOutline } from "react-icons/io5";
import SingleDeal from "./single-deal";

const BestDealTwo = () => {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="container flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">
        <div>
          <p className="text-dark capitalize pb-5">featured</p>
          <Title
            text="today best deals"
            className="text-dark !text-3xl max-w-[210px] pb-3"
          />
          <Link
            href="#deals"
            className="text-dark/60 uppercase font-semibold flex items-center group hover:text-green"
          >
            view all offers
            <IoChevronForwardOutline className="ml-2 w-4 h-4 group-hover:ml-4 duration-300" />
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {deals.map((deal, index) => (
            <SingleDeal
              key={index}
              image={deal.image}
              name={deal.name}
              price={deal.price}
              isDealWeek={deal.isDealWeek}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestDealTwo;
