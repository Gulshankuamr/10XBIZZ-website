import { ServiceFeatures } from "../ServiceDetailTemplate";

export default function Features() {
  return (
    <ServiceFeatures
      heading="Lead gen built around quality, response speed, and conversion."
      items={[
        { label: "Acquisition", title: "Audience targeting", description: "We narrow channels, segments, and creative angles to the buyers most likely to convert." },
        { label: "Funnels", title: "Conversion architecture", description: "Landing pages, lead magnets, forms, and follow-up flows aligned to your offer." },
        { label: "Optimization", title: "Weekly iteration", description: "We improve CPL, booking rate, and funnel drop-off with a disciplined testing loop." },
      ]}
    />
  );
}
