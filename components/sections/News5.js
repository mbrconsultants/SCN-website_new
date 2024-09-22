import Link from "next/link"
const News5 = () => {
    return (
        <>
            <section className="news-section-five">
            <div className="auto-container">
                <div className="sec-title text-center">
                <span className="sub-title">Blog and news</span>
                <h2>Bringing your vision to life, one <br/> detail at a time</h2>
                </div>
                <div className="row">
                <div className="news-block-five col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                    <div className="inner-box">
                    <div className="image-box">
                        <figure className="image"><Link href="news-details"><img src="images/resource/news5-1.jpg" alt="Image"/></Link></figure>
                        <h6 className="post-date">24 <br/> May</h6>
                        <div className="content-box">
                        <ul className="post-meta">
                            <li><i className="icon fa fa-user"></i> By admin</li>
                            <li><i className="icon fa fa-comments"></i> Comments (05)</li>
                        </ul>
                        <h4 className="title"><Link href="news-details">UI/UX Design</Link></h4>
                        <div className="text">It is a long established fact that a reader lil be distracted by the readable content of ahjkli page when looking at its layout</div>
                        <div className="btn-box">
                            <Link href="news-details" className="theme-btn btn-style-one light-bg"><span className="btn-title">Read More <i className="icon fa fa-arrow-right"></i></span></Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="news-block-five col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                    <div className="inner-box">
                    <div className="image-box">
                        <figure className="image"><Link href="news-details"><img src="images/resource/news5-2.jpg" alt="Image"/></Link></figure>
                        <h6 className="post-date">24 <br/> May</h6>
                    </div>
                    <div className="content-box">
                        <ul className="post-meta">
                        <li><i className="icon fa fa-user"></i> By admin</li>
                        <li><i className="icon fa fa-comments"></i> Comments (05)</li>
                        </ul>
                        <h4 className="title"><Link href="news-details">IT Consulting</Link></h4>
                        <div className="text">It is a long established fact that a reader lil be distracted by the readable content of ahjkli page when looking at its layout</div>
                        <div className="btn-box">
                        <Link href="news-details" className="theme-btn btn-style-one light-bg"><span className="btn-title">Read More <i className="icon fa fa-arrow-right"></i></span></Link>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="news-block-five col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                    <div className="inner-box">
                    <div className="image-box">
                        <figure className="image"><Link href="news-details"><img src="images/resource/news5-3.jpg" alt="Image"/></Link></figure>
                        <h6 className="post-date">24 <br/> May</h6>
                    </div>
                    <div className="content-box">
                        <ul className="post-meta">
                        <li><i className="icon fa fa-user"></i> By admin</li>
                        <li><i className="icon fa fa-comments"></i> Comments (05)</li>
                        </ul>
                        <h4 className="title"><Link href="news-details">Web Development</Link></h4>
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
export default News5