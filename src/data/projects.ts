export type Project = {
  title: string;
  domain: string;
  status: string;
  description: string;
};

export const projects: Project[] = [
  {
    title: "Operational AI Audits",
    domain: "Semiconductor Manufacturing",
    status: "Active",
    description:
      "Testing whether benchmark-winning models remain useful under real failure-detection and inspection constraints.",
  },

  {
    title: "Operationalizing Nitrogen Compliance",
    domain: "Environmental AI",
    status: "Published",
    description:
      "Leakage-safe, alarm-budget-aware wastewater early warning and operational model evaluation.",
  },

  {
    title: "Scientific Operations Console",
    domain: "Research Infrastructure",
    status: "Active",
    description:
      "A scientific operations interface for heterogeneous experimental systems and AI-assisted workflows.",
  },

  {
    title: "Climate Resilience for Urban Water Systems",
    domain: "Physical Infrastructure",
    status: "Research",
    description:
      "Decision-aware resilience modeling under climate stress, disturbances, recovery, and uncertainty.",
  },

  {
    title: "Interpretable AI for Battery Safety",
    domain: "Energy Systems",
    status: "Developing",
    description:
      "Mechanism-aware and falsification-driven machine learning for battery safety and thermal-runaway research.",
  },
];
