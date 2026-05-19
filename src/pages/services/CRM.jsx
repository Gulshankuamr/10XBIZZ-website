
import Features from "../../components/services/crm/Features";
import Hero from "../../components/services/crm/Hero";
import CRMSolutions from "../../components/services/crm/CRMSolutions";
import CRMFunnels from "../../components/services/crm/CRMFunnels";
import AllInOneCRM from "../../components/services/crm/AllinOne";
import CRMSalesWorkflow from "../../components/services/crm/CRMSalesWorkflow";


export default function CRM() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <CRMSolutions/>
      <AllInOneCRM />
      <CRMSalesWorkflow/>
      <CRMFunnels/>
      <Features />
   
      {/* <Footer /> */}
    </>
  );
}
