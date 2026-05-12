import Hero from "../components/about/Hero";
import Story from "../components/about/Story";
import Team from "../components/about/Team";
import WhoWehelp from "../components/about/WhoWehelp";
import Mission from "../components/about/Mission";
import WhyChooseUs from "../components/about/WhyChooseUs";
import FounderSection from "../components/about/FounderSection";

export default function About() {
  return (
    <>
      <Hero />
      <Story />
      <WhoWehelp />
      <Mission />
      <WhyChooseUs />
      <FounderSection/>
    </>
  );
}