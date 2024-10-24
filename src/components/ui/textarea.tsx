import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-none bg-[#F7F8FD] px-6 py-4 text-[0.9375rem] ring-offset-white transition duration-150 ease-in-out placeholder:text-[#8C92B3] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#4661E6] disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
