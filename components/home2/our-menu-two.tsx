"use client";

import Title from "@/components/title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { menu, menuCategoryDesc } from "@/data/menu";
import transformTitle from "@/lib/transform-title";
import Image from "next/image";
import { useState } from "react";
import ItemMenuTwo from "./item-menu-two";
import Link from "next/link";
import { Button } from "../ui/button";

const OurMenuTwo = () => {
  const [menuCategory, setMenuCategory] = useState("starters");

  const onChangeMenu = (menu: string) => {
    setMenuCategory(menu);
  };

  return (
    <section className="bg-white2 py-20 lg:py relative overflow-y-hidden">
      {/* background plate 1 */}
      <div className="bg-menu-plate-1 bg-contain bg-no-repeat w-[303px] h-[680px] absolute top-1/2 bottom-1/2 transform -translate-y-1/2 right-0 z-10 hidden xl:block" />

      <div className="container">
        <Title text="our menu" className="text-dark text-center pb-5" />
        <p className="text-dark text-center max-w-lg mx-auto">
          Indulge in a world of flavor with our diverse and tantalizing menu at
          Gourmet Restaurant.
        </p>

        <Tabs
          defaultValue={menuCategory}
          className="max-w-max lg:max-w-7xl mx-auto mt-16 relative z-50"
          onValueChange={onChangeMenu}
        >
          <TabsList className="bg-[#88776E] mx-auto max-w-auto lg:max-w-5xl w-full flex flex-wrap justify-center lg:justify-between items-center">
            <TabsTrigger value="starters">Starters</TabsTrigger>
            <TabsTrigger value="main-course">Main Course</TabsTrigger>
            <TabsTrigger value="lunch">Lunch</TabsTrigger>
            <TabsTrigger value="desserts">Desserts</TabsTrigger>
            <TabsTrigger value="drinks">Drinks</TabsTrigger>
          </TabsList>

          <div className="mt-10">
            <TabsContent value={menuCategory}>
              <div className="flex flex-col lg:flex-row gap-x-0 lg:gap-x-20 items-center">
                {/* tab col 1 */}
                <div className="w-auto lg:w-1/3">
                  <h4 className="font-colus text-dark text-xl">
                    {transformTitle(menuCategory)}
                  </h4>
                  <p className="text-gray max-w-max lg:max-w-[400px] pb-5">
                    {String(menuCategoryDesc[menuCategory as MenuCategory])}
                  </p>

                  <Image
                    src="/images/home2/menu-image.png"
                    alt="gourmet restaurant menu starters"
                    width={431}
                    height={488}
                    className="w-full hidden lg:block p-2"
                  />

                  <div className="text-center bg-white/5 backdrop-blur-xl -mt-32 px-5 py-8 shadow-md space-y-3 hidden lg:block">
                    <p className="text-white">
                      Visit us for the ultimate culinary adventure
                    </p>
                    <p className="text-white">
                      179 Murphy Court Valley, Dublin 92182
                    </p>
                    <p className="text-white">Everyday : 10 AM To 11 PM</p>
                  </div>
                </div>

                {/* tab col 2 */}
                <div className="w-auto mt-16 lg:w-2/3 pr-3 lg:pr-5 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
                  {menu
                    .filter((item) => item.category === menuCategory)
                    .map((item, index) => (
                      <ItemMenuTwo
                        key={index}
                        image={`/images/menu/${item.image}`}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                      />
                    ))}
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>

        <div className="text-center mt-20">
          <Link href="/menu">
            <Button className="text-brown border border-sand px-10 py-6 text-lg hover:bg-sand/30 bg-transparent">
              Browse All Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurMenuTwo;
