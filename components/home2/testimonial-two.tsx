"use client";

import Image from "next/image";
import React, { useState } from "react";
import Title from "@/components/title";
import Subtitle from "@/components/subtitle";
import { Button } from "@/components/ui/button";
import { IoIosArrowBack } from "react-icons/io";
import { testimonialsTwo } from "@/data/testimonials";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import { BiSolidStar, BiSolidStarHalf, BiStar } from "react-icons/bi";

const TestimonialTwo = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonialsTwo.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonialsTwo.length - 1 : prev - 1
    );
  };

  const fiveStar = Math.floor(testimonialsTwo[currentTestimonial].rating);
  const halfStars =
    testimonialsTwo[currentTestimonial].rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fiveStar - halfStars;

  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
        <div className="max-w-[459px] w-full relative p-5 lg:p-0">
          <Image
            src={`/images/testimonial2/${testimonialsTwo[currentTestimonial].image}`}
            alt={testimonialsTwo[currentTestimonial].name}
            width={459}
            height={413}
            className="w-full transition-opacity duration-300"
          />

          <div className="bg-dark/45 lg:bg-dark/15 rounded-2xl shadow-md shadow-dark/20 max-w-[300px] w-full px-5 py-4 backdrop-blur-2xl absolute right-0 lg:-right-10 left-1/2 lg:left-auto -bottom-8 transform -translate-x-1/2 lg:-translate-x-0">
            <p className="text-white capitalize font-bold">
              customer review rate
            </p>

            <div className="flex items-center justify-between pt-3">
              <div className="flex flex-row-reverse group">
                <Link href="#meet-chefs">
                  <div className="w-10 h-10 bg-orange2 hover:bg-red duration-300 rounded-full flex items-center justify-center shadow-md shadow-black/30 -ml-5">
                    <FaPlus className="text-white w-8 h-8" />
                  </div>
                </Link>

                <div className="rounded-full flex items-center justify-center shadow-md shadow-black/30 -ml-5 overflow-hidden">
                  <Image
                    src="/images/chef3.png"
                    alt="gourment restaurant chef three"
                    width={79}
                    height={78}
                    className="w-10 h-10"
                  />
                </div>

                <div className="rounded-full flex items-center justify-center shadow-md shadow-black/30 -ml-5 overflow-hidden">
                  <Image
                    src="/images/chef2.png"
                    alt="gourment restaurant chef two"
                    width={79}
                    height={78}
                    className="w-10 h-10"
                  />
                </div>

                <div className="rounded-full flex items-center justify-center shadow-md shadow-black/30 overflow-hidden">
                  <Image
                    src="/images/chef1.png"
                    alt="gourment restaurant chef one"
                    width={79}
                    height={78}
                    className="w-10 h-10"
                  />
                </div>
              </div>

              <div className="flex flex-row justify-center space-x-px">
                {[...Array(fiveStar)].map((_, index) => (
                  <BiSolidStar
                    className="text-white w-6 h-6 p-px bg-[#219653]"
                    key={`full-${index}`}
                  />
                ))}
                {halfStars === 1 && (
                  <BiSolidStarHalf className="text-white w-6 h-6 p-px bg-[#219653]" />
                )}
                {[...Array(emptyStars)].map((index) => (
                  <BiStar
                    className="text-white w-6 h-6 p-px bg-[#219653]"
                    key={`empty-${index}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-2xl w-full px-5 lg:px-0">
          <Subtitle text="Testimonials" />
          <Title
            text="read what others have to say"
            className="text-dark !text-3xl max-w-[400px] pt-3 pb-5"
          />
          <p className="text-dark">
            “{testimonialsTwo[currentTestimonial].description}”
          </p>

          <div className="pt-10">
            <p className="text-2xl font-bold">
              {testimonialsTwo[currentTestimonial].name}
            </p>
            <p className="text-dark/50">
              {testimonialsTwo[currentTestimonial].location}
            </p>
          </div>

          {/* testimonial switcher */}
          <div className="mt-10 space-x-5">
            <Button
              className="bg-[#88776E] hover:bg-[#FAE9B7] duration-300 w-14 h-14 group"
              size="icon"
              onClick={prevTestimonial}
            >
              <IoIosArrowBack className="w-10 h-10 p-1 text-white group-hover:text-dark mr-1 duration-300" />
            </Button>

            <Button
              className="bg-[#88776E] hover:bg-[#FAE9B7] duration-300 w-14 h-14 group"
              size="icon"
              onClick={nextTestimonial}
            >
              <IoIosArrowBack className="w-10 h-10 p-1 text-white group-hover:text-dark ml-1 duration-300 rotate-180" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialTwo;
