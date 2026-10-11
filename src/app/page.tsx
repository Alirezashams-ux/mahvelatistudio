import Image from "next/image";
import Link from "next/link";

import { researchAreas } from "@/data/researchAreas";

export default function HomePage() {
  return (
    <>
      <section className="home-hero page-shell">
        <div className="portrait-column">
          <div className="portrait-frame">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/home-page-photo.jpg`}
              alt="Alireza Mahvelati Shamsabadi"
              width={900}
              height={1100}
              priority
              className="portrait"
            />
          </div>

          <div className="portrait-caption">
            <span>01 / RESEARCHER</span>
            <span>ULSAN · KOREA</span>
          </div>
        </div>

        <div className="hero-copy">
          <div className="eyebrow">
            TRUSTWORTHY INTELLIGENCE FOR THE PHYSICAL WORLD
          </div>

          <h1>
            AI that remains useful
            <span> when reality disagrees.</span>
          </h1>

          <p className="hero-statement">
            I am <strong>Alireza Mahvelati Shamsabadi</strong>, a PhD
            candidate at the University of Ulsan working across Industrial AI,
            trustworthy machine learning, physical systems, and environmental
            engineering.
          </p>

          <p className="hero-thesis">
            <strong>Accurate prediction is not enough.</strong>{" "}
            I study when models fail at the decision layer — and how AI can
            remain useful under physical constraints, uncertainty, drift,
            and limited operational resources.
          </p>

          <div className="hero-actions">
            <Link className="button-primary" href="/research">
              Explore research
            </Link>

            <Link className="button-secondary" href="/systems">
              View systems
            </Link>
          </div>
        </div>
      </section>

      <section className="page-shell research-area-section">
        <div className="section-heading">
          <span>AREAS OF WORK</span>

          <p>
            One research identity. Multiple physical domains.
          </p>
        </div>

        <div className="research-area-grid">
          {researchAreas.map((area) => (
            <article key={area.number} className="research-area-card">
              <span className="area-number">{area.number}</span>

              <h2>{area.title}</h2>

              <strong>{area.short}</strong>

              <p>{area.description}</p>
            </article>
          ))}
        </div>

        <div className="home-route-row">
          <Link href="/research">
            Research <span>→</span>
          </Link>

          <Link href="/systems">
            Systems <span>→</span>
          </Link>

          <Link href="/publications">
            Publications <span>→</span>
          </Link>

          <Link href="/notes">
            Research Notes <span>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
