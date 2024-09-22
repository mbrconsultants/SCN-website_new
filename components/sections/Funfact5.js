import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
const Funfact5 = () => {
    return (
        <>
            <section className="fun-fact-section-five">
                <div className="auto-container">
                    <div className="fact-counter">
                        <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/5.png)' }}></div>
                        <div className="outer-container">
                            <div className="row">
                                <div className="counter-block-five col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                                    <div className="inner">
                                        <div className="icon-box"><i className="icon flaticon-engineer"></i></div>
                                        <div className="content">
                                            <div className="count-box"><CounterUp count={200} time={3} />+</div>
                                            <h6 className="counter-title">Team Member</h6>
                                        </div>
                                    </div>
                                </div>

                                <div className="counter-block-five col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                                    <div className="inner">
                                        <div className="icon-box"><i className="icon flaticon-approved"></i></div>
                                        <div className="content">
                                            <div className="count-box"><CounterUp count={20} time={3} />+</div>
                                            <h6 className="counter-title">Winning Award</h6>
                                        </div>
                                    </div>
                                </div>

                                <div className="counter-block-five col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                                    <div className="inner">
                                        <div className="icon-box"><i className="icon flaticon-graph"></i></div>
                                        <div className="content">
                                            <div className="count-box"><CounterUp count={10} time={3} />k+</div>
                                            <h6 className="counter-title">Complete Project</h6>
                                        </div>
                                    </div>
                                </div>

                                <div className="counter-block-five col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                                    <div className="inner">
                                        <div className="icon-box"><i className="icon flaticon-graph-1"></i></div>
                                        <div className="content">
                                            <div className="count-box"><CounterUp count={900} time={3} />+</div>
                                            <h6 className="counter-title">Clients Review</h6>
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
export default Funfact5
