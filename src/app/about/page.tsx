export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="page-shell inner-page">
      <div className="page-intro">
        <span>ABOUT</span>

        <h1>
          Engineering intelligence around real physical systems.
        </h1>

        <p>
          I am a PhD candidate at the University of Ulsan working across
          Industrial AI, environmental engineering, trustworthy machine
          learning, and scientific modeling.
        </p>

        <p>
          My broader interest is not simply whether a model predicts well, but
          whether its predictions remain meaningful when exposed to physical
          constraints, uncertainty, disturbances, limited measurements, and
          operational decisions.
        </p>
      </div>
    </div>
  );
}
