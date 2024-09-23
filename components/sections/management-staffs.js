import Link from "next/link";
const ManagementStaffs = () => {
  return (
    <>
      <section className=" pt-0">
        <div className="auto-container">
          <div className="sec-title light text-center">
            {/* <span className="sub-title">Our Team</span> */}
            <h2>{/* Management Staff <br />  */}</h2>
          </div>

          <div className="row">
            <div className="team-block-seven col-lg-4 col-md-6 col-sm-12 wow ">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link href="#">
                      <img
                        src="/images/resource/mgt/mgtsarki1.jpg"
                        alt=""
                      />
                    </Link>
                  </figure>
                </div>
                <div className="info-box">
                  <h4 className="name">
                    <Link href="#">MRS. Hajo Sarki Bello</Link>
                  </h4>
                  <span className="designation">Cheif Registrar</span>
                </div>
              </div>
            </div>
            <div className="team-block-seven col-lg-4 col-md-6 col-sm-12 wow ">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link href="#">
                      <img
                        src="/images/resource/mgt/mgtjego2.jpg"
                        alt=""
                      />
                    </Link>
                  </figure>
                </div>
                <div className="info-box">
                  <h4 className="name">
                    <Link href="#">Mr. Reuben M. A. Jego</Link>
                  </h4>
                  <span className="designation">Deputy Cheif Registrar I</span>
                </div>
              </div>
            </div>
            <div className="team-block-seven col-lg-4 col-md-6 col-sm-12 wow ">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link href="#">
                      <img
                        src="/images/resource/mgt/mgtbabasoro3.jpg"
                        alt=""
                      />
                    </Link>
                  </figure>
                </div>
                <div className="info-box">
                  <h4 className="name">
                    <Link href="#">Mr. Yusuf Abubakar Babasoro</Link>
                  </h4>
                  <span className="designation">Deputy Cheif Registrar II</span>
                </div>
              </div>
            </div>
            <div className="team-block-seven col-lg-4 col-md-6 col-sm-12 wow ">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link href="#">
                      <img
                        src="/images/resource/mgt/mgtsani4.jpg"
                        alt=""
                      />
                    </Link>
                  </figure>
                </div>
                <div className="info-box">
                  <h4 className="name">
                    <Link href="#">Mr. Ibrahim Sani Mohammed, mni</Link>
                  </h4>
                  <span className="designation">Director Training</span>
                </div>
              </div>
            </div>{" "}
            <div className="team-block-seven col-lg-4 col-md-6 col-sm-12 wow ">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link href="#">
                      <img
                        src="/images/resource/mgt/mgtakande5.jpg"
                        alt=""
                      />
                    </Link>
                  </figure>
                </div>
                <div className="info-box">
                  <h4 className="name">
                    <Link href="#">Dr. Festus Aweneri Akande</Link>
                  </h4>
                  <span className="designation">
                    Director Press and Information
                  </span>
                </div>
              </div>
            </div>{" "}
            <div className="team-block-seven col-lg-4 col-md-6 col-sm-12 wow ">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link href="#">
                      <img
                        src="/images/resource/mgt/mgtuka6.jpg"
                        alt=""
                      />
                    </Link>
                  </figure>
                </div>
                <div className="info-box">
                  <h4 className="name">
                    <Link href="#"> Dr. Ochea Ochea Ukai</Link>
                  </h4>
                  <span className="designation">Acting Medical Director</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ManagementStaffs;
