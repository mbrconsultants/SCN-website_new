import BlogRecentSection from "./RecentNews";

const NotaryPublic = () => { 
  return (
    <>
      <section className="about-section-nine">
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-lg-8 col-md-12 col-sm-12 wow fadeInLeft">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="sub-title">Notary Public</span>
                  <h3 style={{ color: "#2BB584" }}>
                    REQUIREMENTS FOR APPLICATION OF NOTARY PUBLIC
                  </h3>
                  <div className="text" style={{ textAlign: "justify" }}>
                    <p>The Underlisted is the requirements for Notary Public:</p>
                    <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
                        <li>3 copies of formal Application letter printed on the letter headed paper should be addressed to the Chief Registrar of the Supreme Court of Nigeria Abuja.</li>
                        <li>Curriculum vitae (CV) should be duly signed. 23 copies for Lagos state and 15 copies for other states.</li>
                        <li>Photocopies of practicing fees receipt for 7 years preceding the date of application and each payment must have been made as at when due on or before 31st of March of each year.</li>
                        <li>3 photocopies of Call to Bar Certificate.</li>
                        <li>3 photocopies of Applicant’s Incorporation Certificate with the Corporate Affairs Commission.</li>
                    </ul>
                    <p>
                      Note: <br />
                      Curriculum Vitae (CV) must be printed on the letter head with the incorporated name on the CAC certificate.
                    </p>
                    <p>For inquiries relating to Notary Public please contact us via notary@supremecourt.gov.ng</p>
                    <p>And also we can be Contacted Via this Number: +2348060221713</p>
                    <p>For inquiries relating to operation of Supreme Court of Nigeria and other correspondences both local and international.</p>
                    <p>Please send a mail to: info@supremecourt.gov.ng</p>
                    <p>For more information visit: https://notary.gov.ng</p>
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

export default NotaryPublic;
