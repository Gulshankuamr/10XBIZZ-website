import CTA from "../../components/services/crm/CTA";
import Features from "../../components/services/crm/Features";
import Hero from "../../components/services/crm/Hero";
import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";

export default function CRM() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      {/* <Footer /> */}
    </>
  );
}
