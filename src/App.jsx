import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
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
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogDetail />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
