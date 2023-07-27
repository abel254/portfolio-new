import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col h-screen">
        <Navbar />
        <Banner />
      </div>
      <Skills/>
      <Projects/>
      <Newsletter/>
    </main>
  );
}
