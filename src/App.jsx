import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";

import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";

import CRM from "./pages/services/CRM";
import MetaAdsServish from "./pages/services/MetaAdsServish";
import FacebookAds from "./pages/services/FacebookAds";
import LeadGeneration from "./pages/services/LeadGeneration";
import GoogleAdsManagement from "./pages/services/GoogleAdsManagement";
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
        <Route path="/services/google-ads-management" element={<GoogleAdsManagement />} />
        <Route path="/services/whatsapp-automation" element={<WhatsAppAutomation />} />
        <Route path="/services/marketing-meta-ads-servish" element={<MetaAdsServish />} />

        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />

      </Route>

    </Routes>
  );
}
