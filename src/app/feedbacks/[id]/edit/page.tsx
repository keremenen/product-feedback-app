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
import FormLogo from "@/components/form-logo";
import FormTitle from "@/components/form-title";
import FormControls from "@/components/form-controls";
import FormBody from "@/components/form-body";

export default function EditPage() {
  return (
    <main className="mx-auto mt-24 flex max-w-[540px] flex-col">
      <BackNavigation />
      <FormWrapper>
        <FormLogo>
          <Plus className="size-7 text-white" />
        </FormLogo>

        <FormTitle>Editing ‘Add a dark theme option’</FormTitle>

        {/* FORM */}
        <FormBody>
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

          <div className="flex flex-col gap-4">
            <div>
              <Label htmlFor="title">Feedback Detail</Label>
              <p className="text-heading-4 font-normal tracking-normal text-secondary-dark-grey">
                Include any specific comments on what should be improved, added,
                etc.
              </p>
            </div>
            <Textarea id="textarea" className="min-h-24" />
          </div>
        </FormBody>
        <FormControls>
          <Button variant={"dark"}>Cancel</Button>
          <Button>Add Feedback</Button>
        </FormControls>
      </FormWrapper>
    </main>
  );
}
