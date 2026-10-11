export const metadata = {
  title: "Research Notes",
};

const notes = [
  {
    date: "2026",
    title:
      "Why a 93% accurate semiconductor classifier can detect zero failures",
    series: "Operational AI Audit 001",
  },

  {
    date: "2026",
    title:
      "Risk ranking is not the same as making a decision",
    series: "Operational AI Audit 002",
  },
];

export default function NotesPage() {
  return (
    <div className="page-shell inner-page">
      <div className="page-intro">
        <span>RESEARCH NOTES</span>

        <h1>
          Experiments, failures, questions, and working ideas.
        </h1>

        <p>
          Public research notes document the reasoning between code and formal
          publication.
        </p>
      </div>

      <div className="notes-list">
        {notes.map((note) => (
          <article key={note.title}>
            <span>{note.date}</span>
            <small>{note.series}</small>
            <h2>{note.title}</h2>
          </article>
        ))}
      </div>
    </div>
  );
}
