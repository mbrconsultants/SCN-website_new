import Link from "next/link"

export default function Footer3() {
    return (
        <>
            <footer className="main-footer footer-style-three">
                <div className="widgets-section">
                    <div className="auto-container">
                        <div className="row">
                            <div className="footer-column col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="footer-widget newsletter-widget">
                                    <div className="logo"><Link href="/"><img src="images/logo.png" alt="" title="Archisky"/></Link></div>

                                    <div className="widget-content">
                                        <h4 className="title">Newsletter</h4>
                                        <div className="text">Lorem Ipsum is simpl dumi omy is text  dummy text</div>
                                        <div className="newsletter-form-two">
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
                            
                            <div className="footer-column col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="footer-widget links-widget">
                                    <h4 className="widget-title">Our Services</h4>
                                    <div className="widgets-content">
                                        <ul className="user-links style-two">
                                            <li><Link href="#">Tech Solutions</Link></li>
                                            <li><Link href="#">Digital Marketing</Link></li>
                                            <li><Link href="#">Web Development</Link></li>
                                            <li><Link href="#">IT Consulting</Link></li>
                                            <li><Link href="#">Data Analytics</Link></li>
                                            <li><Link href="#">Others Service</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="footer-column col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="footer-widget contact-widget">
                                    <h4 className="widget-title">Contact</h4>
                                    <div className="widgets-content">
                                        <div className="text">Lorem Ipsum is simply is dumi om is text  dummy text dmmy text</div>
                                        <ul className="contact-info-list">
                                            <li><i className="icon fa fa-envelope"></i><Link href="mailto:info@example.com">info@example.com</Link></li>
                                            <li><i className="icon fa fa-map-marker-alt"></i>6391 Elgin St. Celina, 10299</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="footer-column col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="footer-widget gallery-widget">
                                    <h4 className="widget-title">Photo Gallery</h4>
                                    <div className="widget-content">
                                        <div className="insta-gallery">
                                            <figure className="image"><Link href="#"><img src="images/resource/footer3-1.jpg" alt=""/></Link></figure>
                                            <figure className="image"><Link href="#"><img src="images/resource/footer3-2.jpg" alt=""/></Link></figure>
                                            <figure className="image"><Link href="#"><img src="images/resource/footer3-3.jpg" alt=""/></Link></figure>
                                            <figure className="image"><Link href="#"><img src="images/resource/footer3-4.jpg" alt=""/></Link></figure>
                                            <figure className="image"><Link href="#"><img src="images/resource/footer3-5.jpg" alt=""/></Link></figure>
                                            <figure className="image"><Link href="#"><img src="images/resource/footer3-6.jpg" alt=""/></Link></figure>
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
