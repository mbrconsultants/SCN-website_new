import Link from "next/link"
const NewHomeNews3 = () => {
    return (
        <>
            <section className="news-section-four pt-2">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">Latest News</span>
                        <h2>News and Events</h2>
                    </div>

                    <div className="row">
                        <div className="news-block-four col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="news-details"><img src="images/resource/news4-1.jpg" alt="Image"/></Link></figure>
                                </div>
                                <div className="content-box">
                                    <ul className="post-meta">
                                        <li><i className="icon fa fa-user"></i> By admin</li>
                                        <li><i className="icon fa fa-calendar"></i> October 19, 2023</li>
                                    </ul>
                                    <h4 className="title"><Link href="news-details">Cloud Services</Link></h4>
                                    <div className="text">It is a long established fact that a reader lil be distracted by the readable content of ahjkli page when looking at its layout</div>
                                    <div className="btn-box">
                                        <Link href="news-details" className="read-more"><i className="icon fa fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="news-block-four col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="news-details"><img src="images/resource/news4-2.jpg" alt="Image"/></Link></figure>
                                </div>
                                <div className="content-box">
                                    <ul className="post-meta">
                                        <li><i className="icon fa fa-user"></i> By admin</li>
                                        <li><i className="icon fa fa-calendar"></i> October 19, 2023</li>
                                    </ul>
                                    <h4 className="title"><Link href="news-details">UI/UX Design</Link></h4>
                                    <div className="text">It is a long established fact that a reader lil be distracted by the readable content of ahjkli page when looking at its layout</div>
                                    <div className="btn-box">
                                        <Link href="news-details" className="read-more"><i className="icon fa fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="news-block-four col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="news-details"><img src="images/resource/news4-3.jpg" alt="Image"/></Link></figure>
                                </div>
                                <div className="content-box">
                                    <ul className="post-meta">
                                        <li><i className="icon fa fa-user"></i> By admin</li>
                                        <li><i className="icon fa fa-calendar"></i> October 19, 2023</li>
                                    </ul>
                                    <h4 className="title"><Link href="news-details">Cybersecurity</Link></h4>
                                    <div className="text">It is a long established fact that a reader lil be distracted by the readable content of ahjkli page when looking at its layout</div>
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
export default NewHomeNews3