import Link from "next/link"


const Portfolio4 = () => {
    return (
        <>
        <section className="project-section-four">
            <div className="auto-container">
                <div className="mixitup-gallery">
                    <div className="row">
                        <div className="column col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="sec-title">
                                <span className="subLATEST GALLERY-title">Latest Gallery</span>
                                <h2>Elevate your surroundings <br/> elevate your life</h2>
                            </div>
                        </div>
                        <div className="column col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="filters">
                                <ul className="filter-btns">
                                    <li className="filter active clink" data-role="button" data-filter="all">View All</li>
                                    <li className="filter clink" data-role="button" data-filter=".engineering">Engineering</li>
                                    <li className="filter clink" data-role="button" data-filter=".new-project">New Project</li>
                                    <li className="filter clink" data-role="button" data-filter=".famous">Famous</li>
                                </ul>
                            </div>
                        </div>
                    </div>
    
                    <div className="filter-list row">
    
                        <div className="project-block-four all mix new-project famous col-xl-6 col-lg-12 col-md-12 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="page-project-details"><img src="/images/resource/project4-1.jpg" alt=""/></Link></figure>
                                    <div className="info-box">
                                        <div className="title-box">
                                            <h4 className="title"><Link href="page-project-details">Tech Solutions</Link></h4>
                                            <div className="text">Lorem Ipsum is simply dummy</div>
                                        </div>
                                        <div className="btn-box"><Link href="page-project-details" className="read-more"><i className="fa fa-angle-double-right"></i></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div className="project-block-four all mix engineering famous col-xl-3 col-lg-6 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="page-project-details"><img src="/images/resource/project4-2.jpg" alt=""/></Link></figure>
                                    <div className="info-box">
                                        <div className="title-box">
                                            <h4 className="title"><Link href="page-project-details">Tech Solutions</Link></h4>
                                            <div className="text">Lorem Ipsum is simply dummy</div>
                                        </div>
                                        <div className="btn-box"><Link href="page-project-details" className="read-more"><i className="fa fa-angle-double-right"></i></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div className="project-block-four all mix engineering col-xl-3 col-lg-6 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="page-project-details"><img src="/images/resource/project4-3.jpg" alt=""/></Link></figure>
                                    <div className="info-box">
                                        <div className="title-box">
                                            <h4 className="title"><Link href="page-project-details">Tech Solutions</Link></h4>
                                            <div className="text">Lorem Ipsum is simply dummy</div>
                                        </div>
                                        <div className="btn-box"><Link href="page-project-details" className="read-more"><i className="fa fa-angle-double-right"></i></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div className="project-block-four all mix engineering famous col-xl-3 col-lg-6 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="page-project-details"><img src="/images/resource/project4-4.jpg" alt=""/></Link></figure>
                                    <div className="info-box">
                                        <div className="title-box">
                                            <h4 className="title"><Link href="page-project-details">Tech Solutions</Link></h4>
                                            <div className="text">Lorem Ipsum is simply dummy</div>
                                        </div>
                                        <div className="btn-box"><Link href="page-project-details" className="read-more"><i className="fa fa-angle-double-right"></i></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div className="project-block-four all mix famous new-project col-xl-3 col-lg-6 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="page-project-details"><img src="/images/resource/project4-5.jpg" alt=""/></Link></figure>
                                    <div className="info-box">
                                        <div className="title-box">
                                            <h4 className="title"><Link href="page-project-details">Tech Solutions</Link></h4>
                                            <div className="text">Lorem Ipsum is simply dummy</div>
                                        </div>
                                        <div className="btn-box"><Link href="page-project-details" className="read-more"><i className="fa fa-angle-double-right"></i></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div className="project-block-four all mix engineering new-project col-xl-6 col-lg-12 col-md-12 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="page-project-details"><img src="/images/resource/project4-6.jpg" alt=""/></Link></figure>
                                    <div className="info-box">
                                        <div className="title-box">
                                            <h4 className="title"><Link href="page-project-details">Tech Solutions</Link></h4>
                                            <div className="text">Lorem Ipsum is simply dummy</div>
                                        </div>
                                        <div className="btn-box"><Link href="page-project-details" className="read-more"><i className="fa fa-angle-double-right"></i></Link></div>
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
export default Portfolio4