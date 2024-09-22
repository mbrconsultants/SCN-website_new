import Link from "next/link"
const Project6 = () => {
    return (
        <>
            <section className="project-section-six">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">Our Latest Gallery</span>
                        <h2>Building dreams one structure <br/> at a time</h2>
                    </div>
                    <div className="row">

                        <div className="project-block-six col-lg-4 col-md-6 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="page-project-details"><img src="images/resource/project6-1.jpg" alt="Image"/></Link></figure>
                                    <div className="btn-box"><Link href="page-project-details" className="read-more"><i className="fa fa-arrow-right"></i></Link></div>
                                    <div className="info-box">
                                        <div className="title-box">
                                            <h4 className="title"><Link href="page-project-details">Software Development</Link></h4>
                                            <div className="text">It is a long established fact that a reader will be distracted by the</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="project-block-six col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="page-project-details"><img src="images/resource/project6-2.jpg" alt="Image"/></Link></figure>
                                    <div className="btn-box"><Link href="page-project-details" className="read-more"><i className="fa fa-arrow-right"></i></Link></div>
                                    <div className="info-box">
                                        <div className="title-box">
                                            <h4 className="title"><Link href="page-project-details">Software Development</Link></h4>
                                            <div className="text">It is a long established fact that a reader will be distracted by the</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="project-block-six col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="page-project-details"><img src="images/resource/project6-3.jpg" alt="Image"/></Link></figure>
                                    <div className="btn-box"><Link href="page-project-details" className="read-more"><i className="fa fa-arrow-right"></i></Link></div>
                                    <div className="info-box">
                                        <div className="title-box">
                                            <h4 className="title"><Link href="page-project-details">Software Development</Link></h4>
                                            <div className="text">It is a long established fact that a reader will be distracted by the</div>
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
export default Project6