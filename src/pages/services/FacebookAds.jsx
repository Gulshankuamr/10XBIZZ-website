import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import CTA from "../../components/services/facebook-ads/CTA";
import Features from "../../components/services/facebook-ads/Features";
import Hero from "../../components/services/facebook-ads/Hero";

export default function FacebookAds() {
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
