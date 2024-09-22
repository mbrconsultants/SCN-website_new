import Link from "next/link"

export default function Footer5() {
    return (
        <>
            <footer className="main-footer footer-style-five">
                <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/8.png)' }}></div>
                <div className="widgets-section">
                    <div className="auto-container">
                        <div className="row">
                            
                            <div className="footer-column col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="footer-widget about-widget">
                                    <div className="widget-content">
                                        <div className="logo"><Link href="/"><img src="images/logo-white.png" alt="" title="Archisky"/></Link></div>
                                        <div className="text">Lorem Ipsum is simply is dumi oni is text Loremo Ipsum is simply is out  dount no ourdummy text</div>
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
                                        <div className="text">Lorem Ipsum is simply is dumi om is text  dummy text dmmy text</div>
                                        <ul className="contact-list">
                                            <li><i className="icon fa fa-envelope"></i><Link href="mailto:info@example.com">info@example.com</Link></li>
                                            <li><i className="icon fa fa-map-marker-alt"></i>6391 Elgin St. Celina, 10299</li>
                                            <li><i className="icon fa fa-phone"></i><Link href="tel:0123456789">(629) 555-0129</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="footer-column col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="footer-widget blog-widget">
                                    <h5 className="widget-title">Recent blog</h5>
                                    <div className="widget-content">
                                        <article className="recent-post">
                                            <div className="inner">
                                                <figure className="post-thumb"><Link href="#"><img src="images/resource/post-thumb-3.jpg" alt=""/></Link></figure>
                                                <div className="post-info"><i className="fas fa-calendar-alt"></i> January 11, 2023</div>
                                                <h6 className="post-title"><Link href="#">The standard chunk of Lorem Ipsum</Link></h6>
                                            </div>
                                        </article>

                                        <article className="recent-post">
                                            <div className="inner">
                                                <figure className="post-thumb"><Link href="#"><img src="images/resource/post-thumb-4.jpg" alt=""/></Link></figure>
                                                <div className="post-info"><i className="fas fa-calendar-alt"></i> January 11, 2023</div>
                                                <h6 className="post-title"><Link href="#">The standard chunk of Lorem Ipsum</Link></h6>
                                            </div>
                                        </article>
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
