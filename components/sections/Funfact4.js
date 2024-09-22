import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
const Funfact4 = () => {
    return (
        <>
    <section className="fun-fact-section-four">
        <div className="auto-container">
            <div className="fact-counter">
                <div className="row">
                    <div className="counter-block-four col-xl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                        <div className="inner-box">
                            <div className="icon-box"><i className="icon fa fa-star"></i></div>
                            <div className="content">
                                <div className="count-box"><CounterUp count={300} time={3} />+</div>
                                <h6 className="counter-title">Winning Award</h6>
                                <div className="text">It is a long established fact  will be distracted by contentdistracted by the  readable content</div>
                            </div>
                        </div>
                    </div>

                    <div className="counter-block-four col-xl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box">
                            <div className="icon-box"><i className="icon flaticon-approved"></i></div>
                            <div className="content">
                                <div className="count-box"><CounterUp count={300} time={3} />+</div>
                                <h6 className="counter-title">Winning Award</h6>
                                <div className="text">It is a long established fact  will be distracted by contentdistracted by the  readable content</div>
                            </div>
                        </div>
                    </div>

                    <div className="counter-block-four col-xl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                        <div className="inner-box">
                            <div className="icon-box"><i className="icon flaticon-graph"></i></div>
                            <div className="content">
                                <div className="count-box"><CounterUp count={300} time={3} />+</div>
                                <h6 className="counter-title">Winning Award</h6>
                                <div className="text">It is a long established fact  will be distracted by contentdistracted by the  readable content</div>
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
export default Funfact4
