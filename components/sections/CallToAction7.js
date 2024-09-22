import Link from "next/link"
const CallToAction7 = () => {
    return (
        <>
            <section className="call-to-action-six">
                <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/6.jpg)' }}></div>
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="content-box"> 
                            <div className="sec-title light">
                                <span className="sub-title">Contact Us</span>
                                <h2 className="title">Do You Need Any IT Solutions <br/> Get In Touch.</h2>
                            </div>
                        </div>
                        <div className="btn-box">
                            <Link href="page-contact" className="theme-btn btn-style-one"><span className="btn-title">Get In Touch</span></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default CallToAction7