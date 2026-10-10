
import Link from "next/link";
import { opportunities } from "@/data/opportunities";

// Type of the props provided by Next.js
type OpportunityDetailsPageProps = {
  params: Promise<{ id: string }>;
};

// Server Component
export default async function OpportunityDetailsPage({
  params,
}: OpportunityDetailsPageProps) {
    
    // params: An object containing the dynamic route parameters, in this case, the id of the opportunity.
    //promise<{ id: string }>: Indicates that the params object is a Promise that resolves to an object with a single property id of type string. This is because Next.js may fetch the route parameters asynchronously.
    //async function OpportunityDetailsPage: Defines an asynchronous React component that will render the details of a specific opportunity based on the id provided in the URL.
    //await params: Waits for the params Promise to resolve, allowing the component to access the id of the opportunity from the URL.

  
  
    // Step 1: Read the dynamic ID from the URL
  const { id } = await params;

  // Step 2: Find the matching opportunity
  const opportunity = opportunities.find(
    (item) => item.id === id
  );
  
  //.find():searches through the opportunities array and returns the first opportunity object that has an id matching the id from the URL. If no match is found, it returns undefined.

  // Step 3: Handle an unknown ID
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

  // Step 4: Display the matching opportunity
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
