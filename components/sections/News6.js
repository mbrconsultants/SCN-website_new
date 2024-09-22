import Link from "next/link"
const News6 = () => {
    return (
        <>
        <section className="news-section-six">
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">Blog and News</span>
                    <h2>Transforming your business <br/> with technology</h2>
                </div>

                <div className="row">
                    <div className="news-block-six col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link href="news-details"><img src="images/resource/news6-1.jpg" alt="Image"/></Link></figure>
                                <div className="post-date">
                                    <h6 className="date">30 May 2023</h6>
                                </div>
                            </div>
                            <div className="content-box">
                                <ul className="post-meta">
                                    <li><i className="icon fa fa-user"></i> By admin</li>
                                    <li><i className="icon fa fa-comments"></i> Comments (05)</li>
                                </ul>
                                <h4 className="title"><Link href="news-details">Making it look like readable English believable</Link></h4>
                                <div className="text">It is a long established fact desigi that a reader be distracted by the readable content of page when looking at its layout.</div>
                                <div className="btn-box">
                                    <Link href="news-details" className="read-more">Read More <i className="icon fa fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="news-block-six col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link href="news-details"><img src="images/resource/news6-2.jpg" alt="Image"/></Link></figure>
                                <div className="post-date">
                                    <h6 className="date">30 May 2023</h6>
                                </div>
                            </div>
                            <div className="content-box">
                                <ul className="post-meta">
                                    <li><i className="icon fa fa-user"></i> By admin</li>
                                    <li><i className="icon fa fa-comments"></i> Comments (05)</li>
                                </ul>
                                <h4 className="title"><Link href="news-details">Many desktop publishing packages and web page</Link></h4>
                                <div className="text">It is a long established fact desigi that a reader be distracted by the readable content of page when looking at its layout.</div>
                                <div className="btn-box">
                                    <Link href="news-details" className="read-more">Read More <i className="icon fa fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="news-block-six col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link href="news-details"><img src="images/resource/news6-3.jpg" alt="Image"/></Link></figure>
                                <div className="post-date">
                                    <h6 className="date">30 May 2023</h6>
                                </div>
                            </div>
                            <div className="content-box">
                                <ul className="post-meta">
                                    <li><i className="icon fa fa-user"></i> By admin</li>
                                    <li><i className="icon fa fa-comments"></i> Comments (05)</li>
                                </ul>
                                <h4 className="title"><Link href="news-details">Randomised words which don't look even slightly</Link></h4>
                                <div className="text">It is a long established fact desigi that a reader be distracted by the readable content of page when looking at its layout.</div>
                                <div className="btn-box">
                                    <Link href="news-details" className="read-more">Read More <i className="icon fa fa-arrow-right"></i></Link>
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
export default News6