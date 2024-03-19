"use client";

import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { LuCalendarClock } from "react-icons/lu";

const Header = () => {
  return (
    <div className="h-screen w-full bg-hero bg-cover bg-center bg-no-repeat relative overflow-hidden">
      <div className="relative lg:absolute left-0 right-0">
        <Navbar />
      </div>
      <div className="w-full h-full text-center flex flex-col justify-stretch lg:last:justify-center items-center pt-20">
        <h1 className="font-colus text-white2 tracking-wide uppercase text-5xl lg:text-7xl drop-shadow-lg">
          Welcome to gourment,
        </h1>
        <p className="max-w-max lg:max-w-2xl text-4xl mx-auto pt-16 lg:pt-24 font-bold drop-shadow-lg text-white2">
          Book your table now and let us take you on a culinary adventure like
          no other!
        </p>

        <Button
          variant="reserve"
          size="reserve"
          className="text-white2 mt-16 drop-shadow-lg"
        >
          <LuCalendarClock className="mr-3 w-9 h-9" />
          Reserve Today
        </Button>
      </div>
    </div>
  );
};

export default Header;
