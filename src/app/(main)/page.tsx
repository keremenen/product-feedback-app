import { Button } from "@/components/ui/button";

import { ChevronUpIcon } from "lucide-react";
import Image from "next/image";
import commentIcon from "../../icons/icon-comments.svg";

import Logo from "@/components/logo";
import Navigation from "@/components/navigation";
import Roadmap from "@/components/roadmap";
import SummaryBar from "@/components/summary-bar";

export default function MainPage() {
  return (
    <main className="mx-auto mt-24 flex max-w-[1110px] flex-row gap-x-[1.875rem]">
      <header className="flex w-[255px] flex-col gap-6">
        <Logo />

        <Navigation />

        <Roadmap />
      </header>
      <section className="flex flex-grow flex-col gap-6">
        <SummaryBar />
        <section className="flex flex-col gap-5">
          <section className="flex flex-row gap-10 rounded-md bg-primary-white px-8 py-7">
            <Button variant={"badge"} size={"icon-badge"}>
              <ChevronUpIcon />
              <span className="font-bold text-secondary-dark-blue">112</span>
            </Button>
            <div>
              <h3 className="mb-1 text-heading-3">Add tags for solutions</h3>
              <p className="mb-3 text-body-1 text-secondary-dark-grey">
                Easier to search for solutions based on a specific stack.
              </p>
              <Button variant={"badge"} size={"badge"}>
                Enhancement
              </Button>
            </div>
            <div className="ml-auto flex w-11 items-center gap-3">
              <Image src={commentIcon} alt="comment icon" />
              <span className="text-body-1 font-bold">2</span>
            </div>
          </section>
          <section className="flex flex-row gap-10 rounded-md bg-primary-white px-8 py-7">
            <Button variant={"badge"} size={"icon-badge"}>
              <ChevronUpIcon />
              <span className="font-bold text-secondary-dark-blue">99</span>
            </Button>
            <div>
              <h3 className="mb-1 text-heading-3">Add a dark theme option</h3>
              <p className="mb-3 text-body-1 text-secondary-dark-grey">
                It would help people with light sensitivities and who prefer
                dark mode.
              </p>
              <Button variant={"badge"} size={"badge"}>
                Feature
              </Button>
            </div>
            <div className="ml-auto flex w-11 items-center gap-3">
              <Image src={commentIcon} alt="comment icon" />
              <span className="text-body-1 font-bold">4</span>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
}
