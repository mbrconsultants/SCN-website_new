import Link from "next/link"
const ScnRule = () => {
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

                    <div className="row">

                        <div className="pricing-block-two col-xl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="title-box">
                                    <h5 className="title">Order 1: General Definitions</h5>
                                    <div>
                                        <figure className="image"><img src="images/resource/icon.jpg" alt="Image" style={{ height: '50px', width: '50px' }} /></figure></div>
                                </div>
                                <div className="content-box">
                                    <div className="btn-box">
                                        <Link href="page-pricing" className="theme-btn btn-style-two"><span className="btn-title"> Read Now <i className="icon fa fa-arrow-right"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pricing-block-two col-xl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="title-box">
                                    <h5 className="title">Order 2: Administration and General Procedures</h5>
                                    <div>
                                        <figure className="image"><img src="images/resource/icon.jpg" alt="Image" style={{ height: '50px', width: '50px' }} /></figure></div>
                                </div>
                                <div className="content-box">
                                    <div className="btn-box">
                                        <Link href="page-pricing" className="theme-btn btn-style-two"><span className="btn-title"> Read Now <i className="icon fa fa-arrow-right"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pricing-block-two col-xl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="title-box">
                                    <h5 className="title">Order 3: Proceedings in the Original Jurisdiction of the Court</h5>
                                    <div>
                                        <figure className="image"><img src="images/resource/icon.jpg" alt="Image" style={{ height: '50px', width: '50px' }} /></figure></div>
                                </div>
                                <div className="content-box">
                                    <div className="btn-box">
                                        <Link href="page-pricing" className="theme-btn btn-style-two"><span className="btn-title"> Read Now <i className="icon fa fa-arrow-right"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pricing-block-two col-xl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="title-box">
                                    <h5 className="title">Order 3: Proceedings in the Original Jurisdiction of the Court</h5>
                                    <div>
                                        <figure className="image"><img src="images/resource/icon.jpg" alt="Image" style={{ height: '50px', width: '50px' }} /></figure></div>
                                </div>
                                <div className="content-box">
                                    <div className="btn-box">
                                        <Link href="page-pricing" className="theme-btn btn-style-two"><span className="btn-title"> Read Now <i className="icon fa fa-arrow-right"></i></span></Link>
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
export default ScnRule