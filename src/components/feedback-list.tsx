import { Button } from "@/components/ui/button";
import { ChevronUpIcon } from "lucide-react";
import commentIcon from "../icons/icon-comments.svg";
import plusIcon from "../icons/icon-plus.svg";
import emptyIllustration from "../icons/illustration-empty.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";

const FeedbackListFromAPI = [
  {
    id: 1,
    title: "Add tags for solutions",
    category: "Enhancement",
    description: "Easier to search for solutions based on a specific stack.",
    comments: 2,
    upvotes: 112,
  },
  {
    id: 2,
    title: "Add a dark theme option",
    category: "Feature",
    description:
      "It would help people with light sensitivities and who prefer dark mode.",
    comments: 4,
    upvotes: 99,
  },
  {
    id: 3,
    title: "Q&A within the challenge hubs",
    category: "Feature",
    description: "Challenge-specific Q&A would make for easy reference.",
    comments: 1,
    upvotes: 65,
  },
  {
    id: 4,
    title: "Allow image/video upload to feedback",
    category: "Enhancement",
    description: "Images and screencasts can enhance comments on solutions.",
    comments: 2,
    upvotes: 51,
  },
  {
    id: 5,
    title: "Ability to follow others",
    category: "Feature",
    description: "Stay updated on comments and solutions other people post.",
    comments: 3,
    upvotes: 42,
  },
  {
    id: 6,
    title: "Preview images not loading",
    category: "Bug",
    description:
      "Challenge preview images are missing when you apply a filter..",
    comments: 0,
    upvotes: 3,
  },
];

export default function FeedbackList() {
  return (
    <section className="flex flex-col gap-5">
      {FeedbackListFromAPI ? (
        FeedbackListFromAPI.map((feedback) => (
          <FeedbackSingleItem
            key={feedback.id}
            title={feedback.title}
            category={feedback.category}
            description={feedback.description}
            comments={feedback.comments}
            upvotes={feedback.upvotes}
          />
        ))
      ) : (
        <FeedbackEmptyPlaceholder />
      )}
    </section>
  );
}

type FeedbackSingleItemProps = {
  title: string;
  category: string;
  description: string;
  comments: number;
  upvotes: number;
};

function FeedbackSingleItem({
  title,
  category,
  description,
  comments,
  upvotes,
}: FeedbackSingleItemProps) {
  return (
    <section className="flex flex-row gap-10 rounded-md bg-primary-white px-8 py-7">
      <Button variant={"badge"} size={"icon-badge"}>
        <ChevronUpIcon />
        <span className="font-bold text-secondary-dark-blue">{upvotes}</span>
      </Button>
      <div>
        <h3 className="mb-1 text-heading-3">{title}</h3>
        <p className="mb-3 text-body-1 text-secondary-dark-grey">
          {description}
        </p>
        <Button variant={"badge"} size={"badge"}>
          {category}
        </Button>
      </div>
      <div className="ml-auto flex w-11 items-center gap-3">
        <Image src={commentIcon} alt="comment icon" />
        <span
          className={cn("text-body-1 font-bold", {
            "opacity-50": comments === 0,
          })}
        >
          {comments}
        </span>
      </div>
    </section>
  );
}

function FeedbackEmptyPlaceholder() {
  return (
    <section className="flex min-h-[37.5rem] items-center justify-center rounded-md bg-primary-white">
      <div className="flex max-w-[25.6rem] flex-col items-center justify-center">
        <Image
          src={emptyIllustration}
          alt="Empty illustration"
          className="mb-16 size-32"
        />
        <h3 className="mb-4 text-heading-1">There is no feedback yet.</h3>
        <p className="text mb-12 text-center text-body-1 text-secondary-dark-grey">
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </p>
        <Button variant={"default"}>
          <Image src={plusIcon} alt="plus icon" />
          Add Feedback
        </Button>
      </div>
    </section>
  );
}
