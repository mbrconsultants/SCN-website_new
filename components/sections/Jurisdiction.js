import BlogRecentSection from "./RecentNews";

const About6 = (text) => {
    return (
      <>
        <section className="about-section-nine">
          <div className="auto-container">
            <div className="row">
              <div className="content-column col-lg-7 col-md-12 col-sm-12 wow fadeInLeft">
                <div className="inner-column">
                  <div className="sec-title">
                    <span className="sub-title">About Us</span>
                    <h2>Jurisdiction of the Court</h2>
                    <div
                      className="text"
                      style={{ textAlign: "justify" }}>
                      <p>
                        Section 230 to 236 of the 1999 constitution of Nigeria
                        mention all about the Supreme Court.
                      </p>
                      <p>
                        {" "}
                        However, section 232(1) specifically provides that “THE
                        SUPREME COURT SHALL, TO THE EXCLUSION OF ANY OTHER
                        COURT, HAVE ORIGINAL JURISDICTION IN ANY DISPUTE BETWEEN
                        THE FEDERATION AND A STATE OR BETWEEN STATES IF AND IN
                        SO FAR AS THAT DISPUTE INVOLVES ANY QUESTION (WHETHER OF
                        LAW OR FACT) ON WHICH THE EXSTENCE OR EXTENT OF A LEGAL
                        RIGHT DEPENDS”
                      </p>
                      <p>
                        (2) IN ADDITION TO (1) ABOVE THE SUPREME COURT SHALL
                        HAVE SUCH ORIGINAL JURISDICTION AS MAY BE CONFERED UPON
                        IT BY ANY ACT OF THE NATIONAL ASSEMBLY: PROVIDED THAT NO
                        ORIGINAL JURISDICTION SHALL BE CONFERRED UPON THE
                        SUPREME COURT WITH RESPECT TO ANY CRIMINAL MATTER. BY
                        THE PROVISION OF SECTION 233(1) THE SUPREME COURT SHALL
                        HAVE JURISDICTION, TO THE EXCLUSION OF ANY OTHER COURT
                        OF LAW IN NIGERIA, TO HEAR AND DETERMINES APPEALS FROM
                        THE COURT OF APPEAL".
                      </p>
                      <h5>COMPOSITION OF THE COURT:</h5>
                      <p>
                        Section 230 provides that the Supreme Court of Nigeria
                        shall consist of (a) The Chief Justice of Nigeria (b)
                        Such number of Justices of the Supreme Court, not
                        exceeding Twenty One as may be prescribed by act of
                        National Assembly.
                      </p>
                      <p>
                        The Administrative set up is being headed by the Chief
                        Registrar, who of course is the Chief
                        Administrative/Accounting Officer. He is answerable to
                        the Honorable Chief Justice of Nigeria; He is being
                        assisted by four Deputy Chief Registrars and other
                        supporting Staff.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="image-column col-lg-5 wow fadeInRight"
                data-wow-delay="300ms">
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
export default About6