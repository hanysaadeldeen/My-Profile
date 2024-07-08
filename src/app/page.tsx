import About from "@/components/About";
import Divider from "@/components/Divider";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col max-w-[50rem] justify-center px-4 mx-auto items-center">
      <Header />
      <Intro />
      <Divider />
      <About />
      <Projects />
    </main>
  );
}
