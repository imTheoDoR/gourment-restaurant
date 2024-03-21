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

const ContactForm = () => {
  const [isPending, setTransition] = useTransition();

  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      guests: undefined,
      //   time: undefined,
      //   date: undefined,
      note: undefined,
      terms: undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof ContactFormSchema>) => {
    setTransition(() => {
      console.log(values);
      //   form.reset();
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
            <div className="flex flex-col flex-wrap justify-between gap-5 lg:flex-row">
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

              {/* form field 5 */}
              {/* <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem className="max-w-7xl lg:max-w-[230px] w-full">
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Time"
                        type="text"
                        disabled={isPending}
                        autoComplete="off"
                        className="bg-[#f0f0f0] rounded-md placeholder:text-[#615555] text-[#615555] border-transparent focus-visible:ring-red duration-300"
                      />
                    </FormControl>
                  </FormItem>
                )}
              /> */}

              {/* form field 6 */}
              {/* <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="max-w-7xl lg:max-w-[230px] w-full">
                    <FormControl>soon</FormControl>
                  </FormItem>
                )}
              /> */}
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
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />

                        <span className="ml-3 text-dark/50 text-sm">
                          Read our
                          <Link href="#terms and conditions">
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
