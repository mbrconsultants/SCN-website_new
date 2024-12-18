"use client";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleClick = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <ul className="navigation clearfix">
        {/*Keep This Empty / Menu will come through Javascript*/}
        <li className="current dropdown">
          <Link href="/home3">Home</Link> 
          {/* <ul
            style={{
              display: `${isActive.key == 1 ? "block" : "none"}`,
            }}>
              <li>
                <Link href="/home2">Home 2</Link>
              </li>
              <li>
                <Link href="/home3">Home 3</Link>
              </li>
            </ul> */}
          <div
            className="dropdown-btn"
            onClick={() => handleClick(1)}></div>
        </li>
        <li className="dropdown">
          <Link href="/page-about">About</Link>
          <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
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
              <Link href="/departments">Departments</Link>
            </li>
          </ul>
          <div
            className="dropdown-btn"
            onClick={() => handleClick(2)}>
            <i className="fa fa-angle-down" />
          </div>
        </li>
        <li className="dropdown">
          <Link href="/page-team">Justices</Link>
          <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
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
          <div
            className="dropdown-btn"
            onClick={() => handleClick(3)}>
            <i className="fa fa-angle-down" />
          </div>
        </li>
        <li className="dropdown">
          <Link href="/page-services">Litigation</Link>
          <ul style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
            <li>
              <Link href="/page-causelist-archive">Daily Causelist</Link>
            </li>
            <li>
              <Link href="/page-weekly-causelist">Weekly Causelist
              </Link>
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
          <div
            className="dropdown-btn"
            onClick={() => handleClick(4)}>
            <i className="fa fa-angle-down" />
          </div>
        </li>
        <li className="dropdown">
          <Link href="/page-projects">Acts and Rules</Link>
          <ul style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
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
          <div
            className="dropdown-btn"
            onClick={() => handleClick(5)}>
            <i className="fa fa-angle-down" />
          </div>
        </li>
        <li className="dropdown">
          <Link href="/page-product">Media</Link>
          <ul style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>
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
          <div
            className="dropdown-btn"
            onClick={() => handleClick(6)}>
            <i className="fa fa-angle-down" />
          </div>
        </li>
        <li className="dropdown">
          <Link href="#">Enquiry</Link>
          <ul style={{ display: `${isActive.key == 7 ? "block" : "none"}` }}>
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
          <div
            className="dropdown-btn"
            onClick={() => handleClick(7)}>
            <i className="fa fa-angle-down" />
          </div>
        </li>
        <li>
          <Link href="/page-contact">Contact</Link>
        </li>
      </ul>
    </>
  );
}
