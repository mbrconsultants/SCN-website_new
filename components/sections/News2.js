import Link from "next/link"
const News2 = () => {
    return (
        <>
    <section className="news-section-two">
        <div className="auto-container">
            <div className="sec-title light text-center">
                <span className="sub-title">Latest News</span>
                <h2>Bringing visions to life with <br/> architectural expertise</h2>
            </div>

            <div className="row">
                <div className="news-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image"><Link href="news-details"><img src="/images/resource/news2-1.jpg" alt="Image"/></Link></figure>
                            <div className="post-date">
                                <h4 className="date"><i className="icon fa fa-calendar"></i> 28 May 2023</h4>
                            </div>
                        </div>
                        <div className="content-box">
                            <ul className="post-meta">
                                <li><i className="icon fa fa-user"></i> By admin</li>
                                <li><i className="icon fa fa-comments"></i> Comments (05)</li>
                            </ul>
                            <h4 className="title"><Link href="news-details">Marvels that stand the test</Link></h4>
                            <div className="text">It is a long established fact that a re beinglil distracted by the readable content of ahjkli page gjl when looking at its layout loren ipsum</div>
                            <div className="btn-box">
                                <Link href="news-details" className="theme-btn btn-style-two light"><span className="btn-title">Read More <i className="icon fa fa-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="news-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image"><Link href="news-details"><img src="/images/resource/news2-2.jpg" alt="Image"/></Link></figure>
                            <div className="post-date">
                                <h4 className="date"><i className="icon fa fa-calendar"></i> 28 May 2023</h4>
                            </div>
                        </div>
                        <div className="content-box">
                            <ul className="post-meta">
                                <li><i className="icon fa fa-user"></i> By admin</li>
                                <li><i className="icon fa fa-comments"></i> Comments (05)</li>
                            </ul>
                            <h4 className="title"><Link href="news-details">Future with timeless design</Link></h4>
                            <div className="text">It is a long established fact that a re beinglil distracted by the readable content of ahjkli page gjl when looking at its layout loren ipsum</div>
                            <div className="btn-box">
                                <Link href="news-details" className="theme-btn btn-style-two light"><span className="btn-title">Read More <i className="icon fa fa-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="news-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image"><Link href="news-details"><img src="/images/resource/news2-3.jpg" alt="Image"/></Link></figure>
                            <div className="post-date">
                                <h4 className="date"><i className="icon fa fa-calendar"></i> 28 May 2023</h4>
                            </div>
                        </div>
                        <div className="content-box">
                            <ul className="post-meta">
                                <li><i className="icon fa fa-user"></i> By admin</li>
                                <li><i className="icon fa fa-comments"></i> Comments (05)</li>
                            </ul>
                            <h4 className="title"><Link href="news-details">Life with architectural expertise</Link></h4>
                            <div className="text">It is a long established fact that a re beinglil distracted by the readable content of ahjkli page gjl when looking at its layout loren ipsum</div>
                            <div className="btn-box">
                                <Link href="news-details" className="theme-btn btn-style-two light"><span className="btn-title">Read More <i className="icon fa fa-arrow-right"></i></span></Link>
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
export default News2