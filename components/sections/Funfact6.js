import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
const Funfact6 = () => {
    return (
        <>
            <section className="fun-fact-section-six p-2" style={{ backgroundImage: 'url(images/banner/scnbanner-3.JPG)' }}>
                <div style={{ backgroundColor: '#30373E', opacity: '0.75' }}>
                    <div className="auto-container">
                        <div className="fact-counter">
                            <div className="outer-box">
                                <div className="row">
                                    <div className="counter-block-six col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                                        <div className="inner-box">
                                            <div className="icon-box"><i className="icon flaticon-tower"></i></div>
                                            <div className="content-box">
                                                {/* <div className="icon-box"><i className="icon flaticon-diamond"></i></div> */}
                                                <div className="content">
                                                    <div className="count-box"><CounterUp count={87} time={3} />+</div>
                                                    <h5 className="counter-title">Visitors Today</h5>
                                                </div>
                                            </div>
                                            {/* <div className="text">It is a long established fact that ahjkgjli reader will be distracted by</div> */}
                                        </div>
                                    </div>

                                    <div className="counter-block-six col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                                        <div className="inner-box">
                                            <div className="icon-box"><i className="icon flaticon-tower"></i></div>
                                            <div className="content-box">
                                                {/* <div className="icon-box"><i className="icon flaticon-diploma"></i></div> */}
                                                <div className="content">
                                                    <div className="count-box"><CounterUp count={2033} time={3} />+</div>
                                                    <h5 className="counter-title">Visitors this month</h5>
                                                </div>
                                            </div>
                                            {/* <div className="text">It is a long established fact that ahjkgjli reader will be distracted by</div> */}
                                        </div>
                                    </div>

                                    <div className="counter-block-six col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                                        <div className="inner-box">
                                            <div className="icon-box"><i className="icon flaticon-tower"></i></div>
                                            <div className="content-box">
                                                {/* <div className="icon-box"><i className="icon flaticon-approved"></i></div> */}
                                                <div className="content">
                                                    <div className="count-box"><CounterUp count={140780} time={3} />+</div>
                                                    <h5 className="counter-title">Visitors this year</h5>
                                                </div>
                                            </div>
                                            {/* <div className="text">It is a long established fact that ahjkgjli reader will be distracted by</div> */}
                                        </div>
                                    </div>

                                    <div className="counter-block-six col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                                        <div className="inner-box">
                                            <div className="icon-box"><i className="icon flaticon-tower"></i></div>
                                            <div className="content-box">
                                                <div className="content">
                                                    <div className="count-box"><CounterUp count={307933} time={3} />+</div>
                                                    <h5 className="counter-title">Total visitors</h5>
                                                </div>
                                            </div>
                                            {/* <div className="text">It is a long established fact that ahjkgjli reader will be distracted by</div> */}
                                        </div>
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
export default Funfact6
