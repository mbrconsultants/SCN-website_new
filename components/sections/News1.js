import Link from "next/link"
const News1 = () => {
    return (
        <>
    <section className="news-section pt-0">
        <div className="auto-container">
            <div className="row">
                <div className="sec-title col-lg-6 col-md-8 col-sm-12">
                    <span className="sub-title">news and blog</span>
                    <h2>Building dreams one <br/> structure at a time</h2>
                </div>
                <div className="top-btn col-lg-6 col-md-4 col-sm-12">
                    <Link href="news-grid" className="theme-btn btn-style-one"><span className="btn-title">More Blogs</span></Link>
                </div>
            </div>

            <div className="row">
                <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image"><Link href="news-details"><img src="/images/resource/news1-1.jpg" alt="Image"/></Link></figure>
                            <div className="post-date">
                                <div className="date">28 May 2023</div>
                            </div>
                        </div>
                        <div className="content-box">
                            <ul className="post-meta">
                                <li><i className="icon fa fa-user"></i> By admin</li>
                                <li><i className="icon fa fa-comments"></i> Comments (05)</li>
                            </ul>
                            <h4 className="title"><Link href="news-details">Architectural excellence</Link></h4>
                            <div className="text">It is a long established fact that a reader lil be distracted by the readable content of ahjkli page when looking at its layout</div>
                            <Link href="news-details" className="read-more">Read More <i className="icon fa fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>

                <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image"><Link href="news-details"><img src="/images/resource/news1-2.jpg" alt="Image"/></Link></figure>
                            <div className="post-date">
                                <div className="date">28 May 2023</div>
                            </div>
                        </div>
                        <div className="content-box">
                            <ul className="post-meta">
                                <li><i className="icon fa fa-user"></i> By admin</li>
                                <li><i className="icon fa fa-comments"></i> Comments (05)</li>
                            </ul>
                            <h4 className="title"><Link href="news-details">Redefining the skyline</Link></h4>
                            <div className="text">It is a long established fact that a reader lil be distracted by the readable content of ahjkli page when looking at its layout</div>
                            <Link href="news-details" className="read-more">Read More <i className="icon fa fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>

                <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image"><Link href="news-details"><img src="/images/resource/news1-3.jpg" alt="Image"/></Link></figure>
                            <div className="post-date">
                                <div className="date">28 May 2023</div>
                            </div>
                        </div>
                        <div className="content-box">
                            <ul className="post-meta">
                                <li><i className="icon fa fa-user"></i> By admin</li>
                                <li><i className="icon fa fa-comments"></i> Comments (05)</li>
                            </ul>
                            <h4 className="title"><Link href="news-details">That stand the test of time</Link></h4>
                            <div className="text">It is a long established fact that a reader lil be distracted by the readable content of ahjkli page when looking at its layout</div>
                            <Link href="news-details" className="read-more">Read More <i className="icon fa fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    );
};
export default News1