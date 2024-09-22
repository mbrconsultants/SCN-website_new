import Link from "next/link"
const News3 = () => {
    return (
        <>
            <section className="news-section-three pt-0">
                <div className="auto-container">
                    <div className="row">
                        <div className="sec-title col-lg-6 col-md-8 col-sm-12">
                            <span className="sub-title">Latest Blogs</span>
                            <h2>Transforming spaces into <br/> works of art</h2>
                        </div>
                        <div className="top-btn col-lg-6 col-md-4 col-sm-12">
                            <div className="btn-box">
                                <Link href="news-grid" className="theme-btn btn-style-one"><span className="btn-title">Show More</span></Link>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="news-block-three col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="news-details"><img src="images/resource/news3-1.jpg" alt="Image"/></Link></figure>
                                    <div className="post-date">
                                        <h6 className="date">30 <br/> May</h6>
                                    </div>
                                </div>
                                <div className="content-box">
                                    <ul className="post-meta">
                                        <li><i className="icon fa fa-user"></i> By admin</li>
                                        <li><i className="icon fa fa-comments"></i> Comments (05)</li>
                                    </ul>
                                    <div className="title-box">
                                        <h4 className="title"><Link href="news-details">Redefining the skyline</Link></h4>
                                    </div>
                                    <div className="text">It is a long established fact that a reader lil be distracted by the readable content of ahjkli page when looking at its layout</div>
                                    <div className="btn-box">
                                        <Link href="news-details" className="theme-btn btn-style-one light-bg"><span className="btn-title">Read More <i className="icon fa fa-arrow-right"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="news-block-three col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="news-details"><img src="images/resource/news3-2.jpg" alt="Image"/></Link></figure>
                                    <div className="post-date">
                                        <h6 className="date">30 <br/> May</h6>
                                    </div>
                                </div>
                                <div className="content-box">
                                    <ul className="post-meta">
                                        <li><i className="icon fa fa-user"></i> By admin</li>
                                        <li><i className="icon fa fa-comments"></i> Comments (05)</li>
                                    </ul>
                                    <div className="title-box">
                                        <h4 className="title"><Link href="news-details">Stand the test of time</Link></h4>
                                    </div>
                                    <div className="text">It is a long established fact that a reader lil be distracted by the readable content of ahjkli page when looking at its layout</div>
                                    <div className="btn-box">
                                        <Link href="news-details" className="theme-btn btn-style-one light-bg"><span className="btn-title">Read More <i className="icon fa fa-arrow-right"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="news-block-three col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="news-details"><img src="images/resource/news3-3.jpg" alt="Image"/></Link></figure>
                                    <div className="post-date">
                                        <h4 className="date">30 <br/> May</h4>
                                    </div>
                                </div>
                                <div className="content-box">
                                    <ul className="post-meta">
                                        <li><i className="icon fa fa-user"></i> By admin</li>
                                        <li><i className="icon fa fa-comments"></i> Comments (05)</li>
                                    </ul>
                                    <div className="title-box">
                                        <h4 className="title"><Link href="news-details">Spaces into works of art</Link></h4>
                                    </div>
                                    <div className="text">It is a long established fact that a reader lil be distracted by the readable content of ahjkli page when looking at its layout</div>
                                    <div className="btn-box">
                                        <Link href="news-details" className="theme-btn btn-style-one light-bg"><span className="btn-title">Read More <i className="icon fa fa-arrow-right"></i></span></Link>
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
export default News3