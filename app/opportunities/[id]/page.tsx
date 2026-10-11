
import Link from "next/link";
import { opportunities } from "@/data/opportunities";

// Props provided by Next.js to this dynamic route
type OpportunityDetailsPageProps = {
  params: Promise<{ id: string }>;
};

// Server Component
export default async function OpportunityDetailsPage({
  params,
}: OpportunityDetailsPageProps) {

  // In Next.js 16, params is provided as a Promise.
  // We use await to access the dynamic ID from the URL.
  const { id } = await params;

  // Find the opportunity matching the ID.
  // .find() is synchronous and returns undefined if no match exists.
  const opportunity = opportunities.find(
    (item) => item.id === id
  );

  // Handle an unknown opportunity ID
  if (!opportunity) {
    return (
      <main className="opportunity-detail-page">
        <section className="detail-not-found">
          <span className="detail-error-code">404</span>

          <h1>Opportunity not found</h1>

          <p>
            Sorry, we couldn't find the opportunity
            you're looking for.
          </p>

          <Link
            href="/opportunities"
            className="detail-back-button"
          >
            Back to Opportunities
          </Link>
        </section>
      </main>
    );
  }

  // Display the matching opportunity
  return (
    <main className="opportunity-detail-page">

      <Link
        href="/opportunities"
        className="detail-back-link"
      >
        All Opportunities
      </Link>

      <header className="detail-hero">
        <span className="detail-label">
          CAREER OPPORTUNITY
        </span>

        <h1>{opportunity.title}</h1>

        <p className="detail-company">
          {opportunity.company}
        </p>

        <div className="detail-location">
          📍 {opportunity.location}
        </div>
      </header>

      <section className="detail-description">
        <h2>About this role</h2>

        <p>{opportunity.description}</p>
      </section>

      <section className="detail-next-step">
        <h2>One step closer to your goal</h2>

        <p>
          Take time to explore this opportunity
          and decide if it matches your career plan.
        </p>

        <Link href="/plan">
          Review Career Plan
        </Link>
      </section>

    </main>
  );
}
