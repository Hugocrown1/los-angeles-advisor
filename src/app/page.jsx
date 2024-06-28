import Image from "next/image";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Attractions from "@/components/Attractions";

export default function Home() {
  return (
    <main>
      <Banner />
      <Hero />
      <Attractions />
    </main>
  );
}
