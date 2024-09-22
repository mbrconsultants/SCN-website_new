import Link from 'next/link';
import { useState } from 'react';

const ServiceDetails = () => {
  const [isActive, setIsActive] = useState({
      status: false,
      key: 1,
  })

  const handleClick = (key) => {
      if (isActive.key === key) {
          setIsActive({
              status: false,
          })
      } else {
          setIsActive({
              status: true,
              key,
          })
      }
  }
  return (
    <>

  <section className="services-details">
    <div className="container">
      <div className="row">
        {/* Start Services Details Sidebar */}
				<div className="col-xl-4 col-lg-4">
					<div className="service-sidebar">
						<div className="sidebar-widget service-sidebar-single">

							<div className="sidebar-service-list">
								<ul>
									<li><Link href="page-service-details" className="current"><i className="fas fa-angle-right"></i><span>Air Freight</span></Link></li>
									<li className="current"><Link href="page-service-details"><i className="fas fa-angle-right"></i><span>Sea freight</span></Link></li>
									<li><Link href="page-service-details"><i className="fas fa-angle-right"></i><span>Road service</span></Link></li>
									<li><Link href="page-service-details"><i className="fas fa-angle-right"></i><span>Other solution</span></Link></li>
									<li><Link href="page-service-details"><i className="fas fa-angle-right"></i><span>Train Freight</span></Link></li>
									<li><Link href="page-service-details"><i className="fas fa-angle-right"></i><span>Land Transport</span></Link></li>
								</ul>
							</div>

							<div className="service-details-help">
								<div className="help-shape-1"></div>
								<div className="help-shape-2"></div>
								<h2 className="help-title">Contact with <br/> us for any <br/> advice</h2>
								<div className="help-icon">
									<span className=" lnr-icon-phone-handset"></span>
								</div>
								<div className="help-contact">
									<p>Need help? Talk to an expert</p>
									<Link href="tel:12463330079">+892 ( 123 ) 112 - 9999</Link>
								</div>
							</div>

							<div className="sidebar-widget service-sidebar-single mt-4">
								<div className="service-sidebar-single-btn wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1200m">
									<Link href="#" className="theme-btn btn-style-one d-grid"><span className="btn-title"><span className="fas fa-file-pdf"></span> download pdf file</span></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
        {/* End Services Details Sidebar */}

        {/* Start Services Details Content */}
        <div className="col-xl-8 col-lg-8">
          <div className="services-details__content">
            <img src="/images/resource/service-details.jpg" alt="" />
            <h2 className="mt-4">Service Overview</h2>
            <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            <div className="content">
              <div className="text">
                <h3>Service Center</h3>
                <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
              </div>
              <div className="feature-list">
                <div className="row clearfix">
                  <div className="col-lg-6 col-md-6 col-sm-12 column">
                    <div className="single-item">
                      <div className="icon-box"><i className="fas fa-check-circle"></i></div>
                      <h6 className="title">Fast home delivery</h6>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 column">
                    <div className="single-item">
                      <div className="icon-box"><i className="fas fa-check-circle"></i></div>
                      <h6 className="title">Secure Payments</h6>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 column">
                    <div className="single-item">
                      <div className="icon-box"><i className="fas fa-check-circle"></i></div>
                      <h6 className="title">Delivering best products</h6>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 column">
                    <div className="single-item">
                      <div className="icon-box"><i className="fas fa-check-circle"></i></div>
                      <h6 className="title">Food Inspections</h6>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 column">
                    <div className="single-item">
                      <div className="icon-box"><i className="fas fa-check-circle"></i></div>
                      <h6 className="title">Generator Systems</h6>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 column">
                    <div className="single-item">
                      <div className="icon-box"><i className="fas fa-check-circle"></i></div>
                      <h6 className="title">Assessments</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <h3>Frequently Asked Question</h3>
              <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
              <ul className="accordion-box wow fadeInRight">
                {/* Block */}
                <li className="accordion block">
                  <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(1)}>Is my technology allowed on tech?
                    <div className="icon fa fa-plus"></div>
                  </div>
                  <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                    <div className="content">
                      <div className="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
                    </div>
                  </div>
                </li>
                {/* Block */}
                <li className="accordion block active-block">
                  <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(2)}>How to soft launch your business?
                    <div className="icon fa fa-plus"></div>
                  </div>
                  <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                    <div className="content">
                      <div className="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
                    </div>
                  </div>
                </li>
                {/* Block */}
                <li className="accordion block">
                  <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(3)}>How to turn visitors into contributors
                    <div className="icon fa fa-plus"></div>
                  </div>
                  <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                    <div className="content">
                      <div className="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
                    </div>
                  </div>
                </li>
                {/* Block */}
                <li className="accordion block">
                  <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(4)}>How can i find my solutions?
                    <div className="icon fa fa-plus"></div>
                  </div>
                  <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                    <div className="content">
                      <div className="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* End Services Details Content */}
      </div>
    </div>
  </section>

    </>
  );
};
export default ServiceDetails
