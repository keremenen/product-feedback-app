import { FeedbackSingleItem } from "@/components/feedback-list";

const ExampleFeedbackItem = {
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
        image: "./assets/user-images/image-elijah.jpg",
        name: "Elijah Moss",
        username: "hexagon.bestagon",
      },
    },
    {
      id: 4,
      content:
        "Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and  apparently saves battery life.",
      user: {
        image: "./assets/user-images/image-james.jpg",
        name: "James Skinner",
        username: "hummingbird1",
      },
      replies: [
        {
          content:
            "While waiting for dark mode, there are browser extensions that will also do the job. Search for 'dark theme' followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.",
          replyingTo: "hummingbird1",
          user: {
            image: "./assets/user-images/image-anne.jpg",
            name: "Anne Valentine",
            username: "annev1990",
          },
        },
        {
          content:
            "Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I'd prefer not to use one of such extensions, however, for security and privacy reasons.",
          replyingTo: "annev1990",
          user: {
            image: "./assets/user-images/image-ryan.jpg",
            name: "Ryan Welles",
            username: "voyager.344",
          },
        },
      ],
    },
  ],
};
export default function FeedbackPage() {
  return (
    <main className="mx-auto mt-24 flex max-w-[730px]">
      <FeedbackSingleItem
        title={ExampleFeedbackItem.title}
        category={ExampleFeedbackItem.category}
        description={ExampleFeedbackItem.description}
        comments={ExampleFeedbackItem.comments.length}
        upvotes={ExampleFeedbackItem.upvotes}
      />
    </main>
  );
}
