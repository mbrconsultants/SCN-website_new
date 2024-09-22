import Link from "next/link"
const Team4 = () => {
    return (
        <>
            <section className="team-section-four">    
                <div className="large-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">Meet OurTeam members</span>
                        <h2>Designing with passion, creating <br/> with precision</h2>
                    </div>

                    <div className="row">
                        <div className="team-block-four col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="page-team-details.html"><img src="images/resource/team5-1.jpg" alt=""/></Link></figure>
                                </div>
                                <div className="info-box">
                                    <h4 className="name"><Link href="page-team-details.html">Bessie Cooper</Link></h4>
                                    <span className="designation">Medical Assistant</span>
                                    <div className="social-icons">
                                        <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                        <Link href="#"><i className="fab fa-twitter"></i></Link>
                                        <Link href="#"><i className="fab fa-linkedin"></i></Link>
                                        <Link href="#"><i className="fab fa-pinterest"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="team-block-four col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="page-team-details.html"><img src="images/resource/team5-2.jpg" alt=""/></Link></figure>
                                </div>
                                <div className="info-box">
                                    <h4 className="name"><Link href="page-team-details.html">Ronald Richard</Link></h4>
                                    <span className="designation">Nursing Assistant</span>
                                    <div className="social-icons">
                                        <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                        <Link href="#"><i className="fab fa-twitter"></i></Link>
                                        <Link href="#"><i className="fab fa-linkedin"></i></Link>
                                        <Link href="#"><i className="fab fa-pinterest"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="team-block-four col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="page-team-details.html"><img src="images/resource/team5-3.jpg" alt=""/></Link></figure>
                                </div>
                                <div className="info-box">
                                    <h4 className="name"><Link href="page-team-details.html">Albert Flores</Link></h4>
                                    <span className="designation">Dog Trainer</span>
                                    <div className="social-icons">
                                        <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                        <Link href="#"><i className="fab fa-twitter"></i></Link>
                                        <Link href="#"><i className="fab fa-linkedin"></i></Link>
                                        <Link href="#"><i className="fab fa-pinterest"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="team-block-four col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="page-team-details.html"><img src="images/resource/team5-3.jpg" alt=""/></Link></figure>
                                </div>
                                <div className="info-box">
                                    <h4 className="name"><Link href="page-team-details.html">Albert Flores</Link></h4>
                                    <span className="designation">Dog Trainer</span>
                                    <div className="social-icons">
                                        <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                        <Link href="#"><i className="fab fa-twitter"></i></Link>
                                        <Link href="#"><i className="fab fa-linkedin"></i></Link>
                                        <Link href="#"><i className="fab fa-pinterest"></i></Link>
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
export default Team4