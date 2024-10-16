import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
const NewHomeFunfact3 = () => {
    return (
        <>
            <section className="fun-fact-section-five">
                <div className="large-container p-0">
                    <div className="fact-counter">
                        <div className="bg bg-image"></div>
                        <div className="outer-container">
                            <div className="row">
                                <div className="counter-block-five col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                                    <div className="inner">
                                        <div className="icon-box"><i className="icon flaticon-graph-1"></i></div>
                                        <div className="content">
                                            <div className="count-box"><CounterUp count={200} time={3} />+</div>
                                            <h6 className="counter-title">Today Visitors</h6>
                                        </div>
                                    </div>
                                </div>

                                <div className="counter-block-five col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                                    <div className="inner">
                                        <div className="icon-box"><i className="icon flaticon-graph-1"></i></div>
                                        <div className="content">
                                            <div className="count-box"><CounterUp count={20} time={3} />+</div>
                                            <h6 className="counter-title">This Month Visitors</h6>
                                        </div>
                                    </div>
                                </div>

                                <div className="counter-block-five col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                                    <div className="inner">
                                        <div className="icon-box"><i className="icon flaticon-graph-1"></i></div>
                                        <div className="content">
                                            <div className="count-box"><CounterUp count={10} time={3} />k+</div>
                                            <h6 className="counter-title">This Year Visitors</h6>
                                        </div>
                                    </div>
                                </div>

                                <div className="counter-block-five col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                                    <div className="inner">
                                        <div className="icon-box"><i className="icon flaticon-graph-1"></i></div>
                                        <div className="content">
                                            <div className="count-box"><CounterUp count={900} time={3} />+</div>
                                            <h6 className="counter-title">Total Visitors</h6>
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
export default NewHomeFunfact3
