import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import CTA from "../components/services/CTA";
import ServicesHero from "../components/services/ServicesHero";
import ServicesListCard from "../components/services/ServicesListCard";
import ServicesListCard2 from "../components/services/ServicesListCard2";
import ImagesCard3 from "../components/services/ImagesCard3";
import ImagesCard4 from "../components/services/ImagesCard4";
import FaqSection from "../components/services/FaqSection";

export default function Services() {
  return (
    <div className="bg-white">
      
      <Navbar />

      <main className="flex flex-col gap-16 md:gap-20">

        <ServicesHero />

        <ServicesListCard />

        <ServicesListCard2 />

        <ImagesCard3 />

        <ImagesCard4 />
        <FaqSection/>

        <CTA />

      </main>

      {/* <Footer /> */}

    </div>
  );
}