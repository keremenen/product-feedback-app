import { Button } from "./ui/button";

export default function Navigation() {
  return (
    <nav className="w-full rounded-md bg-primary-white p-6">
      <ul className="flex flex-wrap gap-x-2 gap-y-[0.875rem]">
        <li>
          <Button variant={"badge-active"} size={"badge"}>
            All
          </Button>
        </li>
        <li>
          <Button variant={"badge"} size={"badge"}>
            UI
          </Button>
        </li>
        <li>
          <Button variant={"badge"} size={"badge"}>
            UX
          </Button>
        </li>
        <li>
          <Button variant={"badge"} size={"badge"}>
            Enhancement
          </Button>
        </li>
        <li>
          <Button variant={"badge"} size={"badge"}>
            Bug
          </Button>
        </li>
        <li>
          <Button variant={"badge"} size={"badge"}>
            Feature
          </Button>
        </li>
      </ul>
    </nav>
  );
}
