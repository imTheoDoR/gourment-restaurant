"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormSchema } from "@/form-schemas";
import { useState, useTransition } from "react";
import { Textarea } from "@/components/ui/textarea";

import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { LuCalendarClock } from "react-icons/lu";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { BsCalendar2Plus } from "react-icons/bs";
import { format } from "date-fns";
import { TimePickerWrapper } from "../time-picker-wrapper";
import { Separator } from "../ui/separator";
import { Calendar } from "../ui/calendar";
import { toast } from "../ui/use-toast";

const ContactForm = () => {
  const [isPending, setTransition] = useTransition();

  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      guests: 0,
      date: new Date(),
      note: "",
      terms: undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof ContactFormSchema>) => {
    setTransition(() => {
      toast({
        title: "Your sumitted data:",
        description: <pre>{JSON.stringify(values, null, 2)}</pre>,
      });

      // reset the form after submit
      form.reset();
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-xl border-t-[8px] border-yellow rounded-t-2xl min-h-[300px] p-5 lg:p-10 -mt-80">
      {/* title */}
      <div className="w-full flex flex-row justify-center items-center pt-5 pb-8 px-10">
        {/* line left */}
        <div className="max-w-[100px] w-full h-px bg-white relative hidden lg:block">
          <div className="w-1 h-1 rotate-45 bg-white absolute top-1/2 bottom-1/2 right-0 transform -translate-y-1/2" />
        </div>

        {/* description */}
        <span className="font-colus text-white text-2xl tracking-wide mx-0 lg:mx-5 text-center">
          reserve your table today
        </span>

        {/* line right */}
        <div className="max-w-[100px] w-full h-px bg-white relative hidden lg:block">
          <div className="w-1 h-1 rotate-45 bg-white absolute top-1/2 bottom-1/2 left-0 transform -translate-y-1/2" />
        </div>
      </div>

      {/* form */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="bg-[#FCF9F3] p-10 border-t-[6px] border-yellow"
        >
          <div className="space-y-4">
            <div className="flex flex-col flex-wrap gap-5 lg:flex-row">
              {/* form field 1 */}
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="max-w-7xl lg:max-w-[230px] w-full">
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="First Name"
                        type="text"
                        disabled={isPending}
                        autoComplete="off"
                        className="bg-[#f0f0f0] rounded-md placeholder:text-[#615555] text-[#615555] border-transparent focus-visible:ring-red duration-300"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* form field 2 */}
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="max-w-7xl lg:max-w-[230px] w-full">
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Last Name"
                        type="text"
                        disabled={isPending}
                        autoComplete="off"
                        className="bg-[#f0f0f0] rounded-md placeholder:text-[#615555] text-[#615555] border-transparent focus-visible:ring-red duration-300"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* form field 3 */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="max-w-7xl lg:max-w-[230px] w-full">
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Email Address"
                        type="email"
                        disabled={isPending}
                        autoComplete="off"
                        className="bg-[#f0f0f0] rounded-md placeholder:text-[#615555] text-[#615555] border-transparent focus-visible:ring-red duration-300"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* form field 4 */}
              <FormField
                control={form.control}
                name="guests"
                render={({ field }) => (
                  <FormItem className="max-w-7xl lg:max-w-[230px] w-full">
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Number of guests"
                        value={field.value === 0 ? "" : field.value}
                        type="number"
                        disabled={isPending}
                        autoComplete="off"
                        min={0}
                        className="bg-[#f0f0f0] rounded-md placeholder:text-[#615555] text-[#615555] border-transparent focus-visible:ring-red duration-300"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* form field 4 */}
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="max-w-7xl lg:max-w-[230px] w-full">
                    <Popover>
                      <FormControl>
                        <PopoverTrigger asChild>
                          <Button className="bg-[#f0f0f0] rounded-md placeholder:text-[#615555] text-[#615555] border-transparent focus-visible:ring-red duration-300 w-full">
                            <BsCalendar2Plus className="w-5 h-5 mr-3 -ml-3 flex-shrink-0" />
                            {field.value
                              ? format(field.value, "PPP - HH:mm")
                              : "Pick a date"}
                          </Button>
                        </PopoverTrigger>
                      </FormControl>

                      <PopoverContent className="border border-red/10 w-full bg-white2/50 backdrop-blur-3xl">
                        <h4 className="mb-3 font-semibold text-sm text-dark/70 text-center">
                          Choose a date
                        </h4>
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          initialFocus
                        />

                        <Separator className="bg-dark/20 mt-5 mb-3" />

                        <div className="flex flex-col items-center justify-center">
                          <h4 className="mb-3 font-semibold text-sm text-dark/70">
                            Choose a hour
                          </h4>
                          <TimePickerWrapper
                            setDate={field.onChange}
                            date={field.value}
                          />
                        </div>
                      </PopoverContent>
                    </Popover>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* note field */}
            <FormField
              control={form.control}
              name="note"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Add a note"
                      className="bg-[#f0f0f0] rounded-md p-3 placeholder:text-[#615555] text-[#615555] border-transparent focus-visible:ring-red duration-300 min-h-[150px]"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* checkbox & sumit button  */}
            <div className="flex flex-col lg:flex-row justify-between">
              {/* checkbox */}
              <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex items-center">
                        <Checkbox
                          checked={field.value === true}
                          onCheckedChange={(checked) =>
                            field.onChange(checked ? true : undefined)
                          }
                        />

                        <span className="ml-3 text-dark/50 text-sm">
                          Read our
                          <Link
                            href="#terms-and-conditions"
                            className="text-brown"
                          >
                            {" "}
                            terms and conditions
                          </Link>
                        </span>
                      </div>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* submit button */}
              <Button
                type="submit"
                variant="reserve"
                className="text-white2 drop-shadow-lg text-lg h-14 mt-5"
              >
                <LuCalendarClock className="mr-3 w-8 h-8" />
                Reserve Now
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
