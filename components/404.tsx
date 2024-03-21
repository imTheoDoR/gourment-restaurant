"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaLongArrowAltLeft } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="mt-20">
      <h1 className="text-yellow text-[120px] lg:text-[180px] font-extrabold">
        404
      </h1>
      <h4 className="text-5xl lg:text-7xl text-yellow font-colus">
        page is not found
      </h4>
      <p className="text-xl lg:text-3xl text-white font-colus">
        are you lost? this page does not exist.
      </p>

      <Link href="/">
        <Button variant="red" className="h-14 px-20 text-lg mt-20">
          <FaLongArrowAltLeft className="w-8 h-6 mr-3 -ml-3" />
          Go to Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
