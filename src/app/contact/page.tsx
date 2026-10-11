export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="page-shell inner-page">
      <div className="page-intro">
        <span>CONTACT</span>

        <h1>Research, systems, and collaboration.</h1>

        <p>
          University of Ulsan · Ulsan, Republic of Korea
        </p>
      </div>

      <div className="contact-grid">
        <a href="mailto:alireza@mahvelatistudio.com">
          Email
          <strong>alireza@mahvelatistudio.com</strong>
        </a>

        <a
          href="https://scholar.google.com/citations?user=jJAkTD4AAAAJ&hl=en"
          target="_blank"
          rel="noreferrer"
        >
          Google Scholar
          <strong>Research profile ↗</strong>
        </a>

        <a
          href="https://github.com/Alirezashams-ux"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
          <strong>Code & systems ↗</strong>
        </a>

        <a
          href="https://orcid.org/0009-0003-0412-3112"
          target="_blank"
          rel="noreferrer"
        >
          ORCID
          <strong>0009-0003-0412-3112 ↗</strong>
        </a>
      </div>
    </div>
  );
}
