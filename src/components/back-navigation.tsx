import { ChevronLeftIcon } from "lucide-react";
import { Button } from "./ui/button";

export default function BackNavigation() {
  return (
    <section className="mb-[4.0625rem] flex items-center justify-between">
      <Button variant={"light"} size={"navigation"} className="bg-transparent">
        <ChevronLeftIcon className="p-0" />
        Go Back
      </Button>
    </section>
  );
}
