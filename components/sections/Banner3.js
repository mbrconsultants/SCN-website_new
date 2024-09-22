import Link from "next/link"
const Banner3 = () => {
    return (
        <>
            <section className="banner-section-three">
                <div className="bg bg-image" style={{ backgroundImage: 'url(images/banner/banner-3.jpg)' }}></div>
                <div className="icon shape-4"></div>
                <div className="auto-container">
                    <div className="row">
                        <div className="content-column">
                            <div className="inner-column">
                                <div className="sub-title wow fadeInUp">Smart Solutions</div>
                                <h1 className="title wow fadeInUp" data-wow-delay="300ms">Shaping  World Around <br/> Us Architectural Wonders</h1>
                                <div className="text wow fadeInUp" data-wow-delay="600ms">We have been operating for over a decade, providing top-notch services to our <br/> clients and building a strong track record in the industry.We have been</div>
                                <div className="btn-box wow fadeInUp" data-wow-delay="900ms">
                                    <Link href="page-about" className="theme-btn btn-style-one"><span className="btn-title">About us</span></Link>
                                    <Link href="page-service-details" className="theme-btn btn-style-two"><span className="btn-title">Our services</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Banner3