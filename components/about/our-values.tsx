"use client";

import Title from "@/components/title";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const OurValues = () => {
  return (
    <div className="bg-white2 py-32">
      <div className="container">
        <Title text="our values" className="text-center pb-5" isDark />
        <p className="text-center text-gray text-xl max-w-[300px] mx-auto">
          Health food to live a healthier life in the future
        </p>

        <div className="grid gap-5 lg:gap-0 grid-cols-1 lg:grid-cols-2 items-center justify-center mt-10 lg:mt-0">
          <div className="place-self-center">
            <Image
              src="/images/about/our-values.png"
              alt="gourmet restaurant our value"
              width={546}
              height={595}
              className="w-auto lg:w-[540px] max-w-[540px] mx-auto"
            />
          </div>

          <Accordion
            defaultValue="excellence"
            type="single"
            collapsible
            className="max-w-xl w-full mx-auto"
          >
            <AccordionItem value="excellence">
              <AccordionTrigger>Excellence</AccordionTrigger>
              <AccordionContent>
                At Gourmet restaurant, we are committed to excellence in
                everything we do. From the quality of our ingredients to the
                presentation of our dishes and the service we provide, we strive
                for nothing less than perfection. Our dedication to excellence
                ensures that every guest experience is memorable and
                exceptional.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="hospitality">
              <AccordionTrigger>Hospitality</AccordionTrigger>
              <AccordionContent>
                At Gourmet restaurant, we are committed to excellence in
                everything we do. From the quality of our ingredients to the
                presentation of our dishes and the service we provide, we strive
                for nothing less than perfection. Our dedication to excellence
                ensures that every guest experience is memorable and
                exceptional.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="sustainability">
              <AccordionTrigger>Sustainability</AccordionTrigger>
              <AccordionContent>
                At Gourmet restaurant, we are committed to excellence in
                everything we do. From the quality of our ingredients to the
                presentation of our dishes and the service we provide, we strive
                for nothing less than perfection. Our dedication to excellence
                ensures that every guest experience is memorable and
                exceptional.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
