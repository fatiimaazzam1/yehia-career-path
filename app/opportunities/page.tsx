
import Link from "next/link";
import { opportunities } from "@/data/opportunities";

export default function OpportunitiesPage() {
  return (
    <main className="opportunities-page">

      <header className="opportunities-hero">
        <p className="opportunities-eyebrow">
          YEHIA'S CAREER JOURNEY
        </p>

        <h1>Find your next opportunity.</h1>

        <p>
          Explore exciting opportunities and take
          the next step toward your career goals.
        </p>

        <div className="opportunities-count">
          {opportunities.length} opportunities available
        </div>
      </header>

      <section
        className="opportunities-grid"
        aria-label="Career opportunities"
      >
        {opportunities.map((opportunity) => (
          <article
            key={opportunity.id}
            className="opportunity-card"
          >
            <div className="opportunity-logo">
              {opportunity.company
                .split(" ")
                .map((word) => word[0])
                .join("")}
            </div>

            <h2 className="opportunity-title">
              {opportunity.title}
            </h2>

            <p className="opportunity-company">
              {opportunity.company}
            </p>

            <p className="opportunity-location">
              📍 {opportunity.location}
            </p>

            <Link
              href={`/opportunities/${opportunity.id}`}
              className="opportunity-link"
            >
              View opportunity 
            </Link>
          </article>
        ))}
      </section>

      <Link href="/" className="opportunities-back">
        Back to Home
      </Link>

    </main>
  );
}
