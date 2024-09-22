import Link from "next/link"
const Team7 = () => {
    return (
        <>
        <section className="team-section-seven pt-0">    
            <div className="auto-container">
                <div className="sec-title light text-center">
                    <span className="sub-title">Our Team</span>
                    <h2>Elevate your surroundings, <br/> elevate your life</h2>
                </div>

                <div className="row">
                    <div className="team-block-seven col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link href="page-team-details"><img src="images/resource/team7-1.jpg" alt="Image"/></Link></figure>
                            </div>
                            <div className="info-box">
                                <h4 className="name"><Link href="page-team-details">Ralph Edwards</Link></h4>
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

                    <div className="team-block-seven col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link href="page-team-details"><img src="images/resource/team7-2.jpg" alt="Image"/></Link></figure>
                            </div>
                            <div className="info-box">
                                <h4 className="name"><Link href="page-team-details">Courtney Henry</Link></h4>
                                <span className="designation">President of Sales</span>
                                <div className="social-icons">
                                    <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                    <Link href="#"><i className="fab fa-twitter"></i></Link>
                                    <Link href="#"><i className="fab fa-linkedin"></i></Link>
                                    <Link href="#"><i className="fab fa-pinterest"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="team-block-seven col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link href="page-team-details"><img src="images/resource/team7-3.jpg" alt="Image"/></Link></figure>
                            </div>
                            <div className="info-box">
                                <h4 className="name"><Link href="page-team-details">Devon Lane</Link></h4>
                                <span className="designation">Marketing Coordinator</span>
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
export default Team7