import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-300",
  {
    variants: {
      variant: {
        default: "rounded-full",
        red: "bg-red text-white hover:bg-green shadow-md",
        link: "text-neutral-900 underline-offset-4 hover:underline",
        btnHead:
          "rounded-full bg-gray/30 border border-orange2 text-orange font-bold hover:bg-gray/50",
        reserve: "bg-red hover:bg-orange3 rounded-full",
      },
      size: {
        default: "h-9 px-10 py-2",
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-10",
        lg: "h-12 px-10",
        book: "h-12 px-8 py-5 text-lg",
        reserve: "px-16 py-4 text-lg",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
