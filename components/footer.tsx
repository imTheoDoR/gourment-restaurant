"use client";

import Image from "next/image";
import Delimiter from "@/components/delimiter";
import { Button } from "./ui/button";
import Link from "next/link";
import { footerList1, footerList2, socials } from "@/data/footer";

const Footer = () => {
  return (
    <footer className="bg-gray">
      <div className="container flex flex-row justify-center gap-20 py-20">
        <div className="max-w-xs">
          <Image
            src="/images/logo.svg"
            alt="gourments restaurant logo footer"
            width={174}
            height={90}
            className="w-72 mx-auto pb-14"
          />

          <p className="text-center text-white2 pb-3">
            Elevate your special occasions with our exclusive private dining
            experience at Gourmet Restaurant
          </p>
          <Delimiter isLight />
        </div>

        <div className="max-w-5xl flex justify-between items-end w-full pt-0 lg:pt-10">
          {/* col 1 - book a table */}
          <div className="bg-[#5D5965] flex flex-col max-w-[320px] w-full px-10 justify-center text-center rounded-tr-[45px] border-b-4 border-[#FAE9B7] py-10 place-self-end">
            <span className="font-colus text-2xl text-white">1800.123.321</span>
            <span className="text-white font-colus text-lg">
              <span className="text-sm">Everyday:</span> 10 AM to 11 PM
            </span>

            <Link href="/contact">
              <Button className="border border-sand px-10 py-6 text-lg hover:bg-sand/30 text-white2 w-full mt-10">
                Book a Table
              </Button>
            </Link>
          </div>

          {/* col 2 - list link 1 */}
          <ul className="space-y-4 place-self-center">
            {footerList1.map((list, index) => (
              <li key={index}>
                <Link
                  href={list.href}
                  className="text-white2 text-lg hover:text-yellow duration-300"
                >
                  {list.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* col 3 - list link 2 */}
          <ul className="space-y-4 place-self-center">
            {footerList2.map((list, index) => (
              <li key={index}>
                <Link
                  href={list.href}
                  className="text-white2 text-lg hover:text-yellow duration-300"
                >
                  {list.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* col 4 - socials */}
          <div className="place-self-center">
            <h4 className="font-colus text-white text-2xl">social media</h4>

            <div className="flex justify-between items-center mt-5">
              {socials.map((social, index) => (
                <Link key={index} href={social.href}>
                  <social.icon className="w-10 h-10 text-white2 hover:text-yellow duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="bg-yellow">
        <div className="container py-5 flex flex-col lg:flex-row justify-between items-center">
          <span className="text-gray">
            Capyright &copy;{" "}
            <Link className="text-brown" href="/">
              Gourment Restaurant
            </Link>
            . All right reserved.
          </span>

          <span className="text-gray">
            Powered by
            <Link
              className="text-brown pl-1"
              href="https://webdraw.ro"
              target="_blank"
            >
              WebDraw Studio
            </Link>
            .
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
