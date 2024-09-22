import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
const Funfact2 = () => {
    return (
        <>
        <section className="fun-fact-section-two">
            <div className="auto-container">
                <div className="fact-counter">
                    <div className="row">
                        <div className="counter-block-two col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner">
                                <i className="icon fa fa-users-medical"></i>
                                <div className="count-box"><CounterUp count={300} time={3} />+</div>
                                <h6 className="counter-title">Happy Clients</h6>
                            </div>
                        </div>

                        <div className="counter-block-two col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner">
                                <i className="icon fa fa-award"></i>
                                <div className="count-box"><CounterUp count={400} time={3} />+</div>
                                <h6 className="counter-title">Winning award</h6>
                            </div>
                        </div>

                        <div className="counter-block-two col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner">
                                <i className="icon fa fa-folder-gear"></i>
                                <div className="count-box"><CounterUp count={350} time={3} />+</div>
                                <h6 className="counter-title">project Done</h6>
                            </div>
                        </div>

                        <div className="counter-block-two col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                            <div className="inner">
                                <div className="content">
                                    <i className="icon fa fa-star"></i>
                                    <div className="count-box"><CounterUp count={200} time={3} />+</div>
                                    <h6 className="counter-title">Setishfaction</h6>
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
export default Funfact2
