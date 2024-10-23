import { cn } from "@/lib/utils";
import ArrowUpIcon from "@/icons/icon-arrow-up.svg";

type InteractiveButtonProps = {
  children: string;
  isVertical?: boolean;
  isActive?: boolean;
};

export default function InteractiveButton({
  children,
  isVertical,
  isActive,
}: InteractiveButtonProps) {
  return (
    <button
      className={cn(
        "text-text-secondary-dark-blue group flex h-[3.313rem] w-[2.5rem] flex-col items-center justify-center gap-y-[0.313rem] rounded-[0.625rem] bg-secondary-white pt-[0.25rem] text-[0.813rem] font-bold tracking-[-0.011rem] outline-none transition-colors duration-100 ease-in-out hover:bg-tertiary-white focus:bg-tertiary-white",
        {
          "h-[2.5rem] w-[4.313rem] flex-row gap-x-[0.5rem] pt-0": isVertical,
          "bg-primary-blue text-primary-white hover:text-secondary-dark-blue":
            isActive,
        },
      )}
    >
      <ArrowUpIcon
        class={cn(
          "text-primary-blue transition-colors duration-100 ease-in-out",
          {
            "text-primary-white group-hover:text-primary-blue": isActive,
          },
        )}
      />
      <span>{children}</span>
    </button>
  );
}
