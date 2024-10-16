import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import endpoint from "../../utils/endpoint"

const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
const NewHomeFunfact3 = () => {

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
                                            <div className="count-box"><CounterUp count={visitorCounts.daily} time={3} />+</div>
                                            <h6 className="counter-title">Today Visitors</h6>
                                        </div>
                                    </div>
                                </div>

                                <div className="counter-block-five col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                                    <div className="inner">
                                        <div className="icon-box"><i className="icon flaticon-graph-1"></i></div>
                                        <div className="content">
                                            <div className="count-box"><CounterUp count={visitorCounts.monthly} time={3} />+</div>
                                            <h6 className="counter-title">This Month Visitors</h6>
                                        </div>
                                    </div>
                                </div>

                                <div className="counter-block-five col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                                    <div className="inner">
                                        <div className="icon-box"><i className="icon flaticon-graph-1"></i></div>
                                        <div className="content">
                                            <div className="count-box"><CounterUp count={visitorCounts.yearly} time={3} />+</div>
                                            <h6 className="counter-title">This Year Visitors</h6>
                                        </div>
                                    </div>
                                </div>

                                <div className="counter-block-five col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                                    <div className="inner">
                                        <div className="icon-box"><i className="icon flaticon-graph-1"></i></div>
                                        <div className="content">
                                            <div className="count-box"><CounterUp count={visitorCounts.totalVisitor} time={3} />+</div>
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
