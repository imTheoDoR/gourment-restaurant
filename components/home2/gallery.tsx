"use client";

import Title from "@/components/title";
import { gallery } from "@/data/gallery";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import PlayButton from "../menu/play-button";

const GourmetGallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<GalleryProps | null>(null);

  // handler for opening the lightbox
  const openLightbox = (item: GalleryProps) => {
    setSelectedItem(item);
    setLightboxOpen(true);
  };

  // handler for closing the lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedItem(null);
  };

  return (
    <section className="bg-white2 py-20 lg:py-32">
      <div className="container">
        <Title text="photo gallery" className="text-dark text-center pb-3" />
        <p className="text-[#706767] text-center text-xl">
          See our best moments
        </p>

        <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center mt-20 gap-3">
          {gallery.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => openLightbox(item as GalleryProps)}
            >
              {item.type === "image" ? (
                <div className="relative h-[360px] w-full group">
                  <div className="bg-gradient-to-t from-red to-transparent z-50 w-full h-full absolute opacity-0 group-hover:opacity-100 duration-300 flex justify-center items-center">
                    <div className="w-24 h-24 bg-red flex items-center justify-center rounded-full text-white p-1 capitalize">
                      see photo
                    </div>
                  </div>
                  <Image
                    src={item.src}
                    alt="Gallery Item"
                    width={390}
                    height={362}
                    className="h-[360px] w-full"
                  />
                </div>
              ) : (
                <div className="relative h-[360px] w-full group">
                  <div className="bg-[#0E121D]/70 z-50 w-full h-full absolute opacity-0 group-hover:opacity-100 duration-300 flex justify-center items-center">
                    <PlayButton isSmaller />
                  </div>

                  <Image
                    src={item.prevImage || ""}
                    alt="Gallery Item"
                    width={390}
                    height={362}
                    className="h-[360px] w-full"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {lightboxOpen && (
          <div className="fixed inset-0 bg-dark/20 backdrop-blur-3xl w-screen h-screen z-50 flex justify-center items-center overflow-hidden">
            <div className="p-4">
              {selectedItem?.type === "image" ? (
                <Image
                  src={selectedItem.src}
                  alt="lightbox image"
                  width={1024}
                  height={768}
                  className="p-0 lg:p-10 w-[300px] lg:w-full"
                />
              ) : (
                <iframe
                  src={selectedItem?.src || ""}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-[400px] lg:w-[1024px] h-[300px] lg:h-[768px]"
                ></iframe>
              )}

              <Button
                className="absolute top-5 left-5"
                variant="red"
                onClick={closeLightbox}
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GourmetGallery;
