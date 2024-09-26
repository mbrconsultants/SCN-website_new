import { useEffect, useState } from 'react';
import Link from "next/link"
import endpoint from "../../utils/endpoint";

const ScnRule = () => {
    const [rules, setRules] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchRules()
    }, []);

    const fetchRules = async () => {
        try {
            const response = await endpoint.get('/supreme-court-rules');
            const data = response.data.data.courtrules.data;
            console.log("data", data)
            setRules(data);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    return (
        <>
            <section className="pricing-section-two">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <h2 style={{ color: '#2BB584' }}>Supreme Court Rules <span className="fa fa-legal"></span></h2>
                    </div>

                    <div className="row mb-4">
                        <div className="col-md-5 mx-auto">
                            <div className="sidebar__single sidebar__search">
                                <form
                                    action="#"
                                    className="sidebar__search-form">
                                    <input
                                        type="search"
                                        placeholder="Search here"
                                    />
                                    <button type="submit">
                                        <i className="lnr-icon-search"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    {loading && <div className='row text-center'> <p>Fetching data...</p> </div>}
                    {!loading &&
                        <div className="row">
                            {(rules && rules.length > 0) ?
                                rules.map((rule, index) => (
                                    <div className="pricing-block-two col-xl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" key={index}>
                                        <div className="inner-box">
                                            <div className="title-box">
                                                <h5 className="title">{rule.title}</h5>
                                                <div>
                                                    <figure className="image">
                                                        <Link href={rule.file_path} target='_blank'><img src="images/resource/icon.jpg" alt="Image" style={{ height: '50px', width: '50px' }} /></Link>
                                                    </figure>
                                                </div>
                                            </div>
                                            <div className="content-box">
                                                <div className="btn-box">
                                                    <Link href={rule.file_path} className="theme-btn btn-style-two"><span className="btn-title"> Read Now <i className="icon fa fa-arrow-right"></i></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )) : (
                                    <div className='row text-center'> <p>No data is available...</p> </div>
                                )}
                        </div>}
                </div>
            </section>
        </>
    );
};
export default ScnRule