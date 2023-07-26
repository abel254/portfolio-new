import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
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
    </main>
  );
}
