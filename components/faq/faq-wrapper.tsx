"use client";

import Image from "next/image";
import Title from "@/components/title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/data/faq";

const FAQWrapper = () => {
  return (
    <section className="bg-white2/50 py-20 lg:py-32">
      <div className="max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-20 mx-auto items-center px-5 lg:px-0">
        <div>
          <Title
            text="explore our frequently asked questions"
            className="text-dark !text-4xl"
          />

          <p className="text-dark/70 max-w-lg pt-10">
            Discover answers to commonly asked questions about our Gourmet
            restaurant. From reservation procedures and menu options to special
            events and contact details, find all the information you need to
            plan your dining experience with us.
          </p>

          <Image
            src="/images/logo-dark.svg"
            alt="gourmet restaurant logo dark"
            width={400}
            height={211}
            className="w-full max-w-[300px] lg:max-w-[400px] mx-auto pt-10 lg:pt-16"
          />
        </div>

        <Accordion
          defaultValue="item-2"
          type="single"
          collapsible
          className="max-w-xl w-full mx-auto"
        >
          {faqData.map((faq, index) => (
            <AccordionItem value={`item-${index + 1}`} key={index}>
              <AccordionTrigger>{faq.title}</AccordionTrigger>
              <AccordionContent>{faq.response}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQWrapper;
