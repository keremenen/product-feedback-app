import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "flex items-center justify-center gap-x-4 rounded-[10px] text-[14px] font-bold ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 tracking-normal h-[44px] w-[158px] pt-[3px]",
  {
    variants: {
      variant: {
        default: "bg-primary-purple text-secondary-white hover:bg-[#C75AF6]",
        secondary: "bg-primary-blue text-secondary-white hover:bg-[#7C91F9]",
        tertiary:
          "bg-secondary-dark-blue text-secondary-white hover:bg-[#656EA3]",
        warning: "bg-primary-red text-secondary-white hover:bg-[#E98888]",

        navigation:
          "w-auto h-[20px] bg-transparent text-[#647196] hover:underline",
        "dark-navigation":
          "h-[53px] pb-[5px] bg-[#373F68] text-primary-white hover:underline leading-4",
      },
    },
    defaultVariants: {
      variant: "default",
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
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({
            variant,

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
