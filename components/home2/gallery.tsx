"use client";

import Title from "@/components/title";
import { gallery } from "@/data/gallery";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";

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
                <Image
                  src={item.src}
                  alt="Gallery Item"
                  width={390}
                  height={362}
                  className="h-[360px] w-full"
                />
              ) : (
                <Image
                  src={item.prevImage || ""}
                  alt="Gallery Item"
                  width={390}
                  height={362}
                  className="h-[360px] w-full"
                />
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
