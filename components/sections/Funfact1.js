import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
const Funfact1 = () => {
    return (
        <>
            <section className="fun-fact-section">
                <div className="auto-container">
                    <div className="fact-counter">
                        <div className="row">
                            <div className="counter-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                                <div className="inner">
                                    <i className="icon fa fa-users-medical"></i>
                                    <h6 className="counter-title">Happy Clients</h6>
                                    <div className="count-box"><CounterUp count={480} time={3} />+</div>
                                </div>
                            </div>

                            <div className="counter-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                                <div className="inner">
                                    <i className="icon fa fa-award"></i>
                                    <h6 className="counter-title">Winning award</h6>
                                    <div className="count-box"><CounterUp count={300} time={3} />+</div>
                                </div>
                            </div>

                            <div className="counter-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                                <div className="inner">
                                    <i className="icon fa fa-folder-gear"></i>
                                    <h6 className="counter-title">Complete project</h6>
                                    <div className="count-box"><CounterUp count={350} time={3} />+</div>
                                </div>
                            </div>

                            <div className="counter-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                                <div className="inner">
                                    <div className="content">
                                        <i className="icon fa fa-star"></i>
                                        <h6 className="counter-title">Client review</h6>
                                        <div className="count-box"><CounterUp count={450} time={3} />+</div>
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
export default Funfact1
