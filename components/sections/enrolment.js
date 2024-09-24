import { useEffect } from "react";
import BlogRecentSection from "./RecentNews";

const Enrolment = () => {
  useEffect(() => {
    // Client-side JavaScript logic or animations here (if needed)
  }, []);

  return (
    <>
      <section className="about-section-nine">
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-lg-8 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="sub-title">Enrolment</span>
                  <h4 style={{ color: "#2BB584" }}>
                    REQUIREMENTS FOR ENROLMENT AS A BARRISTER AND SOLICITOR OF THE SUPREME COURT.
                  </h4>
                  <div className="text" style={{ textAlign: "justify" }}>
                    <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
                      <li>
                        Original Copies Of Call To Bar Certificate And Qualifying Certificate For Sighting
                      </li>
                      <li>
                        One (1) Passport Photograph
                      </li>
                      <li>
                        Photocopies of Both Certificates to Be Submitted At the Enrolment Office.
                      </li>
                      <li>For Late Enrolment, Applicants Must Obtain Introduction Letter From The Law School Addressed To The Chief Registrar Stating Reasons For Lateness.</li>
                    </ul>

                    <p>
                      For inquiries relating to operation of Supreme Court of Nigeria and other correspondences both local and international.
                    </p>
                    <p>Please send a mail to: info@supremecourt.gov.ng</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="image-column col-lg-4">
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

export default Enrolment;
