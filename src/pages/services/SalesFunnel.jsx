import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import CTA from "../../components/services/sales-funnel/CTA";
import Features from "../../components/services/sales-funnel/Features";
import Hero from "../../components/services/sales-funnel/Hero";

export default function SalesFunnel() {
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
