import Link from "next/link"
const Banner5 = () => {
    return (
        <>
        <section className="banner-section-five">
            <div className="auto-container">
                <div className="row">
                    <div className="content-column col-xxl-4 col-xl-6 col-lg-6 col-md-12 col-sm-12 order-lg-2">
                        <div className="inner-column">
                            <h1 className="title wow fadeInUp" data-wow-delay="300ms">Designs that make everyday extraordinary</h1>
                            <div className="text wow fadeInUp" data-wow-delay="600ms">Vestibulum rhoncus nisl ac gravida porta. Mauris eu sapien lacus. Etiam molestie justo neque, in convallis massa tempus in.</div>
                            <div className="btn-box wow fadeInUp">
                                <Link href="page-about" className="theme-btn btn-style-one"><span className="btn-title">Read More</span></Link>
                            </div>
                        </div>
                    </div>

                    <div className="image-column col-xxl-8 col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="image-box wow fadeInLeft">
                                <figure className="image overlay-anim"><img src="/images/banner/banner5-1.jpg" alt=""/></figure>
                                <figure className="image-2 overlay-anim"><img src="/images/banner/banner5-2.jpg" alt=""/></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
export default Banner5