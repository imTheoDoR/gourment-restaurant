"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { FaAngleDoubleDown } from "react-icons/fa";
import Link from "next/link";

const PDFMenu = () => {
  return (
    <div className="container py-20 lg:py-32">
      <div className="flex flex-col-reverse xl:flex-row justify-center items-center max-w-7xl mx-auto">
        <div className="h-auto -mr-0 xl:-mr-10 ml-0 xl:ml-10">
          <div className="bg-gray/20 px-8 lg:px-20 py-20 rounded-t-[60px] xl:rounded-t-[0] xl:rounded-tl-[60px] border-b-[7px] border-red w-full relative">
            <h4 className="font-colus text-dark text-xl pb-5">
              explore our brochure
            </h4>
            <p className="text-[#333038] max-w-lg pl-3 lg:pl-5">
              Discover our full menu, complete with detailed descriptions of
              each dish, along with information on our special events, private
              dining options, and more.
            </p>

            <Link
              href="#download-pdf-menu"
              className="place-self-center absolute -bottom-8 left-0 right-0"
            >
              <Button variant="red" className="text-lg h-16">
                <FaAngleDoubleDown className="w-8 h-8 mr-1" />
                Download PDF Menu
              </Button>
            </Link>
          </div>
        </div>

        <Image
          src="/images/menu.png"
          alt="gourment restaurant explore menu"
          width={643}
          height={494}
          className="max-w-[640px] w-full z-20 px-5 lg:px-0 -mb-20 xl:mb-0"
        />
      </div>

      <p className="text-center mt-10 text-dark">
        Download our brochure today and start exploring the endless
        possibilities that await at Gourmet Restaurant.
      </p>
    </div>
  );
};

export default PDFMenu;
