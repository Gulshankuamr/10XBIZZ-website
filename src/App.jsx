import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";

import About from "./pages/About";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Process from "./pages/Process";
import Services from "./pages/Services";

import CRM from "./pages/services/CRM";
import Consultation from "./pages/services/Consultation";
import FacebookAds from "./pages/services/FacebookAds";
import LeadGeneration from "./pages/services/LeadGeneration";
import SalesFunnel from "./pages/services/SalesFunnel";
import WhatsAppAutomation from "./pages/services/WhatsAppAutomation";

export default function App() {
  return (
    <Routes>

      {/* Layout Wrapper */}
      <Route element={<Layout />}>

        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/services" element={<Services />} />
        <Route path="/services/crm-automation" element={<CRM />} />
        <Route path="/services/lead-generation" element={<LeadGeneration />} />
        <Route path="/services/facebook-ads" element={<FacebookAds />} />
        <Route path="/services/sales-funnel" element={<SalesFunnel />} />
        <Route path="/services/whatsapp-automation" element={<WhatsAppAutomation />} />
        <Route path="/services/marketing-consultation" element={<Consultation />} />

        <Route path="/about" element={<About />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
        <Route path="/process" element={<Process />} />
        <Route path="/contact" element={<Contact />} />

      </Route>

    </Routes>
  );
}