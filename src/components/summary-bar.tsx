import SuggestionsIcon from "../icons/icon-suggestions.svg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";

export default function SummaryBar() {
  return (
    <section className="flex flex-row items-center gap-[27px] rounded-md bg-primary-dark-blue px-4 py-[0.875rem] pl-6">
      {/* SUGGESTIONS */}
      <div className="flex items-center gap-4">
        <SuggestionsIcon />

        <h2 className="text-heading-3 text-primary-white">6 Suggestions</h2>
      </div>

      {/* SELECT FORM */}
      <div className="relative text-primary-white">
        <Select>
          <SelectTrigger className="bg-transparent font-bold">
            <span className="font-normal">Sort by: </span>
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
        <Button>+ Add Feedback</Button>
      </div>
    </section>
  );
}
