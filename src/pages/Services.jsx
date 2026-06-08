

// import ServicesHero from "../components/services/ServicesHero";
import  ServicesHero  from "../components/services/ServicesHero";
import ServicesListCard from "../components/services/ServicesListCard";
import ServicesListCard2 from "../components/services/ServicesListCard2";
import ImagesCard3 from "../components/services/ImagesCard3";
// import ImagesCard4 from "../components/services/ImagesCard4";
import FaqSection from "../components/services/FaqSection";
import ProblemSection from "../components/services/ProblemSection";
import TransitionSection from "../components/services/TransitionSection";
import WorkingProcess from "../components/services/WorkingProcess";

export default function Services() {
  return (
    <div className="bg-white">
  
      {/* <Navbar /> */}

      <main>

        <ServicesHero />

          <ProblemSection/>
          <TransitionSection/>

        <ServicesListCard />
        <WorkingProcess/>

        <ServicesListCard2 />
         
        {/* <ImagesCard3 /> */}

        {/* <ImagesCard4 /> */}
        <FaqSection/>


      </main>

      {/* <Footer /> */}

    </div>
  );
}