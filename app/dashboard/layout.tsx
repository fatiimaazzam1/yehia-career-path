
import Link from "next/link";

type DashboardLayoutProps = {
  children: React.ReactNode;
  // children prop is a special prop in React that allows you to pass components or elements as children to a parent component. 
  // In this case, it represents the content that will be rendered inside the DashboardLayout component.
};


//<aside>: A semantic HTML element that represents a section of a page with content related to the main content, often used for sidebars or navigation menus.
//<nav>: A semantic HTML element that represents a section of a page intended for navigation links.

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="dashboard-shell">

      <aside className="dashboard-sidebar">
        
        <div className="dashboard-brand">
          <span className="dashboard-brand-icon">
        
          </span>

          <div>
            <h2>Yehia's Space</h2>
            <p>Career Journey</p>
          </div>
        </div>

        <nav
          className="dashboard-navigation"
          aria-label="Dashboard navigation"
        >
          <Link href="/dashboard">
            Overview
          </Link>

          <Link href="/dashboard/applications">
            Applications
          </Link>
        </nav>

        <div className="dashboard-sidebar-footer">
          <Link href="/">
             Back to Home
          </Link>
        </div>
      </aside>

      <main className="dashboard-content">
        {children}
      </main>

    </div>
  );
}
