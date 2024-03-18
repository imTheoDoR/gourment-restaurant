import * as z from "zod";

export const ReservationFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required!" }),
  email: z.string().email({ message: "Email is required!" }),
  phone: z.string().min(1, "Phone number is requred!"),
  time: z.date(),
  date: z.date(),
});
