import { ServiceFeatures } from "../ServiceDetailTemplate";

export default function Features() {
  return (
    <ServiceFeatures
      heading="Conversational automation for faster lead response."
      items={[
        { label: "Capture", title: "Instant handoff", description: "Ads, forms, and site traffic routed into WhatsApp with context preserved." },
        { label: "Nurture", title: "Smart flows", description: "Qualification questions, reminders, and follow-up sequences tailored to your sales process." },
        { label: "Retention", title: "Customer touchpoints", description: "Use WhatsApp after the sale for onboarding, renewals, and repeat engagement." },
      ]}
    />
  );
}
