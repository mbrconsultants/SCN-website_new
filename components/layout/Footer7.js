import Link from "next/link"

export default function Footer7() {
    return (
        <>
            <footer className="main-footer footer-style-seven">
                <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/9.jpg)' }}></div>
                <div className="footer-upper">
                    <div className="auto-container">
                        <div className="outer-box">
                            <div className="upper-left">
                                <div className="logo"><img src="images/logo-white.png" alt="Logo"/></div>
                            </div>
                            <div className="upper-right">
                                <Link href="tel:+92(8800)9806" className="info-btn wow fadeInUp">
                                    <i className="icon fa fa-phone"></i>
                                    <small>Need Help?</small>
                                    <strong>(808) 555-0111</strong>
                                </Link>
                                <ul className="social-icon-two">
                                    <li className="title">Follow us:</li>
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
                                <div className="footer-widget blog-widget">
                                    <h4 className="widget-title">Recent blog</h4>
                                    <div className="widget-content">
                                        <article className="recent-post">
                                            <div className="inner">
                                                <figure className="post-thumb"><Link href="#"><img src="images/resource/footer7-thumb1.jpg" alt=""/></Link></figure>
                                                <div className="post-info"><i className="fas fa-calendar-alt"></i> January 11, 2023</div>
                                                <div className="post-title"><Link href="#">The standard chunk of Lorem Ipsum</Link></div>
                                            </div>
                                        </article>

                                        <article className="recent-post">
                                            <div className="inner">
                                                <figure className="post-thumb"><Link href="#"><img src="images/resource/footer7-thumb2.jpg" alt=""/></Link></figure>
                                                <div className="post-info"><i className="fas fa-calendar-alt"></i> January 11, 2023</div>
                                                <div className="post-title"><Link href="#">The standard chunk of Lorem Ipsum</Link></div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="footer-column col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="footer-widget services-widget">
                                    <h4 className="widget-title">Our Services</h4>
                                    <div className="widgets-content">
                                        <ul className="user-links light style-two">
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
                                <div className="footer-widget newsletter-widget">
                                    <div className="widget-content">
                                        <div className="newsletter-box">
                                            <h4 className="widget-title">Newsletter</h4>
                                            <div className="text">Lorem Ipsum is simply is dumi omy is text  dummy text.</div>
                                            <div className="newsletter-form-one light">
                                                <form method="post" action="#">
                                                    <div className="form-group">
                                                        <input type="email" name="email" className="email" placeholder="Email here" required/>
                                                        <button type="button" className="theme-btn"><i className="far fa-paper-plane"></i></button>
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
