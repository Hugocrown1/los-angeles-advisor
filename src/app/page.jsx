import Image from "next/image";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Attractions from "@/components/Attractions";
import CategoriesDisplay from "@/components/CategoriesDisplay";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <main>
      <Banner />
      <Hero />
      <Attractions />
      <CategoriesDisplay />
      <AboutUs />
    </main>
  );
}
