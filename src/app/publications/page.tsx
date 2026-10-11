import { publications } from "@/data/publications";

export const metadata = {
  title: "Publications",
};

export default function PublicationsPage() {
  return (
    <div className="page-shell inner-page">
      <div className="page-intro">
        <span>PUBLICATIONS</span>
        <h1>Selected research.</h1>
      </div>

      <div className="publication-list">
        {publications.map((publication) => (
          <article
            key={publication.title}
            className="publication-row"
          >
            <span>{publication.year}</span>

            <div>
              <h2>{publication.title}</h2>
              <p>{publication.venue}</p>

              {publication.href && (
                <a
                  href={publication.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  DOI ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
