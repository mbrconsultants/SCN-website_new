'use client'
import Link from "next/link"
import { useState } from 'react'

export default function MobileMenu() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
      <>
        <ul className="navigation clearfix">
          {/*Keep This Empty / Menu will come through Javascript*/}
          <li className="current ">
            <Link href="/">Home</Link>
            <ul
              style={{
                display: `${isActive.key == 1 ? "block" : "none"}`,
              }}></ul>
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
                <Link href="/court-jurisdiction">
                  Jurisdiction of the Court
                </Link>
              </li>
              <li>
                <Link href="/management-staff">Management Staff</Link>
              </li>
              <li>
                <Link href="/page-faq">Past Chief Registrars</Link>
              </li>
              <li>
                <Link href="/page-error">Departments</Link>
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
            <div
              className="dropdown-btn"
              onClick={() => handleClick(3)}>
              <i className="fa fa-angle-down" />
            </div>
          </li>
          <li className="dropdown">
            <Link href="/page-services">Appeal</Link>
            <ul style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
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
            <div
              className="dropdown-btn"
              onClick={() => handleClick(6)}>
              <i className="fa fa-angle-down" />
            </div>
          </li>
          <li className="dropdown">
            <Link href="/news-grid">Enquiry</Link>
            <ul style={{ display: `${isActive.key == 7 ? "block" : "none"}` }}>
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
                <Link href="/news-details">
                  Requirements for Change of Name
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
