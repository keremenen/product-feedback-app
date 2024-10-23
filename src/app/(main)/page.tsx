import FeedbackList from "@/components/feedback-list";
import Logo from "@/components/logo";
import Navigation from "@/components/navigation";
import RoadmapList from "@/components/roadmap-list";
import SummaryBar from "@/components/summary-bar";

export default function MainPage() {
  return (
    <main className="mx-auto mt-[5.875rem] flex max-w-[69.375rem] flex-row gap-x-[1.875rem]">
      <header className="flex w-[15.9375rem] flex-col gap-6">
        <Logo />
        <Navigation />
        <RoadmapList />
      </header>
      <section className="flex flex-grow flex-col gap-6">
        <SummaryBar />
        <FeedbackList />
      </section>
    </main>
  );
}
