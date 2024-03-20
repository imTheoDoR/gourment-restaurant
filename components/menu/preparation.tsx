"use client";

import Title from "@/components/title";
import PlayButton from "./play-button";
import Image from "next/image";
import VideoDrawer from "./video-drawer";

const Preparation = () => {
  return (
    <section className="bg-preparation bg-cover bg-no-repeat bg-center w-full py-32 lg:py-48">
      <div className="container">
        <Title
          text="gourmet good: preparation & guidlines"
          className="text-center max-w-max lg:max-w-2xl mx-auto"
          isSmaller
        />

        <div className="flex flex-col lg:flex-row justify-around items-center mt-20 space-y-16 lg:space-y-0">
          <div>
            <VideoDrawer
              title="How to prepare salad"
              video="https://www.youtube.com/embed/QmFT-L45i2w"
              component={
                <>
                  <div className="relative w-[300px] h-[177px]">
                    <Image
                      src="/images/video1.png"
                      alt="gourmet restaurant menu how one"
                      width={300}
                      height={177}
                      className="w-full"
                    />

                    <div className="place-self-center absolute top-0 bottom-0 left-0 right-0">
                      <PlayButton isSmaller secondary />
                    </div>
                  </div>

                  <p className="capitalize text-center text-white text-lg pt-3">
                    how to prepare salad
                  </p>
                </>
              }
            />
          </div>

          <VideoDrawer
            title="gourment good preparation & guidlines"
            video="https://www.youtube.com/embed/--MdohXec7M"
            component={<PlayButton haveText />}
          />

          <div>
            <VideoDrawer
              title="news of the week"
              video="https://www.youtube.com/embed/QmFT-L45i2w"
              component={
                <>
                  <div className="relative w-[300px] h-[177px]">
                    <Image
                      src="/images/video2.png"
                      alt="gourmet restaurant menu how one"
                      width={300}
                      height={177}
                      className="w-full"
                    />

                    <div className="place-self-center absolute top-0 bottom-0 left-0 right-0">
                      <PlayButton isSmaller secondary />
                    </div>
                  </div>

                  <p className="capitalize text-center text-white text-lg pt-3">
                    news of the week
                  </p>
                </>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preparation;
