import Link from "next/link";

export default function Menu() {
  return (
    <>
      <ul className="navigation">
        <li className="current">
          <Link href="/">Home</Link>
        </li>
        <li className="dropdown">
          <Link href="#">About</Link>
          <ul>
            <li>
              <Link href="/court-history">History of the Court</Link>
            </li>
            <li>
              <Link href="/court-jurisdiction">Jurisdiction of the Court</Link>
            </li>
            <li>
              <Link href="/management-staff">Management Staff</Link>
            </li>
            <li>
              <Link href="/past-chief-registrars">Past Chief Registrars</Link>
            </li>
            <li>
              <Link href="/page-departments">Departments</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link href="#">Justices</Link>
          <ul>
            <li>
              <Link href="/cjn-profile">Chief Justice of Nigeria</Link>
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
          <Link href="#">Appeal</Link>
          <ul>
            <li>
              <Link href="/page-weekly-causelist">
                Current Matters/ Weekly Causelist
              </Link>
            </li>
            <li>
              <Link href="/page-causelist-archive">Causelist Archive</Link>
            </li>
            <li>
              <Link href="/page-all-causelist">Search Causelist </Link>
            </li>
            <li>
              <Link href="/page-chamber-sitting">Chamber Sitting</Link>
            </li>
            <li>
              <Link href="/page-judgements">Judgements</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link href="#">Acts and Rules</Link>
          <ul>
            <li>
              <Link href="/page-acts">Supreme Court Acts</Link>
            </li>
            <li>
              <Link href="/page-rules">Supreme Court Rules</Link>
            </li>
            <li>
              <Link href="/page-practice-directions">Practice Direction</Link>
            </li>
            <li>
              <Link href="/page-mediation-rules">Mediation Rules</Link>
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
          <Link href="#">Enquiry</Link>
          <ul>
            <li>
              <Link href="/notary-public">Notary Public</Link>
            </li>
            <li>
              <Link href="/good-standing">Good Standing</Link>
            </li>
            <li>
              <Link href="/enrolment">Enrollment</Link>
            </li>
            <li>
              <Link href="/requirements-for-change-of-name">Requirements for Change of Name</Link>
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
