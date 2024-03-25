import * as z from "zod";

export const ReservationFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required!" }),
  email: z.string().email({ message: "Email is required!" }),
  phone: z.string().min(1, { message: "Phone number is requred!" }),
  date: z.date(),
});

export const ContactFormSchema = z.object({
  firstName: z.string().min(1, { message: "First Name is required!" }),
  lastName: z.string().min(1, { message: "Last Name is required!" }),
  email: z
    .string()
    .email()
    .min(1, { message: "An email address is required." }),
  guests: z.string().transform((value) => parseInt(value, 10)),
  date: z.date(),
  note: z.string(),
  terms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions." }),
  }),
});

export const NewsletterSchema = z.object({
  email: z
    .string()
    .email()
    .min(1, { message: "An email address is required." }),
});
