import BlogTeaser from "./components/blogTeaser";
import Hero from "./components/hero";
import JobTeaser from "./components/jobTeaser";

export default function Home() {
  return (
      <main className="py-20 flex flex-col gap-40">
        <Hero />
        <JobTeaser />
        <BlogTeaser />
      </main>
  );
}
