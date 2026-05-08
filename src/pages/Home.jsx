import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import CTA from "../components/home/CTA";
import FinancialGoal from "../components/home/FinancialGoal";

import Hero from "../components/home/Hero";
import StatsSection from "../components/home/StatsSection";
import VideoSection from "../components/home/VideoSection";
import Team from "../components/about/Team";
import FaqSection from "../components/services/FaqSection";
import SolutionSection from "../components/home/SolutionSection";
import { SiCucumber } from "react-icons/si";
import SuccessStories from "../components/home/SuccessStories";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* <Navbar /> */}
      <Hero />
     
      {/* <ProblemSection /> */}
      {/* <ProcessSection /> */}
      {/* <ServicesPreview /> */}
      <FinancialGoal />
      <VideoSection />
      <StatsSection />
      <SiCucumber/>
    
    <SuccessStories/>
      {/* <FinancialPlan /> */}
      {/* <FaqSection/> */}
      {/* <Team /> */}
      <CTA />
      {/* <Footer /> */}
    </div>
  );
}
