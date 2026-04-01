import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import CTA from "../../components/services/consultation/CTA";
import Features from "../../components/services/consultation/Features";
import Hero from "../../components/services/consultation/Hero";

export default function Consultation() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </>
  );
}
