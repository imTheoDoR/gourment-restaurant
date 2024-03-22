"use client";

import * as z from "zod";
import Image from "next/image";
import Title from "@/components/title";
import { IoCalendarClearOutline } from "react-icons/io5";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NewsletterSchema } from "@/form-schemas";
import { useEffect, useState, useTransition } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import formatDate from "@/lib/format-date";

const ComingSoon = () => {
  const [isPending, setTransition] = useTransition();
  const [timeLeft, setTimeLeft] = useState<{
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  } | null>(null);

  const form = useForm<z.infer<typeof NewsletterSchema>>({
    resolver: zodResolver(NewsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof NewsletterSchema>) => {
    setTransition(() => {
      console.log(values);
    });
  };

  // countdown
  const targetDate = "2024-05-30"; // from here you can set the countdown "year-month-day"

  // countdown functions
  const calculateTimeLeft = (targetDate: string) => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24))
          .toString()
          .padStart(2, "0"),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24)
          .toString()
          .padStart(2, "0"),
        minutes: Math.floor((difference / (1000 * 60)) % 60)
          .toString()
          .padStart(2, "0"),
        seconds: Math.floor((difference / 1000) % 60)
          .toString()
          .padStart(2, "0"),
      };
    }

    return timeLeft;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Update countdown
  useEffect(() => {
    const updateContdown = () => {
      const newTimeLeft = calculateTimeLeft(targetDate);
      setTimeLeft(newTimeLeft);
    };

    const timer = setInterval(updateContdown, 1000);

    updateContdown();

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-screen w-screen bg-soon bg-cover bg-center bg-no-repeat flex flex-col justify-between">
      <div className="container flex flex-col justify-center w-full pb-20">
        <Image
          src="/images/logo-coming.svg"
          alt="Gourmet Restaurant Logo"
          width={174}
          height={90}
          className="w-48 lg:w-72 pt-16 lg:pt-32 mx-auto"
          priority
        />

        <Title
          text="we are coming soon"
          className="text-yellow pt-10 text-center"
        />

        <div className="mt-10 mx-auto max-w-3xl w-full">
          <div className="flex items-center text-white text-2xl lg:text-3xl font-bold">
            <IoCalendarClearOutline className="w-10 lg:w-12 h-10 lg:h-12 bg-red text-white p-2 rounded-full mr-3" />
            {formatDate(targetDate)}
          </div>

          <div className="bg-[#474747] py-3 px-5 lg:px-20 border-b-[3px] border-red rounded-bl-[41px] rounded-tr-[41px] mt-5 min-h-[100px] flex flex-col lg:flex-row items-center justify-center">
            <span className="text-white text-2xl lg:text-3xl font-bold my-auto">
              we open in:
            </span>

            <div className="flex flex-wrap px-5 justify-center gap-3 ml-0 lg:ml-5 pt-3 lg:pt-0">
              <div className="bg-[#636161] text-white text-center py-2 px-5 min-w-20 w-1/3 lg:w-auto">
                <span className="font-bold text-4xl">
                  {timeLeft && timeLeft.days}
                </span>
                <p className="capitalize text-[14px] text-white/70">days</p>
              </div>
              <div className="bg-[#636161] text-white text-center py-2 px-5 min-w-20 w-1/3 lg:w-auto">
                <span className="font-bold text-4xl">
                  {timeLeft && timeLeft.hours}
                </span>
                <p className="capitalize text-[14px] text-white/70">hours</p>
              </div>
              <div className="bg-[#636161] text-white text-center py-2 px-5 min-w-20 w-1/3 lg:w-auto">
                <span className="font-bold text-4xl">
                  {timeLeft && timeLeft.minutes}
                </span>
                <p className="capitalize text-[14px] text-white/70">minutes</p>
              </div>
              <div className="bg-[#636161] text-white text-center py-2 px-5 min-w-20 w-1/3 lg:w-auto">
                <span className="font-bold text-4xl">
                  {timeLeft && timeLeft.seconds}
                </span>
                <p className="capitalize text-[14px] text-white/70">seconds</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray border-t border-white/30">
        <div className="container py-12 flex flex-col gap-10 lg:gap-0 lg:flex-row items-center justify-between max-w-max lg:max-w-7xl mx-auto">
          <div>
            <Title
              text="notify me when we launch"
              className="text-yellow !text-2xl"
            />

            <p className="text-white/70 pt-5 max-w-[350px]">
              Stay tuned for updates on our grand opening date, menu previews,
              and exclusive offers.
            </p>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex items-center px-5"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl className="w-[170px] lg:w-[400px]">
                      <Input
                        {...field}
                        placeholder="Enter your email"
                        type="email"
                        autoComplete="off"
                        disabled={isPending}
                        className="bg-[#58525C] border-white/30 text-white/70 placeholder:text-white/70 h-12 px-5 pr-10"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button variant="red" className="h-12 min-w-[180px] -ml-5">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
