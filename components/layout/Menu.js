import Link from "next/link";

export default function Menu() {
  return (
    <>
      <ul className="navigation">
        <li className="current">
          <Link href="/home3">Home</Link>
          {/* <ul>
            <li> 
              <Link href="/home2">Home 2</Link>
            </li>
            <li>
              <Link href="/home3">Home 3</Link>
            </li>
          </ul> */}
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
              <Link href="/SAN">SAN</Link>
            </li>
            <li>
              <Link href="/management-staff">Management Staff</Link>
            </li>
            <li>
              <Link href="/past-chief-registrars">Past Chief Registrars</Link>
            </li>
            <li>
              <Link href="/departments">Departments</Link>
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
              <Link href="/current-justices">Current Justices of Nigeria</Link>
            </li>
            <li>
              <Link href="/past-chief-justices">
                Past Chief Justices of the Supreme Court
              </Link>
            </li>
            <li>
              <Link href="/past-justices">
                Past Justices of the Supreme Court
              </Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link href="#">Litigation</Link>
          <ul>
            <li>
              <Link href="/page-causelist-archive">Daily Causelist</Link>
            </li>
            <li>
              <Link href="/weekly-causelist">Weekly Causelist</Link>
            </li>
            <li>
              <Link href="/page-all-causelist">All Causelist </Link>
            </li>
            <li>
              <Link href="/page-chamber-sitting">Chamber Sitting</Link>
            </li>
            <li>
              <Link href="/page-judgements">Judgments</Link>
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
          <Link href="#">Media</Link>
          <ul>
            <li>
              <Link href="/news-&-events">News and Events</Link>
            </li>
            <li>
              <Link href="/bulletin-list">Bulletin</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/publication-list">Publication</Link>
            </li>
            <li>
              <Link href="/speech-list">Speeches</Link>
            </li>
            <li>
              <Link href="/press-release">Press Release</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link href="#">Enquiry</Link>
          <ul>
            <li>
              <Link href="/notary-public">Notary Public</Link>
            </li>
            {/* <li>
              <Link href="/good-standing">Good Standing</Link>
            </li> */}
            <li>
              <Link href="/enrolment">Enrollment</Link>
            </li>
            <li>
              <Link href="/page-san">
                SAN
              </Link>
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
