import { ServiceFeatures } from "../ServiceDetailTemplate";

export default function Features() {
  return (
    <ServiceFeatures
      heading="Meta campaigns designed for profitable scale."
      items={[
        { label: "Creative", title: "Testing loops", description: "We ship new hooks, formats, and offers to keep performance learning moving." },
        { label: "Media", title: "Budget control", description: "Campaign structures and bidding strategies built around CAC, CPL, and ROAS targets." },
        { label: "Tracking", title: "Attribution hygiene", description: "Pixel, event, and conversion reporting aligned with what your business actually cares about." },
      ]}
    />
  );
}
