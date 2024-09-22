import Link from "next/link"
const Team3 = () => {
    return (
        <>
            <section className="team-section-three">    
                <div className="auto-container">
                    <div className="sec-title light text-center">
                        <span className="sub-title">Team Members</span>
                        <h2>Architectural excellence redefining <br/> the skyline</h2>
                    </div>
                    <div className="row">
                        <div className="team-block-three col-lg-4 col-md-6 col-sm-12 wow fadeInLeft">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="page-team-details"><img src="images/resource/team1-1.jpg" alt=""/></Link></figure>
                                    <span className="share-icon fa fa-share-alt"></span>
                                    <div className="social-links">
                                        <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                        <Link href="#"><i className="fab fa-twitter"></i></Link>
                                        <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                                        <Link href="#"><i className="fab fa-pinterest"></i></Link>
                                    </div>
                                </div>
                                <div className="info-box">
                                    <h4 className="name"><Link href="page-team-details">Kristin Watson</Link></h4>
                                    <span className="designation">Dog Trainer</span>
                                </div>
                            </div>
                        </div>

                        <div className="team-block-three col-lg-4 col-md-6 col-sm-12 wow fadeInLeft" data-wow-delay="300ms">
                            <div className="inner-box two">
                                <div className="image-box">
                                    <figure className="image"><Link href="page-team-details"><img src="images/resource/team1-2.jpg" alt=""/></Link></figure>
                                    <span className="share-icon fa fa-share-alt"></span>
                                    <div className="social-links">
                                        <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                        <Link href="#"><i className="fab fa-twitter"></i></Link>
                                        <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                                        <Link href="#"><i className="fab fa-pinterest"></i></Link>
                                    </div>
                                </div>
                                <div className="info-box">
                                    <h4 className="name"><Link href="page-team-details">Theresa Webb</Link></h4>
                                    <span className="designation">President of Sales</span>
                                </div>
                            </div>
                        </div>

                        <div className="team-block-three col-lg-4 col-md-6 col-sm-12 wow fadeInLeft" data-wow-delay="600ms">
                            <div className="inner-box three">
                                <div className="image-box">
                                    <figure className="image"><Link href="page-team-details"><img src="images/resource/team1-3.jpg" alt=""/></Link></figure>
                                    <span className="share-icon fa fa-share-alt"></span>
                                    <div className="social-links">
                                        <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                        <Link href="#"><i className="fab fa-twitter"></i></Link>
                                        <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                                        <Link href="#"><i className="fab fa-pinterest"></i></Link>
                                    </div>
                                </div>
                                <div className="info-box">
                                    <h4 className="name"><Link href="page-team-details">Eleanor Pena</Link></h4>
                                    <span className="designation">Medical Assistant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Team3