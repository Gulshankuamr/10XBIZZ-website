import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import CaseStudyPreview from "../components/home/CaseStudyPreview";
import CTA from "../components/home/CTA";
import FinancialGoal from "../components/home/FinancialGoal";
import FinancialPlan from "../components/home/FinancialPlan";
import Hero from "../components/home/Hero";
import ProblemSection from "../components/home/ProblemSection";
import ProcessSection from "../components/home/ProcessSection";
import ServicesPreview from "../components/home/ServicesPreview";
import SuccessStory from "../components/home/SuccessStory";
import StatsSection from "../components/home/StatsSection";
import VideoSection from "../components/home/VideoSection";
import Team from "../components/about/Team"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
     
      {/* <ProblemSection /> */}
      {/* <ProcessSection /> */}
      {/* <ServicesPreview /> */}
      {/* <CseStudyPreview /> */}
      <FinancialGoal />
      <VideoSection/>
      {/* <SuccessStory /> */}
       <StatsSection/>
      <Team/>
      {/* <FinancialPlan /> */}
      <CTA />
      <Footer />
    </div>
  );
}
