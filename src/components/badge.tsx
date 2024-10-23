import { cn } from "@/lib/utils";
import React from "react";

type BadgeProps = {
  children: string;
  isActive?: boolean;
};

export default function Badge({ children, isActive }: BadgeProps) {
  return (
    <button
      className={cn(
        "hover:bg-tertiary-blue focus:bg-tertiary-blue h-[1.875rem] rounded-[0.625rem] bg-secondary-grey px-4 text-[0.8125rem] font-semibold tracking-normal text-primary-blue transition-colors duration-200 ease-out",
        {
          "bg-primary-blue text-primary-white hover:text-primary-blue focus:text-primary-blue":
            isActive,
        },
      )}
    >
      {children}
    </button>
  );
}
