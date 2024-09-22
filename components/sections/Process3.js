import Link from "next/link"
const Process3 = () => {
    return (
        <>
            <section className="process-section-two pt-0">
                <div className="auto-container">
                    <div className="sec-title light">
                        <div className="row">
                            <div className="column col-lg-6 col-md-6 col-sm-12">
                                <span className="sub-title">simple process</span>
                                <h2>Inspired architecture for <br/> inspired living</h2>
                            </div>
                            <div className="column col-lg-6 col-md-6 col-sm-12">
                                <div className="text">It is a long established fact that a reader will be distracted the readable content of a page when looking at its layout. Lorem Ipsum is simpl dummy text</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        
                        <div className="process-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="count">01</div>
                                <h4 className="title"><Link href="#">Concept Build</Link></h4>
                                <div className="text">It is a long established fact that a reader hk will be distracted by the readable contenthl of a page when looking at its layout. </div>
                            </div>
                        </div>
                        <div className="process-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner-box">
                                <div className="count">02</div>
                                <h4 className="title"><Link href="#">Interior Design</Link></h4>
                                <div className="text">It is a long established fact that a reader hk will be distracted by the readable contenthl of a page when looking at its layout. </div>
                            </div>
                        </div>
                        <div className="process-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner-box">
                                <div className="count">03</div>
                                <h4 className="title"><Link href="#">Build Master</Link></h4>
                                <div className="text">It is a long established fact that a reader hk will be distracted by the readable contenthl of a page when looking at its layout. </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Process3