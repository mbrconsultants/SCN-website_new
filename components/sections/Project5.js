import Link from "next/link"
const Project5 = () => {
    return (
        <>
    <section className="project-section-five pt-0">
        <div className="auto-container">
            <div className="sec-title light text-center">
                <span className="sub-title">Latest Gallery</span>
                <h2>Style meets substance in our <br/> designs</h2>
            </div>

            <div className="row">

                <div className="column col-xl-8 col-lg-12 col-md-12 col-sm-12 order-xl-2">
                    <div className="row">
                        <div className="project-block-five col-lg-6 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="page-projects"><img src="images/resource/project5-2.jpg" alt=""/></Link></figure>
                                    <div className="info-box">
                                        <div className="title-box">
                                            <h4 className="title"><Link href="page-projects">Network Solutions</Link></h4>
                                            <div className="text">Lorem Ipsum is simply dummy</div>
                                        </div>
                                        <div className="btn-box"><Link href="page-projects" className="read-more"><i className="fa fa-plus"></i></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="project-block-five col-lg-6 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="page-projects"><img src="images/resource/project5-3.jpg" alt=""/></Link></figure>
                                    <div className="info-box">
                                        <div className="title-box">
                                            <h4 className="title"><Link href="page-projects">Network Solutions</Link></h4>
                                            <div className="text">Lorem Ipsum is simply dummy</div>
                                        </div>
                                        <div className="btn-box"><Link href="page-projects" className="read-more"><i className="fa fa-plus"></i></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="project-block-five col-lg-6 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="page-projects"><img src="images/resource/project5-4.jpg" alt=""/></Link></figure>
                                    <div className="info-box">
                                        <div className="title-box">
                                            <h4 className="title"><Link href="page-projects">Network Solutions</Link></h4>
                                            <div className="text">Lorem Ipsum is simply dummy</div>
                                        </div>
                                        <div className="btn-box"><Link href="page-projects" className="read-more"><i className="fa fa-plus"></i></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="project-block-five col-lg-6 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="page-projects"><img src="images/resource/project5-5.jpg" alt=""/></Link></figure>
                                    <div className="info-box">
                                        <div className="title-box">
                                            <h4 className="title"><Link href="page-projects">Network Solutions</Link></h4>
                                            <div className="text">Lorem Ipsum is simply dummy</div>
                                        </div>
                                        <div className="btn-box"><Link href="page-projects" className="read-more"><i className="fa fa-plus"></i></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="column col-xl-4 col-lg-6 col-md-6 col-sm-12">                    
                    <div className="project-block-five">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link href="page-projects"><img src="images/resource/project5-1.jpg" alt=""/></Link></figure>
                                <div className="info-box">
                                    <div className="title-box">
                                        <h4 className="title"><Link href="page-projects">Network Solutions</Link></h4>
                                        <div className="text">Lorem Ipsum is simply dummy</div>
                                    </div>
                                    <div className="btn-box"><Link href="page-projects" className="read-more"><i className="fa fa-plus"></i></Link></div>
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
export default Project5