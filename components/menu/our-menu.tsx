"use client";

import Title from "@/components/title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ItemMenu from "@/components/homepage/explore-menu/item-menu";
import Image from "next/image";
import { menu, menuCategoryDesc } from "@/data/menu";
import { useState } from "react";

function transformTitle(menu: string) {
  switch (menu) {
    case "starters":
      return "starters";
    case "main-course":
      return "main course";
    case "lunch":
      return "lunch";
    case "desserts":
      return "desserts";
    case "drinks":
      return "drinks";
    default:
      return "unknown menu";
  }
}

const OurMenu = () => {
  const [menuCategory, setMenuCategory] = useState("starters");

  const onChangeMenu = (menu: string) => {
    setMenuCategory(menu);
  };

  return (
    <section className="bg-white2/50 relative py-20 lg:py-32 overflow-x-hidden">
      {/* background plate 1 */}
      <div className="bg-menu-plate-1 bg-contain bg-no-repeat w-[303px] h-[680px] absolute top-1/2 bottom-1/2 right-0 z-10 hidden xl:block" />

      {/* background plate 2 */}
      <div className="bg-menu-plate-2 bg-contain bg-no-repeat w-[624px] h-[1174px] absolute bottom-0 left-0 z-10" />

      <div className="container relative z-40">
        <Title text="our menu" className="text-center pb-5" isDark />
        <p className="text-lg text-dark max-w-[600px] text-center mx-auto">
          Indulge in a world of flavor with our diverse and tantalizing menu at
          Gourmet Restaurant.
        </p>

        <Tabs
          defaultValue={menuCategory}
          className="max-w-max lg:max-w-7xl mx-auto mt-16"
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
                <div className="space-y-5 lg:space-y-10 w-auto lg:w-1/3">
                  <h4 className="font-colus text-dark text-xl">
                    {transformTitle(menuCategory)}
                  </h4>
                  <p className="text-gray max-w-max lg:max-w-[400px]">
                    {String(menuCategoryDesc[menuCategory as MenuCategory])}
                  </p>

                  <Image
                    src="/images/menu/starters.png"
                    alt="gourmet restaurant menu starters"
                    width={431}
                    height={488}
                    className="w-full hidden lg:block"
                  />
                </div>

                {/* tab col 2 */}
                <div className="space-y-5 w-auto mt-16 lg:w-2/3 overflow-y-auto max-h-[800px] pr-3 lg:pr-5 menu-scroll">
                  {menu
                    .filter((item) => item.category === menuCategory)
                    .map((item, index) => (
                      <ItemMenu
                        key={index}
                        image={`/images/menu/${item.image}`}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        secondary
                      />
                    ))}
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default OurMenu;
