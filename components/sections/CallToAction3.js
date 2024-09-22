import Link from "next/link"
const CallToAction3 = () => {
    return (
        <>
            <section className="call-to-action-three wow fadeInUp" data-wow-delay="300ms">
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="links-column">
                            <h6 className="title">Follow Us:</h6>
                            <ul className="social-icons">
                                <li><Link href="#"><i className="icon fab fa-facebook-f"></i></Link></li>
                                <li><Link href="#"><i className="icon fab fa-twitter"></i></Link></li>
                                <li><Link href="#"><i className="icon fab fa-instagram"></i></Link></li>
                            </ul>
                        </div>
                        <div className="content-column">
                            <div className="sec-title light">
                                <span className="sub-title">we are hire</span>
                                <h4 className="title">Show us Your Business Plan, We are Ready to Help you</h4>
                            </div>
                            <div className="btn-box">
                                <Link href="page-contact" className="theme-btn btn-style-one light-bg"><span className="btn-title">Contact Us</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default CallToAction3