export type ResearchArea = {
  number: string;
  title: string;
  short: string;
  description: string;
};

export const researchAreas: ResearchArea[] = [
  {
    number: "01",
    title: "Industrial AI",
    short: "Models under operational constraints.",
    description:
      "Failure detection, decision-aware model selection, industrial monitoring, and deployment-oriented evaluation.",
  },

  {
    number: "02",
    title: "AI for Physical Systems",
    short: "Learning that respects dynamics.",
    description:
      "State, disturbances, controls, constraints, uncertainty, and interaction between models and physical systems.",
  },

  {
    number: "03",
    title: "Environmental AI",
    short: "Intelligence for resilient infrastructure.",
    description:
      "Urban water systems, wastewater treatment, climate resilience, environmental monitoring, and operational early warning.",
  },

  {
    number: "04",
    title: "Scientific ML",
    short: "Prediction structured by science.",
    description:
      "Machine learning informed by physical structure, scientific constraints, uncertainty, and mechanistic reasoning.",
  },
];
