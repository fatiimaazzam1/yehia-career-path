
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>Yehia's Career Path</h1>

      <h2>Welcome to Yehia's Journey</h2>

      <p>
        Yehia is a Computer Science graduate from the
        Lebanese University. His goal is to find a job
        within two months.
      </p>

      <p>
        This website helps him organize his career plan,
        discover job opportunities, and follow his progress.
      </p>

      <nav aria-label="Career journey">
        <ul>
          <li>
            <Link href="/plan">View Career Plan</Link>
          </li>

          <li>
            <Link href="/opportunities">
              Explore Opportunities
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
 