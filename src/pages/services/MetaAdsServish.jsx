import Features from "../../components/services/meta-ads-servish/Features";
import Hero from "../../components/services/meta-ads-servish/Hero";
import WhyUs from "../../components/services/meta-ads-servish/WhyUs";
import WhatWeManage from "../../components/services/meta-ads-servish/WhatWeManage";
import ImageCardSection from "../../components/services/meta-ads-servish/ImageCardSection";
import ProcessSection from "../../components/services/meta-ads-servish/ProcessSection";
import MetaAdsServices from "../../components/services/meta-ads-servish/Services";
import CTA from "../../components/services/meta-ads-servish/CTA";

export default function MetaAdsServish() {
  return (
    <>
      <Hero />
      <WhyUs />
      <WhatWeManage />
      <ImageCardSection />
      <MetaAdsServices />
      <ProcessSection />
      <CTA />
      <Features />
    </>
  );
}
