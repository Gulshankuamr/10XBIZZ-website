
// import CTA from "../../components/services/google-my-business-services/CTA";
// import Features from "../../components/services/google-my-business-services/Features";
import GMBGrowthServices from "../../components/services/google-my-business-services/GMBGrowthServices";
import Hero from "../../components/services/google-my-business-services/Hero";
import ServicesGrid from "../../components/services/google-my-business-services/ServicesGrid";
import GMBManagement from "../../components/services/google-my-business-services/GMBManagement";
import WhyChooseUs from "../../components/services/google-my-business-services/WhyChooseUs";

export default function GoogleMyBusinessServices() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <ServicesGrid />
      {/* <Features /> */}
      <GMBManagement/>
      <WhyChooseUs/>
      <GMBGrowthServices/>
      {/* <CTA /> */}
      {/* <Footer /> */}
    </>
  );
}
