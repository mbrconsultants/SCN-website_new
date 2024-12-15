import Link from "next/link"
import Menu from "./Menu"
import MobileMenu from "./MobileMenu"
import React, { useState, useEffect } from "react";

export default function Header6({ scroll, isSearch, handleSearch, isMobileMenu, handleMobileMenu }) {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const searchData = [
        { name: "Home", url: "/" },
        { name: "History of the court", url: "court-history" },
        { name: "Supreme Court Judgments", url: "/page-judgements" },
        { name: "Departments", url: "/departments" },
        // Add more links as needed
    ];

    const handleWebsiteSearch = (e) => {
        const input = e.target.value.toLowerCase();
        setQuery(input);

        // Filter data based on query
        if (input.length > 0) {
            const filteredSuggestions = searchData.filter((item) =>
                item.name.toLowerCase().includes(input)
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    return (
        <>
            <header
                className={`main-header header-style-six ${isSearch ? "moblie-search-active" : ""
                    }`}>
                <div className="main-box">
                    <div className="logo-box">
                        <div className="logo">
                            <Link href="/">
                                <img
                                    src="/images/logo-white.png"
                                    alt="Archisky"
                                    title="Archisky"
                                    style={{ height: "70px", width: "70px" }}
                                />
                            </Link>
                        </div>
                    </div>

                    <div className="nav-outer">
                        <nav className="nav main-menu">
                            <Menu />
                        </nav>

                        <div className="outer-box">
                            <button
                                className="ui-btn search-btn"
                                onClick={handleSearch}>
                                <i className="icon fa fa-search"></i>
                            </button>



                            <button
                                className="ui-btn ui-btn toggle-hidden-bar"
                                onClick={handleMobileMenu}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="24"
                                    viewBox="0 0 30 24"
                                    fill="none">
                                    <line
                                        y1="12"
                                        x2="30"
                                        y2="12"
                                        stroke="white"
                                        strokeWidth="3"
                                    />
                                    <path
                                        d="M5 22H30"
                                        stroke="white"
                                        strokeWidth="3"
                                    />
                                    <path
                                        d="M10 2H30"
                                        stroke="white"
                                        strokeWidth="3"
                                    />
                                </svg>
                            </button>

                            <Link
                                href="tel:+92(8800)9806"
                                className="info-btn">
                                <i className="icon fa fa-phone"></i>
                                <small>Requesting A Call:</small>
                                <strong>+2347039983117</strong>
                            </Link>

                            <div
                                className="mobile-nav-toggler"
                                onClick={handleMobileMenu}>
                                <span className="icon lnr-icon-bars"></span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu  */}
                <div className="mobile-menu">
                    <div
                        className="menu-backdrop"
                        onClick={handleMobileMenu}
                    />
                    {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                    <nav className="menu-box">
                        <div className="upper-box">
                            <div className="nav-logo">
                                <Link href="/">
                                    <img
                                        src="/images/logo-white.png"
                                        alt=""
                                    />
                                </Link>
                            </div>
                            <div
                                className="close-btn"
                                onClick={handleMobileMenu}>
                                <i className="icon fa fa-times" />
                            </div>
                        </div>
                        <MobileMenu />
                        <ul className="contact-list-one">
                            <li>
                                {/* Contact Info Box */}
                                <div className="contact-info-box">
                                    <i className="icon lnr-icon-phone-handset" />
                                    <span className="title">Call Now</span>
                                    <Link href="/tel:+2347039983117">+2347039983117</Link>
                                </div>
                            </li>
                            <li>
                                {/* Contact Info Box */}
                                <div className="contact-info-box">
                                    <span className="icon lnr-icon-envelope1" />
                                    <span className="title">Send Email</span>
                                    <Link href="/mailto:info@supremecourt.gov.ng">
                                        info@supremecourt.gov.ng
                                    </Link>
                                </div>
                            </li>
                            <li>
                                {/* Contact Info Box */}
                                <div className="contact-info-box">
                                    <span className="icon lnr-icon-clock" />
                                    <span className="title">Send Email</span>
                                    Mon - Fri 8:00 - 4:00, Sunday - CLOSED
                                </div>
                            </li>
                        </ul>
                        <ul className="social-links">
                            <li>
                                <Link href="/#">
                                    <i className="fab fa-twitter" />
                                </Link>
                            </li>
                            <li>
                                <Link href="/#">
                                    <i className="fab fa-facebook-f" />
                                </Link>
                            </li>
                            <li>
                                <Link href="/#">
                                    <i className="fab fa-pinterest" />
                                </Link>
                            </li>
                            <li>
                                <Link href="/#">
                                    <i className="fab fa-instagram" />
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* End Mobile Menu */}
                {/* Header Search */}
                <div className="search-popup">
                    <span
                        className="search-back-drop"
                        onClick={handleSearch}
                    />
                    <button
                        className="close-search"
                        onClick={handleSearch}>
                        <span className="fa fa-times" />
                    </button>
                    <div className="search-inner">
                        <form
                            method="post"
                            action="">
                            <div className="form-group">
                                <input
                                    type="search"
                                    name="search-field"
                                    value={query} onChange={handleWebsiteSearch}
                                    placeholder="Search..."
                                    required
                                />
                                <button type="submit">
                                    <i className="fa fa-search" />
                                </button>
                            </div>
                        </form>
                        {suggestions.length > 0 && (
                            <ul className="suggestions-list p-2" style={{ background: '#008751' }}>
                                {suggestions.map((suggestion, index) => (
                                    <li key={index}>
                                        <Link href={suggestion.url}>
                                            <p className="text-white">{suggestion.name}</p>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
                {/* End Header Search */}
                {/* Sticky Header  */}
                <div
                    className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""
                        }`}>
                    <div className="auto-container">
                        <div className="inner-container">
                            {/*Logo*/}
                            <div className="logo">
                                <Link href="/">
                                    <img
                                        src="/images/logo.png"
                                        alt=""
                                    />
                                </Link>
                            </div>
                            {/*Right Col*/}
                            <div className="nav-outer">
                                {/* Main Menu */}
                                <nav className="main-menu">
                                    <div className="navbar-collapse show collapse clearfix">
                                        <Menu />
                                    </div>
                                </nav>
                                {/* Main Menu End*/}
                                {/*Mobile Navigation Toggler*/}
                                <div
                                    className="mobile-nav-toggler"
                                    onClick={handleMobileMenu}>
                                    <span className="icon lnr-icon-bars" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Sticky Menu */}
            </header>
        </>
    );
}
