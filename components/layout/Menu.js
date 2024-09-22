import Link from "next/link";

export default function Menu() {
  return (
    <>
      <ul className="navigation">
        <li className="current">
          <Link href="/">Home</Link>
        </li>
        <li className="dropdown">
          <Link href="/page-about">About</Link>
          <ul>
            <li>
              <Link href="/page-about">History of the Court</Link>
            </li>
            <li>
              <Link href="/page-pricing">Jurisdiction of the Court</Link>
            </li>
            <li>
              <Link href="/page-testimonial">Management Staff</Link>
            </li>
            <li>
              <Link href="/page-faq">Past Chief Registrars</Link>
            </li>
            <li>
              <Link href="/page-error">Departments</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link href="/page-services">Justices</Link>
          <ul>
            <li>
              <Link href="/page-services">Chief Justices of Nigeria</Link>
            </li>
            <li>
              <Link href="/page-service-details">
                Current Justices of Nigeria
              </Link>
            </li>
            <li>
              <Link href="/page-service-details">
                Past Chief Justices of the Supreme Court
              </Link>
            </li>
            <li>
              <Link href="/page-service-details">
                Past Justices of the Supreme Court
              </Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link href="/page-projects">Appeal</Link>
          <ul>
            <li>
              <Link href="/page-projects">
                Current Matters/ Weekly Causelist
              </Link>
            </li>
            <li>
              <Link href="/page-project-details">Causelsit Archieve</Link>
            </li>
            <li>
              <Link href="/page-project-details">Search Causelsit </Link>
            </li>
            <li>
              <Link href="/page-project-details">Chamber Sitting</Link>
            </li>
            <li>
              <Link href="/page-project-details">Judgements</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link href="/news-grid">Acts and Rules</Link>
          <ul>
            <li>
              <Link href="/news-grid">Supreme Court Acts</Link>
            </li>
            <li>
              <Link href="/news-gridm">Supreme Court Rules</Link>
            </li>
            <li>
              <Link href="/news-grid">Practice Direction</Link>
            </li>
            <li>
              <Link href="/news-details">Mediation Rules</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link href="/news-grid">Media</Link>
          <ul>
            <li>
              <Link href="/news-grid">News and Events</Link>
            </li>
            <li>
              <Link href="/news-details">Bulletin</Link>
            </li>
            <li>
              <Link href="/news-details">Gallery</Link>
            </li>
            <li>
              <Link href="/news-details">Publication</Link>
            </li>
            <li>
              <Link href="/news-details">Speeches</Link>
            </li>
            <li>
              <Link href="/news-details">Press Release</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link href="/news-grid">Enquiry</Link>
          <ul>
            <li>
              <Link href="/news-grid">Notary Public</Link>
            </li>
            <li>
              <Link href="/news-details">Good Standing</Link>
            </li>
            <li>
              <Link href="/news-details">Enrollment</Link>
            </li>
            <li>
              <Link href="/news-details">Requirement for Change of Name</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/page-contact">Contact</Link>
        </li>
      </ul>
    </>
  );
}
