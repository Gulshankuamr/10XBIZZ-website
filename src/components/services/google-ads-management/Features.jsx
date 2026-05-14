import { ServiceFeatures } from "../ServiceDetailTemplate";

export default function Features() {
  return (
    <ServiceFeatures
      heading="Funnels that remove friction across every conversion stage."
      items={[
        { label: "Offer", title: "Positioning clarity", description: "Sharper messaging and CTA structure so visitors immediately understand the value." },
        { label: "Journey", title: "Step-by-step flow", description: "Pages, forms, and post-submit actions sequenced to reduce drop-off and increase booking intent." },
        { label: "Insights", title: "Leak detection", description: "We instrument the funnel so weak points become visible and fixable." },
      ]}
    />
  );
}
