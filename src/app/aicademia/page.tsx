export const metadata = {
  title: "AIcademia | Mahvelati Studio",
  description:
    "AIcademia is a practical AI learning platform focused on problem solving, workflows, and evidence of capability.",
};

export default function AIcademiaPage() {
  return (
    <main className="page-shell inner-page">
      <section className="page-intro">
        <span>AI LEARNING PLATFORM</span>

        <h1>
          Learn AI by
          <br />
          doing real work.
        </h1>

        <p>
          AIcademia is a practical learning environment built around
          problem solving, reusable workflows, and evidence of capability.
        </p>

        <div className="hero-actions">
          <a
            className="button-primary"
            href="/aicademia-demo.html"
            target="_blank"
            rel="noreferrer"
          >
            Launch interactive demo ↗
          </a>
        </div>
      </section>
    </main>
  );
}
