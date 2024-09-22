import Link from "next/link"
const CallToAction1 = () => {
    return (
        <>
        <section className="call-to-action">
            <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/1.jpg)' }}></div>
            <div className="auto-container">
                <div className="icon icon-arrow"></div>
                <div className="outer-box">
                    <h2 className="title wow fadeInUp">You have any project idea in <br/> your mind you can share us <br/> We will help you</h2>
                    <Link href="page-contact" className="theme-btn btn-style-one wow fadeInUp" data-wow-delay="300ms"><span className="btn-title">Send Message <i className="icon fa fa-arrow-right"></i></span></Link>
                </div>
            </div>
        </section>
        </>
    );
};
export default CallToAction1