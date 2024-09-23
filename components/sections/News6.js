import Link from "next/link"
const News6 = () => {
    return (
        <>
        <section className="news-section-six">
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title" style={{color: '#2BB584'}}>Latest News</span> <span style={{color: '#2BB584'}} className="fa fa-newspaper"></span>
                    <h2 style={{color: '#2BB584'}}>Recent News and Events </h2>
                </div>

                <div className="row">
                    <div className="news-block-six col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link href="news-details"><img src="images/resource/news/kekere-becomes-cjn.jpeg" alt="Image"/></Link></figure>
                                <div className="post-date">
                                    <h6 className="date">01 September 2024</h6>
                                </div>
                            </div>
                            <div className="content-box">
                                <ul className="post-meta">
                                    <li><i className="icon fa fa-user"></i> By admin</li>
                                    {/* <li><i className="icon fa fa-comments"></i> Comments (05)</li> */}
                                </ul>
                                <h4 className="title"><Link href="news-details">Kekere-ekun makes history, Appointed CJN</Link></h4>
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
                                <figure className="image"><Link href="news-details"><img src="images/resource/news/defaultNewsImg.jpg" alt="Image"/></Link></figure>
                                <div className="post-date">
                                    <h6 className="date">20 August 2024</h6>
                                </div>
                            </div>
                            <div className="content-box">
                                <ul className="post-meta">
                                    <li><i className="icon fa fa-user"></i> By admin</li>
                                    {/* <li><i className="icon fa fa-comments"></i> Comments (05)</li> */}
                                </ul>
                                <h4 className="title"><Link href="news-details">Hon. Justice Olukayode Ariwola Retires as CJN</Link></h4>
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
                                <figure className="image"><Link href="news-details"><img src="images/resource/news/defaultNewsImg.jpg" alt="Image"/></Link></figure>
                                <div className="post-date">
                                    <h6 className="date">02 February 2024</h6>
                                </div>
                            </div>
                            <div className="content-box">
                                <ul className="post-meta">
                                    <li><i className="icon fa fa-user"></i> By admin</li>
                                    {/* <li><i className="icon fa fa-comments"></i> Comments (05)</li> */}
                                </ul>
                                <h4 className="title"><Link href="news-details">Supreme court Launches Enrollment Portal for new wigs</Link></h4>
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