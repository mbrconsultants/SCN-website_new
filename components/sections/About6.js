import BlogRecentSection from "./RecentNews";

const About6 = (text) => {
    return (
      <>
        <section className="about-section-nine">
          <div className="auto-container">
            <div className="row">
              <div className="content-column col-lg-8 col-md-12 col-sm-12 wow fadeInLeft">
                <div className="inner-column">
                  <div className="sec-title">
                    <span className="sub-title">About Us</span>
                    <h2>History of the Supreme Court of Nigeria</h2>
                    <div
                      className="text"
                      style={{ textAlign: "justify" }}>
                      <p>
                        The coinage Supreme Court was first used in 1863 by the
                        colonial administration through the enactment of the
                        Supreme Court Ordinance No. II which established it as a
                        colony with civil and criminal jurisdiction.
                      </p>
                      <p>
                        In 1963, following the proclamation of the Federal
                        Republic of Nigeria and the constitution which came into
                        operation on October 1, 1963, Section III of this
                        constitution gave legal instrument that gave birth to
                        Supreme Court following the abolition of section 120
                        which abrogated the appellate jurisdiction of the
                        judicial committee of the Privy Council which was
                        Nigeria’s apex Court. This Act also gave it the status
                        of the highest Court in the judicial hierarchy while the
                        Independence Constitution of 1960 vested in it the
                        jurisdiction of the Federal Supreme Court.
                      </p>
                      <p>
                        The 1979 Constitution in its Section 210 (1) of the 1999
                        Nigerian Constitution clearly gave it the name Supreme
                        Court of Nigeria. The Court operates as the apex Court
                        on matters involving both Federal and State Laws. The
                        Supreme Court is composed of the Chief Justice of
                        Nigeria and not more than twenty others appointed by the
                        President after being recommended by the National
                        Judicial Council subject to the Senate’s confirmation.
                        They are required to retire after a mandatory service
                        age of 70.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="image-column col-lg-4 wow fadeInRight"
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