"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { ReservationFormSchema } from "@/form-schemas";
import { Input } from "@/components/ui/input";
import { useTransition } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "../../ui/button";
import { BsCalendar2Plus, BsCalendarCheck, BsClock } from "react-icons/bs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { TimePickerWrapper } from "@/components/time-picker-wrapper";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";

const ReservationForm = () => {
  const [isPending, setTransition] = useTransition();

  const form = useForm<z.infer<typeof ReservationFormSchema>>({
    resolver: zodResolver(ReservationFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: new Date(),
    },
  });

  const onSubmit = (values: z.infer<typeof ReservationFormSchema>) => {
    setTransition(() => {
      toast({
        title: "Your sumitted data:",
        description: <pre>{JSON.stringify(values, null, 2)}</pre>,
      });

      // reset the form after submit
      form.reset();
      form.trigger();
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

                  <FormMessage />
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

                  <FormMessage />
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
                      type="tel"
                      inputMode="decimal"
                      disabled={isPending}
                      onChange={(e) => {
                        const value = e.target.value.replace(/[^0-9]/g, "");
                        field.onChange(value);
                      }}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <Popover>
                    <FormControl>
                      <PopoverTrigger asChild>
                        <Button className="bg-dark/20 w-full rounded-none text-dark/50 flex items-center">
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
