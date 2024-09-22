import Link from "next/link"
const CallToAction2 = () => {
    return (
        <>
        <section className="call-to-action-two">
            <div className="auto-container">
                <div className="outer-box">
                    <div className="image"><img src="/images/resource/cta-2.jpg" alt=""/></div>
                    <div className="sec-title">
                        <span className="icon fa fa-phone"></span>
                        <h4 className="title">For Any Information Call Us - <Link href="tel:0123456789">(702) 555-0122</Link></h4>
                        <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
export default CallToAction2