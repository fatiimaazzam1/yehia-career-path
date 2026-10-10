
import Link from "next/link";
import { applications } from "@/data/applications";

export default function DashboardPage() {

  const totalApplications = applications.length;

  const underReview = applications.filter(
    (application) => application.status === "Under review"
  ).length;

  return (
    <div className="dashboard-overview">

      <header className="dashboard-header">
        <p className="dashboard-kicker">
          YOUR CAREER JOURNEY
        </p>

        <h1>Welcome back, Yehia!</h1>

        <p>
          Every application is a step toward
          your career goals. Keep moving forward!
        </p>
      </header>

      <div className="dashboard-stats">

        <section className="dashboard-stat-card">
          <p>Total Applications</p>

          <strong>{totalApplications}</strong>

          <span>
             Opportunities you've applied for
           </span>
        </section>

        <section className="dashboard-stat-card">
          <p>Under Review</p>

          <strong>{underReview}</strong>

          <span>
            Applications being considered
          </span>
        </section>

      </div>

      <section className="dashboard-message">
        <h2>Keep up the momentum!</h2>

        <p>
          You're making progress one step at a time.
          Stay focused, continue learning, and
          explore new opportunities.
        </p>

        <Link href="/dashboard/applications">
          View My Applications 
        </Link>
      </section>

    </div>
  );
}
