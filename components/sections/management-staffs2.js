import React, { useState, useEffect } from "react";
import endpoint from "../../utils/endpoint";
import Link from "next/link";
const ManagementStaffs = () => {
  const [data, setData] = useState([]);
  const [filePath, setFilePath] = useState();

  const getData = async () => {
    try {
      const res = await endpoint.get("/management-staff");
      console.log("====================================");
      console.log(res.data.data);
      console.log("====================================");
      setData(res.data.data);
      setFilePath(res.data.file_path);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <section className="team-section-three">
        <div className="auto-container">
          <div className="sec-title light text-center">
            <span className="sub-title">Management Staffs</span>
            <h2>
              Management Staffs of the Supreme Court <br />
              of Nigeria
            </h2>
          </div>
          <div className="text-right py-3">
            <div className="btn-box">
              <Link
                href="management-staff"
                className="theme-btn btn-style-two"
                style={{ backgroundColor: "white" }}>
                <span className="btn-title">
                  View All<i className="icon fa fa-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="row">
            {data.slice(0, 3).map((staff, index) => (
              <div
                className="team-block-three col-lg-4 col-md-6 col-sm-12 wow fadeInLeft"
                key={index}>
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link href={`/management/${staff.id}`}>
                        <img
                          src={filePath + staff.picture}
                          alt={filePath + staff.picture}
                        />
                      </Link>
                    </figure>
                  </div>
                  <div className="info-box">
                    <h4 className="name">
                      <Link href={`/management/${staff.id}`}>
                        {staff.title + " "}
                        {staff.fullname}
                      </Link>
                    </h4>
                    <span className="designation">{staff.position}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default ManagementStaffs;
