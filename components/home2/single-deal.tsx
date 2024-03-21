"use client";

import Image from "next/image";
import Link from "next/link";
import { IoChevronForwardOutline } from "react-icons/io5";

const SingleDeal = ({ image, name, price, isDealWeek }: SingleDealProps) => {
  return (
    <div className="flex flex-col">
      <div className="w-[248px] h-[287px] relative">
        <Image
          src={`/images/deals/${image}`}
          alt={name}
          width={248}
          height={287}
          className="w-full h-full"
        />

        <div className="font-colus text-white bg-red px-5 py-2 absolute top-8 right-0">
          {isDealWeek ? "weekend offer" : "today best deal"}
        </div>
      </div>

      <h4 className="text-dark text-[24px] font-semibold pt-5 text-center capitalize">
        {name}
      </h4>
      {isDealWeek ? (
        <Link
          href="#book-now"
          className="flex items-center justify-center text-red font-semibold text-xl hover:text-green duration-300"
        >
          Book Now
          <IoChevronForwardOutline className="w-4 h-4 ml-2 mt-px" />
        </Link>
      ) : (
        <span className="text-xl font-bold text-dark/70 text-center">
          Price: ${price}
        </span>
      )}
    </div>
  );
};

export default SingleDeal;
