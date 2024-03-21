"use client";

import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";

const Header = ({ title, description, className, component }: HeaderProps) => {
  return (
    <div
      className={cn(
        "w-full min-h-[500px] bg-cover bg-center bg-no-repeat relative",
        className
      )}
    >
      <div className="absolute left-0 right-0">
        <Navbar />
      </div>
      <div className="w-full min-h-[500px]  text-center flex flex-col justify-center items-center pt-10 lg:pt-32">
        {title && (
          <>
            <h1 className="font-colus text-white2 tracking-wide uppercase text-5xl lg:text-7xl drop-shadow-lg">
              {title}
            </h1>
            <div className="w-full flex flex-row justify-center items-center pt-12">
              {/* line left */}
              <div className="max-w-[200px] w-full h-px bg-white relative hidden lg:block">
                <div className="w-1 h-1 rotate-45 bg-white absolute top-1/2 bottom-1/2 right-0 transform -translate-y-1/2" />
              </div>

              {/* description */}
              <span className="font-colus text-white text-xl max-w-[650px] tracking-wide mx-0 lg:mx-10 text-center">
                {description ? description : "Set a description here!"}
              </span>

              {/* line right */}
              <div className="max-w-[200px] w-full h-px bg-white relative hidden lg:block">
                <div className="w-1 h-1 rotate-45 bg-white absolute top-1/2 bottom-1/2 left-0 transform -translate-y-1/2" />
              </div>
            </div>
          </>
        )}

        {component && component}
      </div>
    </div>
  );
};

export default Header;
