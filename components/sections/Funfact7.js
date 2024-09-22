import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
const Funfact7 = () => {
    return (
        <>
    <section className="fun-fact-section-seven">
        <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/7.jpg)' }}></div>
        <div className="auto-container">
            <div className="fact-counter">
                <div className="outer-container">
                    <div className="row">
                        <div className="counter-block-seven col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="content-box">
                                    <div className="icon-box"><i className="icon flaticon-diamond"></i></div>
                                    <div className="content">
                                        <div className="count-box"><CounterUp count={200} time={3} />+</div>
                                        <h5 className="counter-title">Winning award</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="counter-block-seven col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner-box">
                                <div className="content-box">
                                    <div className="icon-box"><i className="icon flaticon-diploma"></i></div>
                                    <div className="content">
                                        <div className="count-box"><CounterUp count={350} time={3} />+</div>
                                        <h5 className="counter-title">Client review</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="counter-block-seven col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner-box">
                                <div className="content-box">
                                    <div className="icon-box"><i className="icon flaticon-approved"></i></div>
                                    <div className="content">
                                        <div className="count-box"><CounterUp count={400} time={3} />+</div>
                                        <h5 className="counter-title">Happy Clients</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="counter-block-seven col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                            <div className="inner-box">
                                <div className="content-box">
                                    <div className="icon-box"><i className="icon flaticon-tower"></i></div>
                                    <div className="content">
                                        <div className="count-box"><CounterUp count={300} time={3} />+</div>
                                        <h5 className="counter-title">Team Members</h5>
                                    </div>
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
export default Funfact7
