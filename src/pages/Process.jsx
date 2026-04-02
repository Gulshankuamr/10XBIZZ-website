import Team from "../components/about/Team";
import CTA from "../components/home/CTA";
import FinancialGoal from "../components/home/FinancialGoal";
import ProcessSection from "../components/home/ProcessSection";
import StatsSection from "../components/home/StatsSection";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

export default function Process() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ProcessSection />
      <FinancialGoal />
      <StatsSection />
      <Team />
      <CTA />
      {/* <Footer /> */}
    </div>
  );
}
