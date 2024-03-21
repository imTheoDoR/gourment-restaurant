"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data/nav-links";
import Image from "next/image";
import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { IoChevronUp } from "react-icons/io5";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [desktopDropDown, setDekstopDropDown] = useState<
    boolean | number | null
  >(null);
  const [mobileDropdown, setMobileDropdown] = useState<number | boolean | null>(
    null
  );
  const [closingTimer, setClosingTimer] = useState<NodeJS.Timeout | null>(null);

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
        duration: 0,
      },
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  const dropdownVariants = {
    closed: {
      opacity: 0,
      y: "-20px",
      display: "none",
      transition: {
        duration: 0.5,
        display: {
          delay: 0.5,
        },
      },
    },

    opened: {
      opacity: 1,
      y: 0,
      display: "block",
      transition: {
        duration: 0.5,
        display: {
          delay: 0,
        },
      },
    },
  };

  const dropdownMenuVariants = {
    closed: {
      opacity: 0,
      y: "-20px",
      display: "none",
      transition: {
        duration: 0.5,
        display: {
          delay: 0.5,
        },
      },
    },

    opened: {
      opacity: 1,
      y: 0,
      display: "flex",
      transition: {
        duration: 0.5,
        display: {
          delay: 0,
        },
      },
    },
  };

  const openDropdown = (index: number) => {
    if (closingTimer) {
      clearTimeout(closingTimer);
    }

    setDekstopDropDown(index);
  };

  const closeDropdown = () => {
    const timer = setTimeout(() => {
      setDekstopDropDown(null);
    }, 150);

    setClosingTimer(timer);
  };

  const toggleMobileDropdown = (index: any) => {
    if (mobileDropdown === index) {
      setMobileDropdown(null);
    } else {
      setMobileDropdown(index);
    }
  };

  // close the mobile menu after the route was changed
  useEffect(() => {
    const handleRouteChange = () => {
      setOpen(false);
    };

    window.addEventListener("popstate", handleRouteChange);
    window.addEventListener("hashchange", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
      window.removeEventListener("hashchange", handleRouteChange);
    };
  }, []);

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
          {navLinks.map((link, index) =>
            link.sublinks ? (
              <li key={index} className="relative">
                <Link
                  href={link.href}
                  onMouseEnter={() => openDropdown(index)}
                  onMouseLeave={closeDropdown}
                  className={`${
                    pathname === link.href ? "text-orange2" : "text-white"
                  } hover:text-orange2 duration-200 flex items-center`}
                >
                  {link.label}
                  <IoChevronUp
                    className={cn(
                      "ml-3 duration-200",
                      desktopDropDown === index ? "rotate-180" : null
                    )}
                  />
                </Link>

                <motion.ul
                  variants={dropdownVariants}
                  initial="closed"
                  animate={desktopDropDown === index ? "opened" : "closed"}
                  onMouseEnter={() => openDropdown(index)}
                  onMouseLeave={closeDropdown}
                  className="absolute px-5 py-3 rounded-r-[18px] rounded-b-[18px] w-[200px] bg-white/30 backdrop-blur-lg space-y-2 border-b-2 border-orange2 mt-4 z-50"
                >
                  {link.sublinks.map((sublink, index) => (
                    <li key={index}>
                      <Link
                        href={sublink.href}
                        className={`${
                          pathname === sublink.href
                            ? "text-orange2"
                            : "text-white"
                        } hover:text-orange2 duration-200`}
                      >
                        {sublink.label}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              </li>
            ) : (
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
            )
          )}

          <Button variant="btnHead" size="book">
            Book a Table
          </Button>
        </ul>

        {/* Mobile menu */}

        {/* Hamburger */}
        <Button
          size="icon"
          variant="default"
          className="z-[9999] w-9 h-7 flex lg:hidden flex-col justify-between mt-3"
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
            className="w-screen h-screen bg-gray/80 backdrop-blur-xl absolute top-0 left-0 flex lg:hidden flex-col justify-center items-center space-y-5 z-[999]"
            variants={menuVariants}
            initial="closed"
            animate="opened"
          >
            {navLinks.map((link, index) =>
              link.sublinks ? (
                <div key={index} className="text-center">
                  <Link
                    href={link.href}
                    className="text-xl text-white"
                    onClick={() => toggleMobileDropdown(index)}
                  >
                    {link.label}
                  </Link>

                  {mobileDropdown === index && (
                    <motion.div
                      variants={dropdownMenuVariants}
                      initial="closed"
                      animate={mobileDropdown === index ? "opened" : "closed"}
                      className="flex flex-col justify-center items-center px-5 py-3 rounded-b-[18px] min-w-[250px] bg-white/30 backdrop-blur-lg space-y-2 border-b-2 border-orange2"
                    >
                      {link.sublinks.map((sublink, index) => (
                        <Link
                          key={index}
                          href={sublink.href}
                          className="text-xl text-white"
                        >
                          {sublink.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ) : (
                <Link
                  key={index}
                  href={link.href}
                  className="text-xl text-white"
                >
                  {link.label}
                </Link>
              )
            )}

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
