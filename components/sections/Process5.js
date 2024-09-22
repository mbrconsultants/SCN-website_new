import Link from "next/link"
const Process5 = () => {
    return (
        <>
            <section className="process-section-four">
                <div className="bg bg-pattern-7"></div>
                <div className="auto-container">
                <div className="sec-title text-center light">
                    <span className="sub-title">Work Process</span>
                    <h2>Designs that leave a lasting <br/> impression</h2>
                </div>
                <div className="row">
                    <div className="process-block-four col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                    <div className="inner-box">
                        <div className="title-box">
                        <h4 className="title">Mobile App Development</h4>
                        <h2 className="count-box">01</h2>
                        </div>
                        <div className="icon-box"><i className="icon flaticon-approved"></i></div>
                        <div className="text">It is a long established fact that a reader will be distracted by the readable hkljklkl content layout.</div>
                        <Link href="page-about" className="read-more">Read More <i className="icon fa fa-arrow-right"></i></Link>
                    </div>
                    </div>

                    <div className="process-block-four col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                    <div className="inner-box">
                        <div className="title-box">
                        <h4 className="title">Software Development</h4>
                        <h2 className="count-box">02</h2>
                        </div>
                        <div className="icon-box"><i className="icon flaticon-graph"></i></div>
                        <div className="text">It is a long established fact that a reader will be distracted by the readable hkljklkl content layout.</div>
                        <Link href="page-about" className="read-more">Read More <i className="icon fa fa-arrow-right"></i></Link>
                    </div>
                    </div>

                    <div className="process-block-four col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                    <div className="inner-box">
                        <div className="title-box">
                        <h4 className="title">Social Media Management</h4>
                        <h2 className="count-box">03</h2>
                        </div>
                        <div className="icon-box"><i className="icon flaticon-diamond"></i></div>
                        <div className="text">It is a long established fact that a reader will be distracted by the readable hkljklkl content layout.</div>
                        <Link href="page-about" className="read-more">Read More <i className="icon fa fa-arrow-right"></i></Link>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    );
};
export default Process5