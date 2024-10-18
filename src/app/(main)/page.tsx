import FeedbackList from "@/components/feedback-list";
import Logo from "@/components/logo";
import Navigation from "@/components/navigation";
import Roadmap from "@/components/roadmap";
import SummaryBar from "@/components/summary-bar";

export default function MainPage() {
  return (
    <main className="mx-auto mt-24 flex max-w-[1110px] flex-row gap-x-[1.875rem]">
      <header className="flex w-[255px] flex-col gap-6">
        <Logo />
        <Navigation />
        <Roadmap />
      </header>
      <section className="flex flex-grow flex-col gap-6">
        <SummaryBar />
        <FeedbackList />
      </section>
    </main>
  );
}
