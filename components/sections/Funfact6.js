import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import endpoint from "../../utils/endpoint"

const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})

const Funfact6 = () => {
    const [visitorCounts, setVisitorCounts] = useState({
        daily: 0,
        monthly: 0,
        yearly: 0,
        totalVisitor: 0
    });

    const fetchVisitorCounts = async () => {
        try {
            const res = await endpoint.get("/home");
            console.log("counts", res.data.data);
            const data = res.data.data; 
            setVisitorCounts({
                daily: data.daily,
                monthly: data.monthly,
                yearly: data.yearly,
                totalVisitor: data.totalVisitor
            });
        } catch (error) {
            console.error('Error fetching visitor counts', error);
        }
    };

    useEffect(() => {
        fetchVisitorCounts();
    }, []);


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
                                                <div className="content">
                                                    <div className="count-box"><CounterUp count={visitorCounts.daily} time={3} />+</div>
                                                    <h5 className="counter-title">Visitors Today</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="counter-block-six col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                                        <div className="inner-box">
                                            <div className="icon-box"><i className="icon flaticon-tower"></i></div>
                                            <div className="content-box">
                                                <div className="content">
                                                    <div className="count-box"><CounterUp count={visitorCounts.monthly} time={3} />+</div>
                                                    <h5 className="counter-title">Visitors this month</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="counter-block-six col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                                        <div className="inner-box">
                                            <div className="icon-box"><i className="icon flaticon-tower"></i></div>
                                            <div className="content-box">
                                                <div className="content">
                                                    <div className="count-box"><CounterUp count={visitorCounts.yearly} time={3} />+</div>
                                                    <h5 className="counter-title">Visitors this year</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="counter-block-six col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                                        <div className="inner-box">
                                            <div className="icon-box"><i className="icon flaticon-tower"></i></div>
                                            <div className="content-box">
                                                <div className="content">
                                                    <div className="count-box"><CounterUp count={visitorCounts.totalVisitor} time={3} />+</div>
                                                    <h5 className="counter-title">Total visitors</h5>
                                                </div>
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

export default Funfact6;
