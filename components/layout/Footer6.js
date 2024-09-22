import Link from "next/link"

export default function Footer6() {
    return (
        <>
            <footer className="main-footer footer-style-six">
                <div className="widgets-section pt-0">
                    <div className="auto-container">
                        <div className="row">
                            
                            <div className="footer-column col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="footer-widget about-widget">
                                    <div className="widget-content">
                                        <div className="logo"><Link href="/"><img src="images/logo.png" alt="Logo" title="Archisky"/></Link></div>
                                        <div className="text">Lorem Ipsum is simply is dumi omy is text Loremo Ipsum is simply is out no our o dummy text.</div>
                                        <ul className="social-icon-three">
                                            <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
                                            <li><Link href="#"><i className="fab fa-pinterest-p"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="footer-column col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="footer-widget links-widget">
                                    <h4 className="widget-title">Get Free Link</h4>
                                    <div className="widgets-content">
                                        <ul className="user-links style-two">
                                            <li><Link href="#">Diagnosis</Link></li>
                                            <li><Link href="#">Cancer</Link></li>
                                            <li><Link href="#">Heart Section</Link></li>
                                            <li><Link href="#">Kidney</Link></li>
                                            <li><Link href="#">Dibetics</Link></li>
                                            <li><Link href="#">Others</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="footer-column col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="footer-widget services-widget">
                                    <h4 className="widget-title">Our Services</h4>
                                    <div className="widgets-content">
                                        <ul className="user-links style-two">
                                            <li><Link href="#">Health Service</Link></li>
                                            <li><Link href="#">Cancer Service</Link></li>
                                            <li><Link href="#">Heart Service</Link></li>
                                            <li><Link href="#">Kidney Service</Link></li>
                                            <li><Link href="#">Dibetics</Link></li>
                                            <li><Link href="#">Others Service</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="footer-column col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="footer-widget address-widget">
                                    <h4 className="widget-title">Address</h4>
                                    <div className="widget-content">
                                        <ul className="contact-list">
                                            <li className="contact-info">
                                                <i className="icon fa fa-paper-plane"></i>
                                                <div className="text">2972 Westheimer Rd. Santa Ana, Illinois 85486</div>
                                            </li>
                                            <li className="contact-info">
                                                <span className="icon fa fa-envelope"></span>
                                                <div className="text"><Link href="mailto:debbie.baker@example.com">debbie.baker@example.com</Link></div>
                                                <div className="text"><Link href="mailto:nevaeh.simm@example.com">nevaeh.simm@example.com</Link></div>
                                            </li>
                                            <li className="contact-info">
                                                <span className="icon fa fa-phone"></span>
                                                <div className="text"><Link href="tel:+123456789">(405) 555-0128</Link></div>
                                                <div className="text"><Link href="tel:+123456789">(629) 555-0129</Link></div>
                                            </li>
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
