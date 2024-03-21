"use client";

import Title from "@/components/title";

const GetInTouch = () => {
  return (
    <div className="container py-20 lg:py-32">
      <div className="flex flex-col gap-10 xl:flex-row items-center max-w-6xl mx-auto ">
        <div className="max-w-sm w-full">
          <Title text="get in touch" className="text-dark" />
          <p className="text-xl text-dark/60 max-w-[300px] pt-5">
            Reach Out to Us for Reservations, Inquiries, or Feedback
          </p>
        </div>
        <div className="bg-white rounded-tl-[48px] p-10 w-full border border-dark/10 flex flex-col lg:flex-row justify-between gap-10 lg:gap-20 mx-auto">
          <div>
            <h4 className="text-dark font-colus text-[16px]">our location</h4>
            <p className="text-[15px] text-[#5D5965] pt-5">
              179 Murphy Court Valley, Dublin IRL 92182
            </p>
          </div>

          <div>
            <h4 className="text-dark font-colus text-[16px]">email us</h4>
            <p className="text-[15px] text-[#5D5965] pt-5">
              contact@yourdomain.com
            </p>
          </div>

          <div>
            <h4 className="text-dark font-colus text-[16px]">call us</h4>
            <p className="text-[15px] text-[#5D5965] pt-5">1800.123.321</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
