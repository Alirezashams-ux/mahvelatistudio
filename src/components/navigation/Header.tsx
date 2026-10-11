import Link from "next/link";

const links = [
  ["Research", "/research"],
  ["Systems", "/systems"],
  ["Publications", "/publications"],
  ["Notes", "/notes"],
  ["About", "/about"],
];

export function Header() {
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link href="/" className="brand">
          <span className="brand-mark">M</span>

          <span className="brand-copy">
            <strong>Alireza Mahvelati Shamsabadi</strong>
            <small>INDUSTRIAL AI · PHYSICAL SYSTEMS</small>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}

          <Link href="/contact" className="nav-contact">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
