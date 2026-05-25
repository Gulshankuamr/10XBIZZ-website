
import Features from "../../components/services/crm/Features";
import Hero from "../../components/services/crm/Hero";
import CRMSolutions from "../../components/services/crm/CRMSolutions";
import CRMFunnels from "../../components/services/crm/CRMFunnels";
import AllInOne from "../../components/services/crm/AllInOne";
import CRMSalesWorkflow from "../../components/services/crm/CRMSalesWorkflow";


export default function CRM() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <CRMSolutions/>
      <AllInOne />
      <CRMSalesWorkflow/>
      <CRMFunnels/>
      <Features />
   
      {/* <Footer /> */}
    </>
  );
}
