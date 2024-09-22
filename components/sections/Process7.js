import Link from "next/link"
const Process7 = () => {
    return (
        <>
            <section className="process-section-six pt-0">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">Work Process</span>
                        <h2>Unleash the potential of <br/> your space</h2>
                    </div>

                    <div className="row">

                        <div className="process-block-six col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="content-box">
                                <div className="icon-box"><i className="icon flaticon-graph-1"></i></div>
                                <h4 className="title"><Link href="news-about">Visionary Interiors</Link></h4>
                                <div className="text">It is a long established fact that a reader hjl will be distracted by the readable contentjk of a page when looking at its layout.</div>
                                </div>
                                <div className="bottom-box">
                                    <Link href="news-about" className="read-more">Read More <i className="icon fa fa-arrow-right"></i></Link>
                                    <h4 className="count">01</h4>
                                </div>
                            </div>
                        </div>

                        <div className="process-block-six col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner-box">
                                <div className="content-box">
                                <div className="icon-box"><i className="icon flaticon-diploma"></i></div>
                                <h4 className="title"><Link href="news-about">Custom Home Designers</Link></h4>
                                <div className="text">It is a long established fact that a reader hjl will be distracted by the readable contentjk of a page when looking at its layout.</div>
                                </div>
                                <div className="bottom-box">
                                    <Link href="news-about" className="read-more">Read More <i className="icon fa fa-arrow-right"></i></Link>
                                    <h4 className="count">02</h4>
                                </div>
                            </div>
                        </div>

                        <div className="process-block-six col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner-box">
                                <div className="content-box">
                                <div className="icon-box"><i className="icon flaticon-diamond"></i></div>
                                <h4 className="title"><Link href="news-about">Harmony Home Designs</Link></h4>
                                <div className="text">It is a long established fact that a reader hjl will be distracted by the readable contentjk of a page when looking at its layout.</div>
                                </div>
                                <div className="bottom-box">
                                    <Link href="news-about" className="read-more">Read More <i className="icon fa fa-arrow-right"></i></Link>
                                    <h4 className="count">03</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Process7