const Subscribe5 = () => {
    return (
        <>
            <section className="subscribe-section-two">
                <div className="auto-container">
                    <div className="outer-box wow fadeIn">
                        <div className="row">
                            <div className="form-column col-lg-6 col-md-12 order-lg-2 wow fadeInRight">
                                <div className="inner-column">
                                    <div className="sec-title light">
                                        <h2>For Any information <br/>Contact Us</h2>
                                    </div>
                                    <div className="subscribe-form-two">
                                        <form method="post" action="#">
                                            <div className="form-group">
                                                <input type="email" name="emailaddress" placeholder="Subscribe Here" required/>
                                                <button type="submit" className="submit-btn overlay-anim"><i className="icon fa fa-paper-plane"></i></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="image-column col-lg-6 col-md-12 wow fadeInLeft">
                                <div className="inner-column">
                                    <figure className="image"><img src="images/resource/cta-5.jpg" alt=""/></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Subscribe5