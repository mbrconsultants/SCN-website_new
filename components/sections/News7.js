import Link from "next/link"
const News7 = () => {
    return (
        <>
    <section className="news-section-seven">
        <div className="auto-container">
            <div className="sec-title text-center">
                <span className="sub-title">Blog and News</span>
                <h2>Unlock the beauty within <br/> your walls</h2>
            </div>

            <div className="row">
                <div className="news-block-seven col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image"><Link href="news-details"><img src="images/resource/news7-1.jpg" alt="Image"/></Link></figure>
                        </div>
                        <div className="content-box">
                            <div className="post-box">
                                <img src="images/resource/news7-thumb1.jpg" alt="Image"/>
                                <ul className="post-meta">
                                    <li><i className="icon fa fa-user"></i> By admin</li>
                                    <li><i className="icon fa fa-calendar"></i> October 19, 2023</li>
                                </ul>
                            </div>
                            <h4 className="title"><Link href="news-details">Dream Space Design</Link></h4>
                            <div className="text">It is a long established fact desigi that a reader be distracted by the readable content of page when looking at its layout.</div>
                            <div className="btn-box">
                                <Link href="news-details" className="read-more"><i className="icon fa fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="news-block-seven col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image"><Link href="news-details"><img src="images/resource/news7-2.jpg" alt="Image"/></Link></figure>
                        </div>
                        <div className="content-box">
                            <div className="post-box">
                                <img src="images/resource/news7-thumb2.jpg" alt="Image"/>
                                <ul className="post-meta">
                                    <li><i className="icon fa fa-user"></i> By admin</li>
                                    <li><i className="icon fa fa-calendar"></i> October 19, 2023</li>
                                </ul>
                            </div>
                            <h4 className="title"><Link href="news-details">Inspired Living Solutions</Link></h4>
                            <div className="text">It is a long established fact desigi that a reader be distracted by the readable content of page when looking at its layout.</div>
                            <div className="btn-box">
                                <Link href="news-details" className="read-more"><i className="icon fa fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="news-block-seven col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image"><Link href="news-details"><img src="images/resource/news7-3.jpg" alt="Image"/></Link></figure>
                        </div>
                        <div className="content-box">
                            <div className="post-box">
                                <img src="images/resource/news7-thumb3.jpg" alt="Image"/>
                                <ul className="post-meta">
                                    <li><i className="icon fa fa-user"></i> By admin</li>
                                    <li><i className="icon fa fa-calendar"></i> October 19, 2023</li>
                                </ul>
                            </div>
                            <h4 className="title"><Link href="news-details">Timeless Aesthetics Architects</Link></h4>
                            <div className="text">It is a long established fact desigi that a reader be distracted by the readable content of page when looking at its layout.</div>
                            <div className="btn-box">
                                <Link href="news-details" className="read-more"><i className="icon fa fa-arrow-right"></i></Link>
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
export default News7