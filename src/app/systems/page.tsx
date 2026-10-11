import { projects } from "@/data/projects";

export const metadata = {
  title: "Systems",
};

export default function SystemsPage() {
  return (
    <div className="page-shell inner-page">
      <div className="page-intro">
        <span>SYSTEMS</span>

        <h1>
          Research that becomes something you can inspect, test, and use.
        </h1>
      </div>

      <div className="system-list">
        {projects.map((project, index) => (
          <article key={project.title} className="system-row">
            <span className="system-index">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="system-main">
              <div className="system-meta">
                {project.domain} · {project.status}
              </div>

              <h2>{project.title}</h2>

              <p>{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
