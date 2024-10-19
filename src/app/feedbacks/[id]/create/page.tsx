import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import BackNavigation from "@/components/back-navigation";
import FormWrapper from "@/components/form-wrapper";

export default function CreatePage() {
  return (
    <main className="mx-auto mt-24 flex max-w-[540px] flex-col">
      <BackNavigation />
      <FormWrapper>
        <div className="bg-purple-gradient absolute -top-7 flex size-14 items-center justify-center rounded-full">
          <Plus className="size-7 text-white" />
        </div>
        {/* HEADING */}
        <h1 className="mb-10 text-heading-1">Create New Feedback</h1>

        {/* FORM */}
        <div>
          <div className="mb-6 flex flex-col gap-4">
            <div>
              <Label htmlFor="title">Feedback Title</Label>
              <p className="text-heading-4 font-normal tracking-normal text-secondary-dark-grey">
                Add a short, descriptive headline
              </p>
            </div>
            <Input
              placeholder="Feedback Title"
              className="w-full placeholder:text-secondary-dark-blue"
              id="title"
            />
          </div>

          <div className="mb-5 flex flex-col gap-4">
            <div>
              <Label htmlFor="title">Category</Label>
              <p className="text-heading-4 font-normal tracking-normal text-secondary-dark-grey">
                Choose a category for your feedback
              </p>
            </div>
            <Select>
              <SelectTrigger className="h-12 text-body-3">
                <SelectValue placeholder="Planned" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="suggestion">Suggestion</SelectItem>
                <SelectSeparator />
                <SelectItem value="planned">Planned</SelectItem>
                <SelectSeparator />
                <SelectItem value="in-progress">In-Progress</SelectItem>
                <SelectItem value="live">Live</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mb-8 flex flex-col gap-4">
            <div>
              <Label htmlFor="title">Feedback Detail</Label>
              <p className="text-heading-4 font-normal tracking-normal text-secondary-dark-grey">
                Include any specific comments on what should be improved, added,
                etc.
              </p>
            </div>
            <Textarea id="textarea" className="min-h-24" />
          </div>
          <div className="flex justify-end gap-x-4">
            <Button variant={"dark"}>Cancel</Button>
            <Button>Add Feedback</Button>
          </div>
        </div>
      </FormWrapper>
    </main>
  );
}
