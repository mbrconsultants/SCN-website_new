const Subscribe4 = () => {
    return (
        <>
            <section className="subscribe-section">
                <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/4.jpg)' }}></div>
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="row">
                            <div className="title-column col-lg-6 col-md-12">
                                <div className="inner-column">
                                    <h2 className="title">For Free Quote And Any Help Subscribe Now</h2>
                                    <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                                </div>
                            </div>
                            <div className="form-column col-lg-6 col-md-12 col-sm-12">
                                <div className="subscribe-form">
                                    <form method="post" action="#">
                                        <div className="row">
                                            <div className="form-group col-lg-6 col-md-12">
                                                <input type="text" name="name" placeholder="Your Name" required=""/>
                                            </div>
                                            <div className="form-group col-lg-6 col-md-12">
                                                <input type="email" name="email" placeholder="Your Email" required=""/>
                                            </div>
                                            <div className="form-group col-lg-12 col-md-12">
                                                <button type="button" className="theme-btn btn-style-one light-bg"><span className="btn-title">Get Quote <i className="fa fa-angle-double-right"></i></span></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Subscribe4