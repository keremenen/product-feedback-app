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
          <div className="flex flex-col gap-y-1">
            <h2 className="text-heading-3">Planned (2)</h2>
            <p className="text-secondary-dark-grey">
              Ideas prioritized for research
            </p>
          </div>
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
