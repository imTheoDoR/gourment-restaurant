"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { BiSolidStar, BiSolidStarHalf, BiStar } from "react-icons/bi";

const TestimonialReview = ({
  image,
  title,
  rating,
  description,
  order,
}: TestimonialReviewProps) => {
  const fiveStar = Math.floor(rating);
  const halfStars = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fiveStar - halfStars;

  return (
    <div className="h-auto lg:max-w-[450px] w-full">
      <div
        className={cn(
          "bg-white2/50 rounded-[30px] border-b-4 border-green px-5 lg:px-10 pb-7 text-center relative shadow-lg",
          order === 1 ? "mt-0 lg:mt-20" : undefined
        )}
      >
        <Image
          src={`/images/testimonial/${image}`}
          alt={title}
          width={120}
          height={120}
          className="absolute -top-14 right-1/2 left-1/2 transform -translate-x-1/2 w-28"
        />
        <h4 className="pt-20 font-colus text-xl">{title}</h4>
        <div className="flex flex-row justify-center">
          {[...Array(fiveStar)].map((_, index) => (
            <BiSolidStar
              className="text-yellow w-4 h-4"
              key={`full-${index}`}
            />
          ))}
          {halfStars === 1 && (
            <BiSolidStarHalf className="text-yellow w-4 h-4" />
          )}
          {[...Array(emptyStars)].map((index) => (
            <BiStar className="text-yellow w-4 h-4" key={`empty-${index}`} />
          ))}
        </div>
        <p className="text-[#565454] pt-5 leading-5">{description}</p>
      </div>
    </div>
  );
};

export default TestimonialReview;
