
import { applications } from "@/data/applications";

export default function ApplicationsPage() {
  return (
    <div className="dashboard-applications-page">

      <header className="dashboard-header">
        <p className="dashboard-kicker">
          APPLICATION TRACKER
        </p>

        <h1>My Applications</h1>

        <p>
          Keep track of the opportunities
          you've already applied for.
        </p>
      </header>

      <div className="dashboard-application-list">
        {applications.map((application) => (
          <article
            key={application.id}
            className="dashboard-application-card"
          >
            <div>
              <h2>{application.opportunityTitle}</h2>
              <p>{application.company}</p>
            </div>

<span
  className={
    application.status === "Under review"
      ? "dashboard-status status-review"
      : "dashboard-status status-applied"
  }
>
  {application.status}
</span>

          </article>
        ))}
      </div>

    </div>
  );
}
