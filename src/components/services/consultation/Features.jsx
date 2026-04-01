import { ServiceFeatures } from "../ServiceDetailTemplate";

export default function Features() {
  return (
    <ServiceFeatures
      heading="Practical strategy, not vague advice."
      items={[
        { label: "Audit", title: "Current-state review", description: "We assess your funnel, channels, CRM, and reporting to spot immediate bottlenecks." },
        { label: "Priorities", title: "Decision framework", description: "You get clear tradeoffs on where to spend, what to fix, and what to ignore." },
        { label: "Execution", title: "Action roadmap", description: "A prioritized plan your team can use whether we implement it or not." },
      ]}
    />
  );
}
