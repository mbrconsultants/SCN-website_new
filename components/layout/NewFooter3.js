import Link from "next/link"

export default function NewFooter3() {
    return (
        <>
            <footer className="main-footer footer-style-four">
                <div className="widgets-section">
                    <div className="auto-container">
                        <div className="row">
                            
                            {/* <div className="footer-column col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="footer-widget about-widget">
                                    <div className="widget-content">
                                        <div className="logo"><Link href="/"><img src="images/logo-white.png" style={{ height: "70px", width: "70px" }} alt="" title="Supreme court"/></Link></div>
                                        <div className="text">Lorem Ipsum is simply is dumi omy is text Loremo Ipsum is simply is out no our o dummy text.</div>
                                        <ul className="social-icon-two">
                                            <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
                                            <li><Link href="#"><i className="fab fa-pinterest-p"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div> */}
                            
                            <div className="footer-column col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="footer-widget links-widget">
                                    <h4 className="widget-title">Useful Links</h4>
                                    <div className="widgets-content">
                                        <ul className="user-links light">
                                            <li><i className="fa fa-angle-right"></i> <Link href="https://njc.gov.ng/">National Judicial Council</Link></li>
                                            <li><i className="fa fa-angle-right"></i> <Link href="http://www.fjsconline.gov.ng/">Federal Judicial Service Commission</Link></li>
                                            <li><i className="fa fa-angle-right"></i> <Link href="http://www.courtofappeal.com.ng/">Court of Appeal Nigeria</Link></li>
                                            <li><i className="fa fa-angle-right"></i> <Link href="http://fhc.gov.ng/">Federal High Court</Link></li>
                                            <li><i className="fa fa-angle-right"></i> <Link href="http://nicn.gov.ng/">National Industrial Court of Nigeria</Link></li>
                                            <li><i className="fa fa-angle-right"></i> <Link href="#">Sharia Court of Appeal</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="footer-column col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="footer-widget links-widget">
                                    <h4 className="widget-title">Quick Links</h4>
                                    <div className="widgets-content">
                                        <ul className="user-links light">
                                            <li><i className="fa fa-angle-right"></i> <Link href="#">Supreme Court Act</Link></li>
                                            <li><i className="fa fa-angle-right"></i> <Link href="#">Supreme Court Rules</Link></li>
                                            <li><i className="fa fa-angle-right"></i> <Link href="#">Practice Direction</Link></li>
                                            <li><i className="fa fa-angle-right"></i> <Link href="#">Mediation Rules</Link></li>
                                            <li><i className="fa fa-angle-right"></i> <Link href="https://lawyerenrollment.com.ng/">Lawyers Enrollment</Link></li>
                                        </ul>
                                        <ul className="social-icon-two">
                                            <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
                                            <li><Link href="#"><i className="fab fa-youtube"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="footer-column col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="footer-widget contact-widget">
                                    <h4 className="widget-title">Contact Us</h4>
                                    <div className="widgets-content">
                                        <div className="text">Send us a message | Visit our office</div>
                                        <ul className="contact-list">
                                            <li><i className="icon fa fa-phone"></i><Link href="#">07039983117</Link></li>
                                            <li><i className="icon flaticon-email"></i><Link href="#">info@supremecourt.gov.ng</Link></li>
                                            <li><i className="icon fa fa-map-marker-alt"></i>Three Arms Zone, PMB 308, Abuja, <br/> Nigeria.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="footer-column col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="footer-widget newsletter-widget">

                                    <iframe src="https://www.youtube.com/embed/E_eFMyFpjlg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="copyright-text">© 2024 | All Rights Reserved | Supreme Court of Nigeria</div>
                            <ul className="footer-nav">
                                <li><Link href="https://mbrcomputers.com">Powered by MBR Computers Consultant Ltd </Link></li>
                                {/* <li><Link href="#">Privacy Policy</Link></li>
                                <li><Link href="#">Contact us</Link></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
