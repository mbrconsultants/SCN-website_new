import BlogRecentSection from "./RecentNews";

const GoodStanding = () => { 
  return (
    <>
      <section className="about-section-nine">
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-lg-8 col-md-12 col-sm-12 wow fadeInLeft">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="sub-title">Good Standing</span>
                  <h4 style={{ color: "#2BB584" }}>
                    REQUIREMENTS FOR ISSUANCE OF LETTER OF GOOD STANDING
                  </h4>
                  <div className="text" style={{ textAlign: "justify" }}>
                    <ol style={{ listStyleType: 'disc', marginLeft: '20px' }}>
                      <li>
                        Application Letter Addressed To the Chief Registrar
                      </li>
                      <li>
                        University degree Certificate
                      </li>
                      <li>
                        Call to Bar Certificate
                      </li>
                      <li>Qualifying Certificate</li>
                      <li>
                        Passport photograph
                      </li>
                      <li>
                        Means of Identification (e.g National ID, Drivers Licence, Int’l Passport or permanent voters card)
                      </li>
                      <li>
                        Application must have email address and phone number
                      </li>
                    </ol>

                    <p>
                      The letter of Good Standing Request should now be forwarded to
                    </p>
                    <p>credence@supremecourt.gov.ng</p>
                    <p>Also we can be Contacted Via this Number: +2348051475103</p>
                    <p>For inquiries relating to operations of the Supreme Court of Nigeria and other correspondences both local and international.</p>
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

export default GoodStanding;
