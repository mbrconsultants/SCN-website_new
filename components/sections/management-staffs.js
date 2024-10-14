import React, { useState, useEffect } from "react";
import endpoint from "../../utils/endpoint";
import Link from "next/link";
const ManagementStaffs = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await endpoint.get("/management-staff");
      console.log("====================================");
      console.log(res.data.data);
      console.log("====================================");
      setData(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <section
        className=" "
        style={{ paddingTop: "80px" }}>
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-title">
              Meet our dedicated management staff
            </span>
            <h2 style={{ color: "#009009" }}>Management Staff</h2>
          </div>

          <div className="row">
            {data &&
              data.map((staff, index) => (
                <div
                  className="team-block-seven col-lg-4 col-md-6 col-sm-12 wow "
                  key={index}>
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <Link href={`/management/${staff.id}`}>
                          <img
                            src={
                              process.env.NEXT_PUBLIC_UPLOAD_URL +
                              "management/" +
                              staff.picture
                            }
                            alt={staff.fullname}
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
