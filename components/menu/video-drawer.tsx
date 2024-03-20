"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const VideoDrawer = ({ title, video, component }: VideoDrawerProps) => {
  return (
    <Drawer>
      <DrawerTrigger>{component}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-center pt-10 pb-5 lg:pt-20 text-2xl text-white2 capitalize">
            {title}
          </DrawerTitle>
          <DrawerDescription className="place-self-center">
            <iframe
              src={video}
              title="The Best Salad You&#39;ll Ever Make (Restaurant-Quality) | Epicurious 101"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full lg:w-[768px] h-full lg:h-[480px]"
            ></iframe>
          </DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default VideoDrawer;
