import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeftIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function EditPage() {
  return (
    <main className="mx-auto mt-24 flex max-w-[540px] flex-col gap-y-6">
      <section className="mb-[4.6875rem] flex items-center justify-between">
        <Button variant={"light"} className="bg-transparent !px-0">
          <ChevronLeftIcon className="p-0" />
          Go Back
        </Button>
      </section>
      <section className="w-full bg-primary-white">
        {/* FORM */}
        <div>
          <div>
            <Label htmlFor="title">Feedback Title</Label>
            <p>Add a dark theme optione</p>
            <Input placeholder="Feedback Title" className="w-full" id="title" />
          </div>

          <div>
            <Label htmlFor="category">Category</Label>
            <p>Add a short, descriptive headline</p>
            <Select>
              <SelectTrigger className="rounded-[0.3125rem] text-body-3 font-normal">
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

          <div>
            <Label htmlFor="textarea">Detail</Label>
            <p>
              Include any specific comments on what should be improved, added,
              etc.
            </p>
            <Textarea id="textarea" />
          </div>
        </div>
      </section>
    </main>
  );
}
