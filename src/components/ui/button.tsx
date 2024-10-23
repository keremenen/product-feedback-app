import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "flex items-center justify-center gap-3 whitespace-nowrap rounded-[10px] text-[0.813rem] md:text-[0.875rem] font-bold ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 tracking-normal",
  {
    variants: {
      variant: {
        default: "bg-[#AD1FEA] text-[#F2F4FE] hover:bg-[#C75AF6]",
        secondary: "bg-[#4661E6] text-[#F2F4FE] hover:bg-[#7C91F9]",
        tertiary: "bg-[#3A4374] text-[#F2F4FE] hover:bg-[#656EA3]",
        warning: "bg-[#D73737] text-[#F2F4FE] hover:bg-[#E98888]",
        light: "bg-primary-white text-[#647196] hover:underline",
        dark: "bg-[#373F68] text-primary-white hover:underline",
      },
      size: {
        default: "h-10 md:h-[44px] px-4 md:px-6",
        medium: "h-[53px] px-[38px]",
        navigation: "h-5 px-1",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  active?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({
            variant,
            size,
            className,
          }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
