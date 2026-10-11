import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <strong>Mahvelati Studio</strong>
        <p>Trustworthy intelligence for physical systems.</p>
      </div>

      <div className="footer-links">
        <a
          href="https://scholar.google.com/citations?user=jJAkTD4AAAAJ&hl=en"
          target="_blank"
          rel="noreferrer"
        >
          Scholar ↗
        </a>

        <a
          href="https://github.com/Alirezashams-ux"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>

        <Link href="/contact">Contact</Link>
      </div>
    </footer>
  );
}
