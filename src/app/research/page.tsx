import { ModelRealityLab } from "@/components/physics/ModelRealityLab";
import { researchAreas } from "@/data/researchAreas";

export const metadata = {
  title: "Research",
};

export default function ResearchPage() {
  return (
    <div className="page-shell inner-page">
      <div className="page-intro">
        <span>RESEARCH</span>

        <h1>
          Trustworthy AI for physical and engineered systems.
        </h1>

        <p>
          My research asks when predictive performance stops being equivalent
          to operational usefulness — and what changes when models must operate
          inside real physical systems.
        </p>
      </div>

      <div className="pillar-list">
        {researchAreas.map((area) => (
          <article key={area.number} className="pillar">
            <span>{area.number}</span>

            <div>
              <h2>{area.title}</h2>
              <p>{area.description}</p>
            </div>
          </article>
        ))}
      </div>

      <ModelRealityLab />
    </div>
  );
}
