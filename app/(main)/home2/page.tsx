import BestDealTwo from "@/components/home2/best-deal-two";
import HeaderTwo from "@/components/home2/header-two";
import OurMenuTwo from "@/components/home2/our-menu-two";
import WelcomeTo from "@/components/home2/welcome-to";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BsCalendar2Check } from "react-icons/bs";

export default function HomeTwo() {
  return (
    <main className="bg-white2/40">
      <div className="">
        <HeaderTwo />
      </div>

      <div className="mx-5 lg:mx-0">
        <div className="bg-[#414141]/60 backdrop-blur-xl border-b-[8px] border-[#F2C94C] min-h-[100px] max-w-max lg:max-w-5xl w-full mx-auto rounded-xl px-10 py-14 flex flex-col lg:flex-row gap-10 items-center -mt-28 z-50 relative shadow-[rgba(0,0,15,0.5)_0_-5px_24px_0px]">
          <div className="max-w-lg text-xl font-bold text-white">
            Book your table now and let us take you on a culinary adventure like
            no other!
          </div>
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-5">
            <Link href="/contact">
              <Button variant="red" className="h-14 text-lg">
                <BsCalendar2Check className="mr-3 w-7 h-7" />
                Reserve Today
              </Button>
            </Link>

            <Link href="/menu">
              <Button className="h-14 text-lg border-2 border-white text-white capitalize hover:bg-white duration-300 hover:text-dark">
                see our menu
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <WelcomeTo />
      <OurMenuTwo />
      <BestDealTwo />
    </main>
  );
}
