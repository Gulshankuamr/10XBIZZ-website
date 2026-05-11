import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/about/Hero";
import Story from "../components/about/Story";
import Team from "../components/about/Team";
import Whowehelp from "../components/about/Whowehelp";
import Mission from "../components/about/Mission";
import WhyChooseUs from "../components/about/WhyChooseUs";


export default function About() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <Story />
      <Whowehelp/>
      <Mission/>
      <WhyChooseUs/>
      {/* <Team /> */}
      {/* <Footer /> */}
    </>
  );
}
