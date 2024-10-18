import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronUpIcon } from "lucide-react";
import Image from "next/image";
import commentIcon from "../../icons/icon-comments.svg";
import plusIcon from "../../icons/icon-plus.svg";
import suggestionIcon from "../../icons/icon-suggestions.svg";
import Logo from "@/components/logo";
import Navigation from "@/components/navigation";
import Roadmap from "@/components/roadmap";

export default function MainPage() {
  return (
    <main className="mx-auto mt-24 flex max-w-[1110px] flex-row gap-x-[1.875rem]">
      <header className="flex w-[255px] flex-col gap-6">
        <Logo />

        <Navigation />

        <Roadmap />
      </header>
      <section className="flex flex-grow flex-col gap-6">
        <section>
          <div className="flex flex-row items-center gap-[27px] rounded-md bg-primary-dark-blue px-4 py-[0.875rem] pl-6">
            {/* SUGGESTIONS */}
            <div className="flex items-center gap-4">
              <Image src={suggestionIcon} alt="suggestion icon" />

              <h2 className="text-heading-3 text-primary-white">
                6 Suggestions
              </h2>
            </div>

            {/* SELECT FORM */}
            <div className="relative text-primary-white">
              <Select>
                <SelectTrigger className="border-none bg-transparent focus:ring-transparent">
                  <span className="font-normal">Sort by :</span>
                  <SelectValue placeholder="Most Upvotes" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Most Upvotes</SelectItem>
                  <SelectSeparator />
                  <SelectItem value="dark">Least Upvotes</SelectItem>
                  <SelectSeparator />
                  <SelectItem value="system">Most Comments</SelectItem>
                  <SelectSeparator />
                  <SelectItem value="valuer">Least Comments</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* BUTTON */}
            <div className="ml-auto">
              <Button variant={"default"}>
                <Image src={plusIcon} alt="plus icon" />
                Add Feedback
              </Button>
            </div>
          </div>
        </section>
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
