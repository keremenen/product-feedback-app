import { Button } from "@/components/ui/button";
import LeftIcon from "@/icons/icon-arrow-left.svg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl pt-20">
      <div>
        <p>Headings</p>
        <p className="text-heading-1">Sed egestas ante et vulputate volutpat</p>
        <p className="text-heading-2">
          Vestibulum volutpat acus a ultrices sagittis
        </p>
        <p className="text-heading-3">
          Pellentesque a diam sit amet mi ullamcorper vehicula
        </p>
        <p className="font-med text-heading-4">
          Ut scelerisque hendrerit tellus. Integer sagittis
        </p>
      </div>
      <div className="max-w-[540px]">
        <p>Body</p>
        <p className="text-body-1 text-tertiary-orange">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
          hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
          vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
          laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor
          eu nibh. Nullam mollis.
        </p>
        <p className="rounded-lg text-body-2 text-primary-purple">
          Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
          luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing,
          commodo quis, gravida id, est. Sed lectus. Praesent elementum
          hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat,
          lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc
          sapien ornare nisl. Phasellus pede arcu
        </p>
        <p className="un text-body-3">
          Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
          luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing,
          commodo quis, gravida id, est. Sed lectus. Praesent elementum
          hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat,
          lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc
          sapien ornare nisl. Phasellus pede arcu
        </p>
      </div>
      <p>buttons</p>
      <div className="mb-8 flex h-11 w-auto justify-between rounded px-6 tracking-normal">
        <Button>Post Comment</Button>
        <Button variant={"secondary"}>Button 2</Button>
        <Button variant={"tertiary"}>Button 3</Button>
        <Button variant={"warning"}>Button 4</Button>
        <br />
      </div>
      <div className="flex justify-center pb-20">
        <Select>
          <SelectTrigger>
            <span className="font-normal">Sort by :</span>
            <SelectValue placeholder="" className="text-red-600" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Most Upvotes</SelectItem>
            <SelectSeparator />
            <SelectItem value="dark">Least Upvotes</SelectItem>
            <SelectSeparator />
            <SelectItem value="system">Most Comments</SelectItem>
            <SelectItem value="valuer">Least Comments</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="l h- mb-8 flex h-11 justify-around rounded px-6 tracking-normal">
        <Button>Button 1</Button>
        <Button variant={"secondary"}>Button 2</Button>
        <Button variant={"tertiary"}>Button 3</Button>
        <Button variant={"warning"}>Button 4</Button>
        <br />
        <Button variant={"navigation"}>
          <LeftIcon />
          Go Back
        </Button>
        <Button variant={"dark-navigation"}>
          {/* <div className="h-[8px] w-[4px]"> */}
          <LeftIcon className="h-[8px] w-[4px]" />
          {/* </div> */}
          Go Back
        </Button>
        <Button variant={"navigation"}>
          <div className="h-[8px] w-[4px]">
            <LeftIcon />
          </div>

          <span>Go Back</span>
        </Button>
      </div>
    </main>
  );
}
