
// import CTA from "../../components/services/google-my-business-services/CTA";
import Features from "../../components/services/google-my-business-services/Features";
import GMBGrowthServices from "../../components/services/google-my-business-services/GMBGrowthServices";
import Hero from "../../components/services/google-my-business-services/Hero";
import ServicesGrid from "../../components/services/google-my-business-services/ServicesGrid";

export default function GoogleMyBusinessServices() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <ServicesGrid />
      <Features />
      <GMBGrowthServices/>
      {/* <CTA /> */}
      {/* <Footer /> */}
    </>
  );
}
