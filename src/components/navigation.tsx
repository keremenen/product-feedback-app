import Badge from "./badge";

export default function Navigation() {
  return (
    <nav className="w-full rounded-md bg-primary-white p-6">
      <ul className="flex flex-wrap gap-x-2 gap-y-[0.875rem]">
        <li>
          <Badge isActive>All</Badge>
        </li>
        <li>
          <Badge>UI</Badge>
        </li>
        <li>
          <Badge>UX</Badge>
        </li>
        <li>
          <Badge>Enhancement</Badge>
        </li>
        <li>
          <Badge>Bug</Badge>
        </li>
        <li>
          <Badge>Feature</Badge>
        </li>
      </ul>
    </nav>
  );
}
