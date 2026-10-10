
import Link from "next/link";

export default function PlanPage() {
  return (
    <main>
      <h1>Yehia's Career Plan</h1>

      <p>
        Yehia has two months to work toward his goal.
        His journey is divided into three clear steps:
        Prepare, Practice, and Apply.
      </p>

      <section>
        <h2>1. Prepare</h2>

        <p>
          Yehia starts by preparing his professional profile
          and deciding which job roles suit him.
        </p>

        <ul>
          <li>Update his CV and organize his portfolio.</li>
          <li>Choose a target role based on his skills.</li>
        </ul>
      </section>

      <section>
        <h2>2. Practice</h2>

        <p>
          Yehia improves his technical skills and builds
          confidence for job interviews.
        </p>

        <ul>
          <li>Practice coding and build small projects.</li>
          <li>Prepare for technical interviews.</li>
        </ul>
      </section>

      <section>
        <h2>3. Apply</h2>

        <p>
          Yehia explores suitable opportunities and
          starts applying for positions.
        </p>

        <ul>
          <li>Search for jobs and internships.</li>
          <li>Submit applications and follow up.</li>
        </ul>
      </section>

      <Link href="/">Back to Home</Link>
    </main>
  );
}
