"use client";

import { navLinks } from "@/data/nav-links";
import Image from "next/image";
import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const topLine = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
    },
  };

  const centerLine = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomLine = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
    },
  };

  const menuVariants = {
    closed: {
      x: "100vw",
      opacity: 0,
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.3,
      },
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <div className="hidden lg:block bg-gray/40 py-4 backdrop-blur-lg border-b border-gray2">
        <div className="container flex items-center justify-between">
          <div className="flex items-center text-white">
            <IoLocationOutline className="w-6 h-6" />
            <span className="font-light">
              179 Muphy Court Valley, Dubllin 92182
            </span>
          </div>

          <div className="flex item-scenter text-white">
            <span>0789.000.000</span>
            <div className="bg-white h-4 w-px my-auto mx-5" />
            <span>Everyday: 10 AM To 11 PM</span>
          </div>
        </div>
      </div>

      <nav className="container flex items-center justify-between pt-3">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="Gourmet Restaurant Logo"
            width={174}
            height={90}
            className="w-32 lg:w-40"
          />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center space-x-16">
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

        {/* Mobile menu */}

        {/* Hamburger */}
        <Button
          size="icon"
          variant="default"
          className="z-50 w-9 h-7 flex lg:hidden flex-col justify-between mt-3"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topLine}
            animate={open ? "opened" : "closed"}
            className="w-9 h-[3px] bg-white rounded-xl origin-left"
          ></motion.div>
          <motion.div
            variants={centerLine}
            animate={open ? "opened" : "closed"}
            className="w-9 h-[3px] bg-white rounded-xl"
          ></motion.div>
          <motion.div
            variants={bottomLine}
            animate={open ? "opened" : "closed"}
            className="w-9 h-[3px] bg-white rounded-xl origin-left"
          ></motion.div>
        </Button>

        {open && (
          <motion.div
            className="w-screen h-screen bg-gray/80 backdrop-blur-xl absolute top-0 left-0 z-40 flex lg:hidden flex-col justify-center items-center space-y-5"
            variants={menuVariants}
            initial="closed"
            animate="opened"
          >
            {navLinks.map((link, index) => (
              <Link key={index} href={link.href} className="text-xl text-white">
                {link.label}
              </Link>
            ))}

            <div className="pt-10 text-center space-y-4">
              <span className="text-white font-light">
                179 Muphy Court Valley, Dubllin 92182
              </span>
              <p className="text-white text-lg font-bold pb-10">
                Everyday: 10 AM To 11 PM
              </p>

              <Link href="tel:1800123321">
                <Button className="w-full h-12 text-lg" variant="btnHead">
                  Call Us
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
