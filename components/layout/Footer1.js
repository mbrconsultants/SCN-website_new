import Link from "next/link"

export default function Footer1() {
    return (
        <>
        <footer className="main-footer footer-style-one">
        <div className="footer-upper">
            <div className="auto-container">
                <div className="outer-box">
                    <div className="upper-left">
                        <div className="logo"><Link href="#"><img src="images/logo-white.png" alt="Logo" title="Archisky"/></Link></div>
                    </div>
                    <div className="upper-right">
                        <ul className="footer-social-icons">
                            <li>Follow us:</li>
                            <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                            <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                            <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
                            <li><Link href="#"><i className="fab fa-pinterest"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="widgets-section">
            <div className="auto-container">
                <div className="row">
                    <div className="footer-column col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="footer-widget about-widget">
                            <h4 className="widget-title">About Us</h4>
                            <div className="widget-content">
                                <div className="text">Lorem Ipsum is simply is dumi oni is text Loremo Ipsum is simply is out  dount no ourdummy text</div>
                                <div className="newsletter-form-one">
                                    <form method="post" action="contact-us.html">
                                        <input type="email" name="email" placeholder="E-mail" required/>
                                        <button type="submit" className="theme-btn readmore overlay-anim"><i className="icon fa fa-paper-plane"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-column col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="footer-widget services-widget">
                            <h4 className="widget-title">Our Services</h4>
                            <div className="widgets-content">
                                <ul className="user-links style-two light">
                                    <li><Link href="#">Tech Solutions</Link></li>
                                    <li><Link href="#">Digital Marketing</Link></li>
                                    <li><Link href="#">Web Development</Link></li>
                                    <li><Link href="#">IT Consulting</Link></li>
                                    <li><Link href="#">Data Analysis</Link></li>
                                    <li><Link href="#">Others Service</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-column col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="footer-widget links-widget">
                            <h4 className="widget-title">Get Free Link</h4>
                            <div className="widgets-content">
                                <ul className="user-links light">
                                    <li><i className="fa fa-angle-right"></i>  <Link href="#">Software Development</Link></li>
                                    <li><i className="fa fa-angle-right"></i> <Link href="#">Data Analytics</Link></li>
                                    <li><i className="fa fa-angle-right"></i> <Link href="#">IT Consulting</Link></li>
                                    <li><i className="fa fa-angle-right"></i> <Link href="#">UI/UX Design</Link></li>
                                    <li><i className="fa fa-angle-right"></i> <Link href="#">Network Solutions</Link></li>
                                    <li><i className="fa fa-angle-right"></i> <Link href="#">Others</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-column col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="footer-widget contact-widget">
                            <h4 className="widget-title">Contact</h4>
                            <div className="widgets-content">
                                <div className="text">Lorem Ipsum is simply is dumi om is text  dummy text dmmy text</div>
                                <ul className="contact-list-two">
                                    <li><i className="icon fa fa-envelope"></i><Link href="mailto:info@example.com">info@example.com</Link></li>
                                    <li><i className="icon fa fa-map-marker-alt"></i>6391 Elgin St. Celina, 10299</li>
                                    <li><i className="icon fa fa-phone"></i><Link href="tel:+123456789">(629) 555-0129</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="auto-container">
                <div className="inner-container">
                    <div className="copyright-text">© archisky kodesolution | All Rights Reserved</div>
                    <ul className="footer-nav">
                        <li><Link href="#">Terms & Condition</Link></li>
                        <li><Link href="#">Privacy Policy</Link></li>
                        <li><Link href="#">Contact us</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        </footer>

        </>
    )
}
