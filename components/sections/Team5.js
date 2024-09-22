import Link from "next/link"
const Team5 = () => {
    return (
        <>
            <section className="team-section-five">    
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">Meet Our Team</span>
                        <h2>Immerse yourself in the art of <br/> architecture</h2>
                    </div>

                    <div className="row">
                        <div className="team-block-five wow fadeInUp col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="page-team-details"><img src="images/resource/team5-1.jpg" alt=""/></Link></figure>
                                </div>
                                <div className="info-box">
                                    <h4 className="name"><Link href="page-team-details">Bessie Cooper</Link></h4>
                                    <span className="designation">President of Sales</span>
                                    <div className="social-icons">
                                        <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                        <Link href="#"><i className="fab fa-twitter"></i></Link>
                                        <Link href="#"><i className="fab fa-linkedin"></i></Link>
                                        <Link href="#"><i className="fab fa-pinterest-p"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="team-block-five wow fadeInUp col-lg-4 col-md-6 col-sm-12" data-wow-delay="300ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="page-team-details"><img src="images/resource/team5-2.jpg" alt=""/></Link></figure>
                                </div>
                                <div className="info-box">
                                    <h4 className="name"><Link href="page-team-details">Albert Flores</Link></h4>
                                    <span className="designation">Web Designer</span>
                                    <div className="social-icons">
                                        <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                        <Link href="#"><i className="fab fa-twitter"></i></Link>
                                        <Link href="#"><i className="fab fa-linkedin"></i></Link>
                                        <Link href="#"><i className="fab fa-pinterest-p"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="team-block-five wow fadeInUp col-lg-4 col-md-6 col-sm-12" data-wow-delay="600ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="page-team-details"><img src="images/resource/team5-3.jpg" alt=""/></Link></figure>
                                </div>
                                <div className="info-box">
                                    <h4 className="name"><Link href="page-team-details">Courtney Henry</Link></h4>
                                    <span className="designation">Medical Assistant</span>
                                    <div className="social-icons">
                                        <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                        <Link href="#"><i className="fab fa-twitter"></i></Link>
                                        <Link href="#"><i className="fab fa-linkedin"></i></Link>
                                        <Link href="#"><i className="fab fa-pinterest-p"></i></Link>
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
export default Team5