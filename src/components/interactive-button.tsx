import { cn } from "@/lib/utils";
import ArrowUpIcon from "@/icons/icon-arrow-up.svg";

type InteractiveButtonProps = {
  children: React.ReactNode;
  isVertial: boolean;
  isActive: boolean;
};

export default function InteractiveButton({
  children,
  isVertial = false,
  isActive = false,
}: InteractiveButtonProps) {
  return (
    <button
      className={cn(
        "flex-col bg-[#F2F4FE] hover:bg-[#CFD7FF] focus:bg-[#CFD7FF]",
        {
          "flex-row": isVertial,
          "bg-[#4661E6]": isActive,
        },
      )}
    >
      <ArrowUpIcon className="h-4 w-4" />
      {children}
    </button>
  );
}
