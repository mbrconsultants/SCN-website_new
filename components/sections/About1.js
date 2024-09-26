import Link from "next/link"
const About1 = () => {
    return (
        <>
            <section className="about-section">
                <div className="auto-container">
                    <div className="row">
                        <div className="image-column col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column wow fadeInRight" data-wow-delay="200ms">
                                <div className="image-box">
                                    <figure className="image overlay-anim"><img src="/images/resource/kekere-cjn.jpg" alt="Image" /></figure>
                                    {/* <figure className="image-2 overlay-anim"><img src="/images/resource/about1-2.jpg" alt="Image" /></figure> */}
                                    <div className="experience-box wow fadeInUp">
                                        <div className="inner-box">
                                            {/* <i className="icon flaticon-winner"></i> */}
                                            <div className="title-box">
                                                <h5 className="title mb-2">Hon. Justice Kudirat Motonmori Olatokunbo Kekere-Ekun, CFR </h5>
                                                <h6 className="mb-0 text-white">Chief Justice of Nigeria</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="content-column col-xl-6 col-lg-6 col-md-12 col-sm-12 wow fadeInLeft" data-wow-delay="300ms">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">About</span>
                                    <h2>Brief background of the CJN</h2>
                                    <div className="text">
                                    Motonmori Olatokunbo KEKERE-EKUN CFR, JSC (Nee Fasinro) was born on May 7, 1958. She obtained her LL. B in 1980 from the University of Lagos and LL.M from the London School of Economic and Political Science in November 1983. She was called to the Nigerian Bar on 10th July 1981.
                                    From 1985 to 1989 she was in private practise and was later appointed a Senior Magistrate Grade II, Lagos State Judiciary in December 1989. She was appointed a Judge of the High Court of Lagos State on July 19, 1996. She served as Chairman Robbery and Firearms Tribunal, Zone II, Ikeja, Lagos from November 1996 to May 1999.
                                    Hon. Justice Kekere-Ekun was elevated to the Court of Appeal on 22nd September 2004 where she served in various Divisions of the Court and as presiding Justice of two Divisions of the Court (Makurdi & Akure).
                                    </div>
                                </div>
                                <div>
                                    {/* <Link href="#" className="theme-btn btn-style-one hover-light"><span className="btn-title">Read More...</span></Link> */}
                                </div>
                                {/* <div className="row">
                                    <div className="info-box col-lg-6 col-md-6 col-sm-12">
                                        <div className="inner-box">
                                            <div className="title-box">
                                                <i className="icon flaticon-diamond"></i>
                                                <h4 className="title">20+ Year Of <br className="d-none d-lg-block" /> Experience</h4>
                                            </div>
                                            <div className="text">Lorem Ipsum is simply dummy text the printing and typesetting industry.</div>
                                        </div>
                                    </div>
                                    <div className="info-box col-lg-6 col-md-6 col-sm-12">
                                        <div className="inner-box">
                                            <div className="title-box">
                                                <i className="icon flaticon-handshake"></i>
                                                <h4 className="title">Total Project <br className="d-none d-lg-block" /> Completed</h4>
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
                                            <figure className="image"><img src="/images/resource/about1-thumb1.png" alt="Thumb" /></figure>
                                            <div className="author-info">
                                                <div className="name">Jenny Willson</div>
                                                <div className="designation">Web Designer</div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};
export default About1