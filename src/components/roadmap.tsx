const RoadMapEntries = [
  {
    id: 1,
    color: "text-tertiary-orange",
    status: "planned",
    count: 2,
  },
  {
    id: 2,
    color: "text-primary-purple",
    status: "in-progress",
    count: 3,
  },
  {
    id: 3,
    color: "text-tertiary-sky",
    status: "live",
    count: 1,
  },
];

export default function Roadmap() {
  return (
    <div className="rounded-md bg-primary-white p-6 pt-[1.1875rem]">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-heading-3 text-secondary-dark-blue">Roadmap</h3>
        <a
          href="#"
          className="text-body-3 text-primary-blue underline underline-offset-2"
        >
          View
        </a>
      </div>
      <ul className="space-y-2">
        {RoadMapEntries.map((entry) => (
          <RoadmapEntry
            key={entry.id}
            color={entry.color}
            status={entry.status}
            count={entry.count}
          />
        ))}
      </ul>
    </div>
  );
}

type RoadmapEntryProps = {
  color: string;
  status: string;
  count: number;
};

function RoadmapEntry({ color, status, count }: RoadmapEntryProps) {
  return (
    <li className={`flex items-start ${color}`}>
      <span className="max-w-2 text-lg leading-none">●</span>
      <div className="ml-4 inline-block text-body-1 font-normal capitalize text-secondary-dark-grey">
        {status}
      </div>
      <div className="ml-auto inline-block text-body-1 font-bold text-secondary-dark-grey">
        {count}
      </div>
    </li>
  );
}
