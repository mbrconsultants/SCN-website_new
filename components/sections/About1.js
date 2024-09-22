import Link from "next/link"
const About1 = () => {
    return (
        <>
        <section className="about-section">
            <div className="auto-container">
                <div className="row">
                    <div className="content-column col-xl-6 col-lg-6 col-md-12 col-sm-12 wow fadeInLeft" data-wow-delay="300ms">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="sub-title">About Us</span>
                                <h2>Where architecture meets innovation</h2>
                                <div className="text">It is a long established fact that a reader will be distracted the readable content of a page when looking at its layout. Lorem Ipsum is simpl dummy text</div>
                            </div>
                            <div className="row">
                                <div className="info-box col-lg-6 col-md-6 col-sm-12">
                                    <div className="inner-box">
                                        <div className="title-box">
                                            <i className="icon flaticon-diamond"></i>
                                            <h4 className="title">20+ Year Of <br className="d-none d-lg-block"/> Experience</h4>
                                        </div>
                                        <div className="text">Lorem Ipsum is simply dummy text the printing and typesetting industry.</div>
                                    </div>
                                </div>
                                <div className="info-box col-lg-6 col-md-6 col-sm-12">
                                    <div className="inner-box">
                                        <div className="title-box">
                                            <i className="icon flaticon-handshake"></i>
                                            <h4 className="title">Total Project <br className="d-none d-lg-block"/> Completed</h4>
                                        </div>
                                    </div>
                                    <div className="text">Lorem Ipsum is simply dummy text the printing and typesetting industry.</div>
                                </div>
                            </div>
                            <div className="bottom-box">
                                <Link href="tel:+92(8800)9806" className="info-btn wow fadeInUp">
                                    <i className="icon fa fa-phone"></i>
                                    <small>Requesting A Call:</small>
                                    <strong>(629) 555-0129</strong>
                                </Link>
                                <div className="author-box">
                                    <div className="inner-box wow fadeInLeft">
                                        <figure className="image"><img src="/images/resource/about1-thumb1.png" alt="Thumb"/></figure>
                                        <div className="author-info">
                                            <div className="name">Jenny Willson</div>
                                            <div className="designation">Web Designer</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div className="image-column col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column wow fadeInRight" data-wow-delay="200ms">
                            <div className="image-box">
                                <figure className="image overlay-anim"><img src="/images/resource/about1-1.jpg" alt="Image"/></figure>
                                <figure className="image-2 overlay-anim"><img src="/images/resource/about1-2.jpg" alt="Image"/></figure>
                                <div className="experience-box wow fadeInUp">
                                    <div className="inner-box">
                                        <i className="icon flaticon-winner"></i>
                                        <div className="title-box">
                                            <h5 className="title mb-2">250 +</h5>
                                            <h6 className="mb-0 text-white">Website Lounged</h6>
                                        </div>
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
export default About1