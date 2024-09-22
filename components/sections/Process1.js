import Link from "next/link"
const Process1 = () => {
    return (
        <>
            <section className="process-section pt-0">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">simple process</span>
                        <h2>Inspired architecture for <br/> inspired living</h2>
                    </div>

                    <div className="row">
                        <div className="process-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon flaticon-graph-1"></i></div>
                                <div className="count">01</div>
                                <h4 className="title"><Link href="#">Archi Consult</Link></h4>
                                <div className="text">It is a long established fact that a reader hk will be distracted by the readable contenthl of a page when looking at its layout. </div>
                            </div>
                        </div>
                        <div className="process-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon flaticon-approved"></i></div>
                                <div className="count">02</div>
                                <h4 className="title"><Link href="#">Concept Build</Link></h4>
                                <div className="text">It is a long established fact that a reader hk will be distracted by the readable contenthl of a page when looking at its layout. </div>
                            </div>
                        </div>
                        <div className="process-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon flaticon-unlink"></i></div>
                                <div className="count">03</div>
                                <h4 className="title"><Link href="#">Project Link</Link></h4>
                                <div className="text">It is a long established fact that a reader hk will be distracted by the readable contenthl of a page when looking at its layout. </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Process1