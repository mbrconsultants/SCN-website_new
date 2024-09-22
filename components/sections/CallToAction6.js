import Link from "next/link"
const CallToAction6 = () => {
    return (
        <>
            <section className="call-to-action-four">
                <div className="bg icon-cross"></div>
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="title-box">
                            <h2 className="title">Join Our Community</h2>
                            <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                        </div>
                        <div className="btn-box">
                            <Link href="page-contact" className="theme-btn btn-style-one light-bg"><span className="btn-title"><i className="icon fab fa-discord"></i> Discord</span></Link>
                            <Link href="page-contact" className="theme-btn btn-style-one hover-light"><span className="btn-title">WishList Now</span></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default CallToAction6