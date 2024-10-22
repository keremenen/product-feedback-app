import { Button } from "@/components/ui/button";
import { ChevronLeft, Plus } from "lucide-react";
import React from "react";

export default function RoadmapPage() {
  return (
    <main className="mx-auto max-w-[1110px]">
      {/* TOPBAR SECTION */}
      <section className="mt-[4.87rem] flex w-full items-center rounded-md bg-primary-dark-blue px-[2rem] py-[1.6875rem]">
        {/* NAVIGATION WITH TITLE */}
        <div className="flex flex-col items-start gap-y-1">
          <Button
            variant={"light"}
            size={"navigation"}
            className="bg-transparent px-0 text-primary-white"
          >
            <ChevronLeft />
            Go Back
          </Button>
          <h1 className="text-heading-1 text-white">Roadmap</h1>
        </div>

        <div className="ml-auto px-2">
          {/* BUTTON */}
          <Button className="text-heading-4 tracking-normal text-primary-white">
            <Plus />
            Add Feedback
          </Button>
        </div>
      </section>
      {/* ROADMAP SECTION */}
    </main>
  );
}
