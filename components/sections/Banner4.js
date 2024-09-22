import Link from "next/link"
const Banner4 = () => {
    return (
        <>
        <section className="banner-section-four">
            <div className="bg-image wow fadeInLeft">
                <div className="image" style={{ backgroundImage: 'url(images/banner/banner-4.jpg)' }}></div>
            </div>
            <div className="auto-container">
                <div className="row">
                    <div className="content-column col-lg-5">
                        <div className="inner-column">
                            <h1 className="title wow fadeInUp" data-wow-delay="300ms">Designs that make everyday extraordinary</h1>
                            <div className="text wow fadeInUp" data-wow-delay="600ms">We have been operating for over a decade, providing top-notch  our clients and building a strong track record in the industry</div>
                            <div className="btn-box wow fadeInUp">
                                <Link href="page-about" className="theme-btn btn-style-one"><span className="btn-title">Read More</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
export default Banner4