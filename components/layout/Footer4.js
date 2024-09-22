import Link from "next/link"

export default function Footer4() {
    return (
        <>
            <footer className="main-footer footer-style-four">
                <div className="widgets-section">
                    <div className="auto-container">
                        <div className="row">
                            
                            <div className="footer-column col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="footer-widget about-widget">
                                    <div className="widget-content">
                                        <div className="logo"><Link href="/"><img src="images/logo-white.png" alt="" title="Archisky"/></Link></div>
                                        <div className="text">Lorem Ipsum is simply is dumi omy is text Loremo Ipsum is simply is out no our o dummy text.</div>
                                        <ul className="social-icon-two">
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
                                        <ul className="user-links light">
                                            <li><i className="fa fa-angle-right"></i> <Link href="#">Software Development</Link></li>
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
                                        <div className="text">Lorem Ipsum is simply is dumi om is text  dummy text</div>
                                        <ul className="contact-list">
                                            <li><i className="icon fa fa-envelope"></i><Link href="mailto:info@example.com">info@example.com</Link></li>
                                            <li><i className="icon fa fa-map-marker-alt"></i>6391 Elgin St. Celina, 10299</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="footer-column col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="footer-widget newsletter-widget">
                                    <div className="widget-content">
                                        <div className="newsletter-box">
                                            <h4 className="widget-title">Newsletter</h4>
                                            <div className="text">Lorem Ipsum is simply is dumi omy is text  dummy text.</div>
                                            <div className="newsletter-form-one light">
                                                <form method="post" action="#">
                                                    <div className="form-group">
                                                        <input type="email" name="email" className="email" placeholder="Email here" required=""/>
                                                        <button type="button" className="theme-btn"><i className="fa fa-paper-plane"></i></button>
                                                    </div>
                                                </form>
                                            </div> 
                                        </div>
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
