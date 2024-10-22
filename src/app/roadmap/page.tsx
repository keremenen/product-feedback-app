import InteractiveButton from "@/components/interactive-button";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Plus } from "lucide-react";
import React from "react";

export default function RoadmapPage() {
  return (
    <main className="mx-auto max-w-[1110px]">
      {/* TOPBAR SECTION */}
      <section className="mb-12 mt-[4.87rem] flex w-full items-center rounded-md bg-primary-dark-blue px-[2rem] py-[1.6875rem]">
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
      <section className="flex flex-row justify-between gap-x-[1.875rem]">
        <section className="max-w-[21.875rem] basis-1/3">
          <div className="mb-8 flex flex-col gap-y-1">
            <h2 className="text-heading-3">Planned (2)</h2>
            <p className="text-secondary-dark-grey">
              Ideas prioritized for research
            </p>
          </div>

          <section className="relative w-full overflow-hidden rounded-[5px] bg-primary-white p-8">
            <div className="absolute left-0 top-0 h-[0.375rem] w-full overflow-hidden bg-tertiary-orange" />

            <div className="mb-2 flex items-center gap-x-4">
              <div className="size-2 rounded-full bg-tertiary-orange" />
              <p className="text-secondary-dark-grey">Planned</p>
            </div>
            <h3 className="mb-1 text-heading-3">More comprehensive reports</h3>
            <p className="mb-4 text-secondary-dark-grey">
              It would be great to see a more detailed breakdown of solutions.
            </p>
            <Button variant={"badge"} size={"badge"} className="mb-4">
              Feature
            </Button>
            <div>
              <InteractiveButton isVertical>123</InteractiveButton>
              <br />
              <InteractiveButton>99</InteractiveButton>
            </div>
          </section>
        </section>

        <section className="max-w-[21.875rem] basis-1/3">
          <div className="flex flex-col gap-y-1">
            <h2 className="text-heading-3">In-Progress (3)</h2>
            <p className="text-secondary-dark-grey">
              Currently being developed
            </p>
          </div>
        </section>

        <section className="max-w-[21.875rem] basis-1/3">
          <div className="flex flex-col gap-y-1">
            <h2 className="text-heading-3">Live (1)</h2>
            <p className="text-secondary-dark-grey">Released features</p>
          </div>
        </section>
      </section>
    </main>
  );
}
