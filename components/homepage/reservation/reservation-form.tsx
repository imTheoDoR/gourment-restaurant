"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { ReservationFormSchema } from "@/form-schemas";
import { Input } from "@/components/ui/input";
import { useState, useTransition } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "../../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../../ui/dialog";
import { BsCalendar2Plus, BsCalendarCheck, BsClock } from "react-icons/bs";
import { LuCalendarClock } from "react-icons/lu";

const ReservationForm = () => {
  const [isPending, setTransition] = useTransition();
  const [date, setDate] = useState<Date | undefined>(new Date());

  const form = useForm<z.infer<typeof ReservationFormSchema>>({
    resolver: zodResolver(ReservationFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      time: new Date(),
      date: date,
    },
  });

  const onSubmit = (values: z.infer<typeof ReservationFormSchema>) => {
    setTransition(() => {
      console.log(values);
    });
  };

  return (
    <div className="bg-white2 max-w-[400px] w-full border-b-[7px] border-[#FAE3C6]">
      <div className="bg-[#5D5965] text-center py-6">
        <h4 className="font-colus text-yellow text-lg">
          make online reservation
        </h4>
        <p className="capitalize text-white/70 font-light">
          submit information to place order
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-10 px-10 py-10 text-center"
        >
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Your name*"
                      type="text"
                      disabled={isPending}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Your email*"
                      type="email"
                      disabled={isPending}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Phone number*"
                      type="text"
                      disabled={isPending}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="flex flex-row justify-between space-x-2">
              {/* calendar */}
              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Dialog>
                        <DialogTrigger className="bg-black/20 hover:bg-white duration-300 text-gray px-5 py-1 flex items-center">
                          <BsClock className="w-5 h-5 mr-3" />
                          Select Time
                        </DialogTrigger>
                        <DialogContent>
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={setDate}
                          />
                        </DialogContent>
                      </Dialog>
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* time */}
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Dialog>
                        <DialogTrigger className="bg-black/20 hover:bg-white duration-300 text-gray px-5 py-1 flex items-center">
                          <BsCalendar2Plus className="w-5 h-5 mr-3" />
                          Select Date
                        </DialogTrigger>
                        <DialogContent>
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={setDate}
                          />
                        </DialogContent>
                      </Dialog>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>

          <Button
            type="submit"
            variant="reserve"
            className="text-white2 h-14 px-12 text-lg"
          >
            <BsCalendarCheck className="mr-3 w-6 h-6" />
            Reserve Today
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ReservationForm;
