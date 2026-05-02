import About from "@/components/About";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import HomePortfolio from "@/components/Portfolio";
import RecentWorks from "@/components/Recent";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Services/>
      <WhyChooseUs/>
      <RecentWorks/>
      <Clients/>
      <Testimonials/>
    </div>
  );
}
