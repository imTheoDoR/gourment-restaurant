"use client";

import { navLinks } from "@/data/nav-links";
import { Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="bg-gray/40 py-4 backdrop-blur-lg border-b border-gray2">
        <div className="container flex items-center justify-between">
          <div className="flex items-center">
            <IoLocationOutline className="w-6 h-6 text-white" />
            <span className="font-light">
              179 Muphy Court Valley, Dubllin 92182
            </span>
          </div>

          <div className="flex item-scenter">
            <span>0789.000.000</span>
            <div className="bg-white h-4 w-px my-auto mx-5" />
            <span>Everyday: 10 AM To 11 PM</span>
          </div>
        </div>
      </div>
      <nav className="container flex items-center justify-between mt-5">
        <Image
          src="/images/logo.png"
          alt="Gourmet Restaurant Logo"
          width={174}
          height={90}
          className="w-auto"
        />
        <ul className="flex items-center space-x-16">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className={`${
                  pathname === link.href ? "text-orange2" : "text-white"
                } hover:text-orange2 duration-200`}
              >
                {link.label}
              </Link>
            </li>
          ))}

          <Button variant="btnHead" size="book">
            Book a Table
          </Button>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
