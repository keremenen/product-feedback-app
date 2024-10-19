import { FeedbackSingleItem } from "@/components/feedback-list";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeftIcon } from "lucide-react";

const exampleFeedbackItem = {
  id: 2,
  title: "Add a dark theme option",
  category: "feature",
  upvotes: 99,
  status: "suggestion",
  description:
    "It would help people with light sensitivities and who prefer dark mode.",
  comments: [
    {
      id: 3,
      content:
        "Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.",
      user: {
        image: "/assets/user-images/image-elijah.jpg",
        name: "Elijah Moss",
        username: "hexagon.bestagon",
      },
    },
    {
      id: 4,
      content:
        "Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and apparently saves battery life.",
      user: {
        image: "/assets/user-images/image-james.jpg",
        name: "James Skinner",
        username: "hummingbird1",
      },
      replies: [
        {
          content:
            "While waiting for dark mode, there are browser extensions that will also do the job. Search for 'dark theme' followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.",
          replyingTo: "hummingbird1",
          user: {
            image: "/assets/user-images/image-anne.jpg",
            name: "Anne Valentine",
            username: "annev1990",
          },
        },
        {
          content:
            "Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I'd prefer not to use one of such extensions, however, for security and privacy reasons.",
          replyingTo: "annev1990",
          user: {
            image: "/assets/user-images/image-ryan.jpg",
            name: "Ryan Welles",
            username: "voyager.344",
          },
        },
      ],
    },
  ],
};
export default function FeedbackPage() {
  console.log(exampleFeedbackItem);

  return (
    <main className="mx-auto mt-24 flex max-w-[730px] flex-col gap-y-6">
      <FeedbackHeader />
      <FeedbackSingleItem
        title={exampleFeedbackItem.title}
        category={exampleFeedbackItem.category}
        description={exampleFeedbackItem.description}
        comments={4}
        upvotes={exampleFeedbackItem.upvotes}
      />

      <FeedbackCommentWrapper>
        {exampleFeedbackItem.comments.map((comment, index) => (
          <div key={comment.id}>
            <SingleComment comment={comment} />
            {index < exampleFeedbackItem.comments.length - 1 && (
              <Separator className="my-8" />
            )}
          </div>
        ))}
      </FeedbackCommentWrapper>

      <FeedbackAddComment />
    </main>
  );
}

type SingleReply = {
  content: string;
  replyingTo: string;
  user: {
    image: string;
    name: string;
    username: string;
  };
};

type SingleCommentProps = {
  comment: {
    id: number;
    content: string;
    replies?: SingleReply[];
    user: {
      image: string;
      name: string;
      username: string;
    };
  };
};

function SingleComment({ comment }: SingleCommentProps) {
  return (
    <div>
      {/* COMMENT HEADER */}
      <div className="mb-[1.0625rem] flex items-start gap-8">
        <Avatar>
          <AvatarImage src={comment.user.image} />
          <AvatarFallback>E</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-heading-4">{comment.user.name}</h3>
          <p className="text-heading-4 font-normal tracking-normal text-secondary-dark-grey">
            @{comment.user.username}
          </p>
        </div>
        <Button
          variant={"light"}
          className="-mt-[2px] ml-auto !h-auto w-[2.0625rem] items-center self-center !px-0 !py-0 text-right !text-body-3 font-semibold capitalize text-primary-blue"
        >
          reply
        </Button>
      </div>
      {/* COMMENT BODY */}
      <div>
        <p className="ml-[4.5rem] text-body-2 text-secondary-dark-grey">
          {comment.content}
        </p>
        {/* REPLIES */}
        {comment.replies &&
          comment.replies.map((reply, index) => (
            <div key={index} className="ml-[2.8125rem] mt-[2rem]">
              <div className="mb-[1.0625rem] flex items-start gap-8">
                <Avatar>
                  <AvatarImage src={reply.user.image} />
                  <AvatarFallback>E</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-heading-4">{reply.user.name}</h3>
                  <p className="text-heading-4 font-normal tracking-normal text-secondary-dark-grey">
                    @{reply.user.username}
                  </p>
                </div>
                <Button
                  variant={"light"}
                  className="-mt-[2px] ml-auto !h-auto w-[2.0625rem] items-center self-center !px-0 !py-0 text-right !text-body-3 font-semibold capitalize text-primary-blue"
                >
                  reply
                </Button>
              </div>
              <p className="ml-[4.5rem] text-body-2 text-secondary-dark-grey">
                <span className="mr-[0.5625rem] text-body-2 font-bold text-primary-purple">
                  @{reply.replyingTo}
                </span>
                {reply.content}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

function FeedbackHeader() {
  return (
    <section className="flex items-center justify-between">
      <Button variant={"light"} className="bg-transparent !px-0">
        <ChevronLeftIcon className="p-0" />
        Go Back
      </Button>
      <Button variant={"secondary"}>Edit Feedback</Button>
    </section>
  );
}
function FeedbackCommentWrapper({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full rounded-md bg-primary-white px-8 pb-12 pt-6">
      <h2 className="mb-7 px-[0.125rem] text-heading-3 capitalize">
        4 comments
      </h2>
      {children}
    </section>
  );
}

function FeedbackAddComment() {
  return (
    <section className="rounded-md bg-primary-white pb-8 pl-[2.125rem] pr-8 pt-6">
      <h2 className="mb-6 text-heading-3 capitalize">add comment</h2>
      <Textarea placeholder="Type your comment here" className="" />
      <div className="flex items-center justify-between">
        <p className="text-body-2 text-secondary-dark-grey">
          250 Characters left
        </p>
        <Button>Post Comment</Button>
      </div>
    </section>
  );
}
