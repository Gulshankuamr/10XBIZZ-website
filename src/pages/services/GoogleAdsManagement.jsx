

import Features from "../../components/services/google-ads-management/Features";
import Hero from "../../components/services/google-ads-management/Hero";
import GoogleAdsWhyUs from "../../components/services/google-ads-management/GoogleAdsWhyUs";
import WhatWeManage from "../../components/services/google-ads-management/WhatWeManage";
import ImageCardSection from "../../components/services/google-ads-management/ImageCardSection";
import OurProcessSection from "../../components/services/google-ads-management/OurProcessSection";
import GoogleAdsServices from "../../components/services/google-ads-management/Googleadsservices";

export default function SalesFunnel() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
       <GoogleAdsWhyUs/>
       <WhatWeManage />
       <ImageCardSection/>

       <GoogleAdsServices/>

       <OurProcessSection />
      <Features />

      
      {/* <Footer /> */}
    </>
  );
}
