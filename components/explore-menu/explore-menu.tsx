"use client";

import Title from "@/components/title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { menu } from "@/data/menu";
import ItemMenu from "@/components/explore-menu/item-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const ExploreMenu = () => {
  return (
    <section className="bg-gray text-white w-full relative overflow-y-hidden">
      <div className="container py-28 z-40 relative">
        <div className="text-center">
          <Title text="Explore our menu" />
        </div>

        <Tabs
          defaultValue="starters"
          className="max-w-auto lg:max-w-7xl mx-auto mt-16"
        >
          <TabsList className="mx-auto max-w-auto lg:max-w-5xl w-full flex flex-wrap justify-center lg:justify-between items-center">
            <TabsTrigger value="starters">Starters</TabsTrigger>
            <TabsTrigger value="main-course">Main Course</TabsTrigger>
            <TabsTrigger value="lunch">Lunch</TabsTrigger>
            <TabsTrigger value="desserts">Desserts</TabsTrigger>
            <TabsTrigger value="drinks">Drinks</TabsTrigger>
          </TabsList>

          <div className="mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {menu.map((item, index) => (
                <TabsContent key={index} value={item.category}>
                  <ItemMenu
                    image={`/images/menu/${item.image}`}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                  />
                </TabsContent>
              ))}
            </div>
          </div>
        </Tabs>

        <div className="text-center mt-16">
          <Link href="/menu">
            <Button className="border border-sand px-10 py-6 text-lg hover:bg-sand/30 bg-gray/70 lg:bg-transparent">
              Browse All Menu
            </Button>
          </Link>
        </div>
      </div>

      <div className="bg-contain bg-menu bg-no-repeat w-[281px] h-[441px] absolute left-0 bottom-[-220px]" />
    </section>
  );
};

export default ExploreMenu;
