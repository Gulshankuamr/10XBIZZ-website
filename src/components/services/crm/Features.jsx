import { ServiceFeatures } from "../ServiceDetailTemplate";

export default function Features() {
  return (
    <ServiceFeatures
      heading="CRM systems that keep the funnel clean, fast, and measurable."
      items={[
        { label: "Workflow", title: "Lifecycle automation", description: "Lead assignment, nurture flows, reminders, and task routing wired around your real sales motion." },
        { label: "Pipeline", title: "Stage clarity", description: "Custom stages, qualification logic, and SLA visibility so reps know what to do next." },
        { label: "Reporting", title: "Revenue visibility", description: "Dashboards that connect campaigns to pipeline creation, speed-to-lead, and close rate." },
      ]}
    />
  );
}
