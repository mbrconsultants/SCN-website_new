import Link from "next/link"
import Menu from "./Menu"
import MobileMenu from "./MobileMenu"

export default function Header4({ scroll, isSearch, handleSearch, isMobileMenu, handleMobileMenu }) {
    return (
        <>
            <header className={`main-header header-style-four ${isSearch ? "moblie-search-active" : ""}`}>

            <div className="header-top">
            <div className="auto-container">
                <div className="inner-container">
                    <div className="top-left">
                        <ul className="list-style-one light">
                            <li><i className="icon fa fa-envelope"></i> <Link href="mailto:info@example.com">info@example.com</Link></li>
                            <li><i className="icon fa fa-map-marker-alt"></i> 6391 Elgin St. Celifffna, 10299</li>
                        </ul>
                    </div>

                    <div className="top-right">
                        <ul className="social-icon-one light">
                            <li><Link href="#"><span className="fab fa-facebook-f"></span></Link></li>
                            <li><Link href="#"><span className="fab fa-instagram"></span></Link></li>
                            <li><Link href="#"><span className="fab fa-twitter"></span></Link></li>
                            <li><Link href="#"><span className="fab fa-linkedin"></span></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="header-lower">
            <div className="auto-container">
                <div className="main-box">
                    <div className="logo"><Link href="/"><img src="images/logo.png" style={{ height: "70px", width: "70px" }} alt="" title="Archisky"/></Link></div>

                    <div className="nav-outer">    
                        <nav className="nav main-menu">
                        <Menu />
                        </nav>
                    </div>

                    <div className="outer-box">
                        <button className="ui-btn search-btn" onClick={handleSearch}>
                            <i className="icon fa fa-search"></i>
                        </button>

                        <button className="ui-btn toggle-hidden-bar" onClick={handleMobileMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="24" viewBox="0 0 31 24" fill="none">
                                <line x1="0.0117188" y1="12" x2="30.0117" y2="12" stroke="#30373E"/>
                                <path d="M5.01172 22H30.0117" stroke="#30373E"/>
                                <path d="M10.0117 2H30.0117" stroke="#30373E"/>
                            </svg>
                        </button>
                        
                        <button className="mobile-nav-toggler" onClick={handleMobileMenu}><span className="icon lnr-icon-bars"></span></button>
                    </div>

                </div>
            </div>
        </div>
                {/* Mobile Menu  */}
                <div className="mobile-menu">
                    <div className="menu-backdrop" onClick={handleMobileMenu} />
                    {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                    <nav className="menu-box">
                        <div className="upper-box">
                            <div className="nav-logo"><Link href="/"><img src="/images/logo-white.png" alt=""/></Link></div>
                            <div className="close-btn" onClick={handleMobileMenu}><i className="icon fa fa-times" /></div>
                        </div>
                        <MobileMenu />
                        <ul className="contact-list-one">
                            <li>
                                {/* Contact Info Box */}
                                <div className="contact-info-box">
                                    <i className="icon lnr-icon-phone-handset" />
                                    <span className="title">Call Now</span>
                                    <Link href="/tel:+92880098670">+92 (8800) - 98670</Link>
                                </div>
                            </li>
                            <li>
                                {/* Contact Info Box */}
                                <div className="contact-info-box">
                                    <span className="icon lnr-icon-envelope1" />
                                    <span className="title">Send Email</span>
                                    <Link href="/mailto:help@company.com">help@company.com</Link>
                                </div>
                            </li>
                            <li>
                                {/* Contact Info Box */}
                                <div className="contact-info-box">
                                    <span className="icon lnr-icon-clock" />
                                    <span className="title">Send Email</span>
                                    Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                                </div>
                            </li>
                        </ul>
                        <ul className="social-links">
                            <li><Link href="/#"><i className="fab fa-twitter" /></Link></li>
                            <li><Link href="/#"><i className="fab fa-facebook-f" /></Link></li>
                            <li><Link href="/#"><i className="fab fa-pinterest" /></Link></li>
                            <li><Link href="/#"><i className="fab fa-instagram" /></Link></li>
                        </ul>
                    </nav>
                </div>{/* End Mobile Menu */}
                {/* Header Search */}
                <div className="search-popup">
                    <span className="search-back-drop" onClick={handleSearch} />
                    <button className="close-search" onClick={handleSearch}><span className="fa fa-times" /></button>
                    <div className="search-inner">
                        <form method="post" action="">
                            <div className="form-group">
                                <input type="search" name="search-field" placeholder="Search..." required />
                                <button type="submit"><i className="fa fa-search" /></button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* End Header Search */}
                {/* Sticky Header  */}
                <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
                    <div className="auto-container">
                        <div className="inner-container">
                            {/*Logo*/}
                            <div className="logo">
                                <Link href="/"><img src="/images/logo.png" alt="" /></Link>
                            </div>
                            {/*Right Col*/}
                            <div className="nav-outer">
                                {/* Main Menu */}
                                <nav className="main-menu">
                                    <div className="navbar-collapse show collapse clearfix">
                                        <Menu />
                                    </div>
                                </nav>{/* Main Menu End*/}
                                {/*Mobile Navigation Toggler*/}
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}><span className="icon lnr-icon-bars" /></div>
                            </div>
                        </div>
                    </div>
                </div>{/* End Sticky Menu */}
            </header >

        </>
    )
}
