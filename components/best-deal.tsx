"use client";

import Title from "@/components/title";
import Subtitle from "@/components/subtitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./swiper.style.css";

// Import Swiper required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const BestDeal = () => {
  return (
    <>
      <div className="text-center">
        <Title text="Today's best deals" isDark />
        <Subtitle text="Savor the taste of savings with our daily specials, carefully curated by our culinary team to showcase the best of what Gourmet has to offer." />
      </div>

      <div className="mt-20 mx-auto max-w-7xl">
        <Swiper
          spaceBetween={100}
          slidesPerView={2}
          slidesPerGroup={2}
          pagination={true}
          modules={[Pagination]}
          breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 80,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="max-h-[361px] pb-16">
              <div className="bg-gradient-to-t from-[#FC9D6A]/30 to-[#B0CEF2]/30 bg-no-repeat bg-cover w-full h-[311px] px-10 py-16 rounded-t-3xl rounded-br-3xl relative shadow-md">
                <div className="bg-sale bg-cover bg-no-repeat w-[151px] h-[71px] bg flex items-center justify-center absolute top-5 right-14">
                  <span className="text-2xl font-extrabold">30% OFF</span>
                </div>
                <Image
                  src="/images/plate.png"
                  alt="today offer gourment restaurant"
                  width={338}
                  height={246}
                  className="absolute -right-10 -bottom-10 w-80"
                />
                <h4 className="font-colus text-3xl">Today Offer</h4>
                <p className="text-gray pt-5 max-w-[400px] leading-5">
                  Experience culinary excellence at an unbeatable value as you
                  explore our carefully curated selection of signature dishes
                  and chef&apos;s specialties.
                </p>

                <Link href="#get_offer">
                  <Button className="bg-blue text-white mt-5 hover:bg-red">
                    Get Offer
                  </Button>
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-[url('/images/slider/bg1.png')] bg-no-repeat bg-cover w-full h-[311px] px-10 py-8 rounded-t-3xl rounded-br-3xl relative shadow-md">
              <div className="bg-white/40 backdrop-blur-md p-5 rounded-2xl">
                <h4 className="font-colus text-3xl text-center drop">
                  Weekend offer
                </h4>
                <p className="text-black pt-5 max-w-[300px] leading-5 text-center mx-auto">
                  Make your weekends extraordinary with our exclusive Weekend
                  Offer at Gourmet Restaurant
                </p>
              </div>

              <Link href="#get_offer">
                <Button className="bg-red text-white mt-5 hover:bg-blue">
                  Get Offer
                </Button>
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="max-h-[361px] pb-16">
              <div className="bg-gradient-to-t from-[#FC9D6A]/30 to-[#B0CEF2]/30 bg-no-repeat bg-cover w-full h-[311px] px-10 py-16 rounded-t-3xl rounded-br-3xl relative shadow-md">
                <div className="bg-sale bg-cover bg-no-repeat w-[151px] h-[71px] bg flex items-center justify-center absolute top-5 right-14">
                  <span className="text-2xl font-extrabold">30% OFF</span>
                </div>
                <Image
                  src="/images/plate.png"
                  alt="today offer gourment restaurant"
                  width={338}
                  height={246}
                  className="absolute -right-10 -bottom-10 w-80"
                />
                <h4 className="font-colus text-3xl">Today Offer</h4>
                <p className="text-gray pt-5 max-w-[400px] leading-5">
                  Experience culinary excellence at an unbeatable value as you
                  explore our carefully curated selection of signature dishes
                  and chef&apos;s specialties.
                </p>

                <Link href="#get_offer">
                  <Button className="bg-blue text-white mt-5 hover:bg-red">
                    Get Offer
                  </Button>
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-[url('/images/slider/bg1.png')] bg-no-repeat bg-cover w-full h-[311px] px-10 py-8 rounded-t-3xl rounded-br-3xl relative shadow-md">
              <div className="bg-white/40 backdrop-blur-md p-5 rounded-2xl">
                <h4 className="font-colus text-3xl text-center drop">
                  Weekend offer
                </h4>
                <p className="text-black pt-5 max-w-[300px] leading-5 text-center mx-auto">
                  Make your weekends extraordinary with our exclusive Weekend
                  Offer at Gourmet Restaurant
                </p>
              </div>

              <Link href="#get_offer">
                <Button className="bg-red text-white mt-5 hover:bg-blue">
                  Get Offer
                </Button>
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default BestDeal;
