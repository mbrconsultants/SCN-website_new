import Link from "next/link"
const About7 = () => {
    return (
        <>
            <section className="about-section-ten">
                <div className="auto-container">
                    <div className="row">
                        <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 wow fadeInLeft">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">About Us</span>
                                    <h2>A smarter way to manage <br/> your money.</h2>
                                    <div className="text">It is a long established fact that a reader will be distracted by the readable hkklj content of a page when looking at its layout. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                                </div>
                                <ul className="list-style-two two-column">
                                    <li><i className="fa fa-check-circle"></i> Mistakes To Avoid</li>
                                    <li><i className="fa fa-check-circle"></i> Your Startup</li>
                                    <li><i className="fa fa-check-circle"></i> Knew About Fonts</li>
                                    <li><i className="fa fa-check-circle"></i> Winning Metric for Your Startup</li>
                                </ul>
                                <div className="row">
                                    <div className="info-box col-lg-6 col-md-6 col-sm-6">
                                        <div className="inner-box">
                                            <i className="icon flaticon-diploma"></i>
                                            <h5 className="title">Full Time Employee</h5>
                                        </div>
                                    </div>
                                    <div className="info-box col-lg-6 col-md-6 col-sm-6">
                                        <div className="inner-box">
                                            <i className="icon flaticon-diamond"></i>
                                            <h5 className="title">Award Winner</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-box">
                                    <Link href="page-about" className="theme-btn btn-style-one"><span className="btn-title">Read More <i className="fa fa-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>

                        <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12 wow fadeInRight" data-wow-delay="300ms">
                            <div className="inner-column">
                                <div className="icon shape-5"></div>
                                <div className="icon icon-line"></div>
                                <div className="image-box">
                                    <figure className="image overlay-anim"><img src="images/resource/about10-1.jpg" alt="Image"/></figure>
                                    <figure className="image-2 overlay-anim"><img src="images/resource/about10-2.jpg" alt="Image"/></figure>
                                    <div className="info-box">
                                        <div className="inner-box">
                                            <div className="icon-box"><i className="icon flaticon-diamond"></i></div>
                                            <div className="title-box">
                                                <div className="text">Established</div>
                                                <h4 className="count">2020</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="experience-box">
                                    <div className="inner-box wow fadeInUp" data-wow-delay="900ms">
                                        <i className="icon fa fa-award"></i>
                                        <div className="about-icon">
                                            <h5 className="title">Best Awarded Company</h5>
                                            <div className="text">Lorem ipsum dolor sit amet, <br/> consetetur sadipscing elitr, sed</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default About7