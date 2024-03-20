"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { FaCheckCircle } from "react-icons/fa";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={className} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex flex-col">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 transition-all [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      <div className="flex items-center text-xl font-colus text-dark">
        <FaCheckCircle className="w-6 h-6 border-2 border-red text-red rounded-full p-px mr-3" />
        {children}
      </div>
      <ChevronDownIcon className="h-4 w-4 shrink-0 text-dark transition-transform duration-200 dark:text-neutral-400" />
    </AccordionPrimitive.Trigger>
    <div className="w-full h-px bg-[#D9D9D9] relative">
      <div className="w-1 h-1 rotate-45 bg-[#D9D9D9] absolute top-1/2 bottom-1/2 left-0 transform -translate-y-1/2" />
    </div>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-[16px] text-[#565454] data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-5", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
