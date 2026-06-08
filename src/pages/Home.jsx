

import FinancialGoal from "../components/home/FinancialGoal";

import Hero from "../components/home/Hero";
import StatsSection from "../components/home/StatsSection";
import VideoSection from "../components/home/VideoSection";
import Team from "../components/about/Team";
import FaqSection from "../components/services/FaqSection";
import SolutionSection from "../components/home/SolutionSection";
import { SiCucumber } from "react-icons/si";
import SuccessStories from "../components/home/SuccessStories";

import ExpertiseSection from "../components/home/ExpertiseSection";
import AwardWinningAgency from "../components/home/AwardWinningAgency";
import Trusted from "../components/home/Trusted";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* <Navbar /> */}
      <Hero />
     
      {/* <ProblemSection /> */}
      <AwardWinningAgency/>
  
      <ExpertiseSection/>
      {/* <ServicesPreview /> */}
      <FinancialGoal />
      <VideoSection />
      <StatsSection />
      <SiCucumber/>
        
    <Trusted/>
    {/* <SuccessStories/> */}
      {/* <FinancialPlan /> */}
      {/* <FaqSection/> */}
      {/* <Team /> */}
  
      {/* <Footer /> */}
    </div>
  );
}
