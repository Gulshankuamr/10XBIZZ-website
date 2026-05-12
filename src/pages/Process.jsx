import Team from "../components/about/Team";
import CTA from "../components/home/CTA";
import FinancialGoal from "../components/home/FinancialGoal";
import ProcessSection from "../components/home/ProcessSection";
import StatsSection from "../components/home/StatsSection";


export default function Process() {
  return (
    <div className="min-h-screen">
      {/* <Navbar /> */}
      <ProcessSection />
      <FinancialGoal />
      <StatsSection />
      <Team />
     
      {/* <Footer /> */}
    </div>
  );
}
