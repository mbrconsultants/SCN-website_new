import BlogRecentSection from "./RecentNews";

const RequirementsForChangeOfName = () => { 
  return (
    <>
      <section className="about-section-nine">
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-lg-8 col-md-12 col-sm-12 wow fadeInLeft">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="sub-title">Change of Name</span>
                  <h4 style={{ color: "#2BB584" }}>
                    REQUIREMENTS FOR CHANGE OF NAME
                  </h4>
                  <div className="text" style={{ textAlign: "justify" }}>
                    <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
                        <li>Application Letter Addressed To the Chief Registrar</li>
                        <li>Deed of Change of Name duly stamped at the stamp duty office</li>
                    </ul>
                    <p></p>
                    <p>Affidavit of Change of Name</p>
                    <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
                        <li>Photocopy of Call to Bar certificate, and original for citing</li>
                        <li>Photocopy of Qualifying Certificates, and original for citing</li>
                        <li>Birth certificate or sworn declaration of age</li>
                    </ul>
                    <p></p>
                    <p>Marriage Certificate</p>
                    <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
                        <li>Newspaper Publication</li>
                        <li>Passport Photograph</li>
                        <li>Verification letter from Nigerian Bar Association</li>
                    </ul>
                    <p></p>
                    <p>
                      <strong>Note:</strong> Men Are Not Required To Submit Marriage Certificate. 
                    </p>
                    <p>For inquiries relating to operation of Supreme Court of Nigeria and other correspondences both local and international.</p>
                    <p>Please send a mail to: info@supremecourt.gov.ng</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="image-column col-lg-4 wow fadeInRight"
              data-wow-delay="300ms"
            >
              <div className="inner-column">
                <BlogRecentSection />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RequirementsForChangeOfName;
