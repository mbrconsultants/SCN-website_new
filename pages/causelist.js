import React from "react";
import Layout from "@/components/layout/Layout";
import FullCalendar from "@fullcalendar/react";
import { useEffect, useState, useContext } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import PageTitle from "@/components/sections/PageTitle";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import endpointDairy from "../utils/endpointDiary";

const Causelist = () => {
  const [diaryCount, setCasediaryCount] = useState([]);
   const [Dairies, setCasediary] = useState([]);
  const [showCaseModal, setCaseShowModal] = useState(false);
    const [selectedDate, setSelectedDate] = useState("");
  const [isLoading, setLoading] = useState(false);
   let [dat, filteredEvents] = useState([]);
 let formattedStartDate = "";



    //function to get diary count
  const getCasediaryCount = async () => {
    setLoading(true);
    await endpointDairy
      .get("/cause-list/case-diary-list-type-count")
      .then((res) => {
        console.log("new case count", res.data.data);
        setCasediaryCount(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

 
  const getCasediary = async () => {
    setLoading(true);
    await endpointDairy
      .get("/cause-list/case-diary-list")
      .then((res) => {
        // console.log("case diary data", res.data.data)
        setCasediary(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
    
  useEffect(() => {
     getCasediary();
    getCasediaryCount();
  }, []);

  const modifiedEvents = diaryCount.map((data) => {
    const eventTitle = data.casetypes
      .map((ctype) => {
        return ctype.categories
          .map((catCount) => `${catCount.abr}: ${catCount.count}`)
          .join(", ");
      })
      .join(" - ");

    return {
      title: eventTitle,
      start: data.date_held,
      // backgroundColor: data.casetypes[0].color,
      extendedProps: {
        data: data,
      },
    };
  });

  const renderEventContent = (eventInfo) => {
    const eventData = eventInfo.event.extendedProps.data;

    if (!eventData) {
      return null;
    }

    const casetypes = eventData.casetypes;

    return (
      <>
        {casetypes.map((ctype) => (
          <div
            key={ctype.type}
            style={{ backgroundColor: ctype.color }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                {ctype.categories.slice(0, 1).map((catCount) => (
                  <div key={catCount.abr}>
                    <span onClick={handleEventClick}>{catCount.abr}: </span>
                    <span onClick={handleEventClick}>{catCount.count}</span>
                  </div>
                ))}
              </div>
              <div>
                {ctype.categories.slice(1).map((catCount) => (
                  <div key={catCount.abr}>
                    <span onClick={handleEventClick}>{catCount.abr}: </span>
                    <span onClick={handleEventClick}>{catCount.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  function renderDayCell(dayInfo) {
    return (
      <div
        className="dateCellContent"
        style={{ position: "relative" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column-reverse",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}>
          <span>{dayInfo.dayNumberText}</span>
        </div>
        <button
          className="addbutton btn-xs"
          style={{ position: "absolute", right: 0, bottom: 25 }}
          onClick={handleDateClick}>
          {/* Add Diary */}
        </button>
      </div>
    );
  }

  //handle event click
  const handleEventClick = (eventInfo) => {
    formattedStartDate = eventInfo.event.extendedProps.data.date_held;

    // Filtering the Dairies array
    const events = Dairies.filter(
      (diary) => diary.date_held === formattedStartDate
    );
    filteredEvents(events);

    setSelectedDate(new Date(formattedStartDate));
    getDateCasediary();
    setCaseShowModal(true);
  };

  //handle clicking of date
  const handleDateClick = ({ date, allDay, jsEvent, view }) => {
    // const d = new Date(date);
    // const day = d.getDate();
    // const month = d.getMonth() + 1;
    // const year = d.getFullYear();
    // const dDate = `${year}-${month}-${day}`;
    // setSelectedDate(date);
    // setDetails({ ...details, date_held: dDate });
    // setShowModal(true);
  };
 const getDateCasediary = async () => {
   setLoading(true);
   await endpointDairy
     .get(`/cause-list/case-diary-list-type-count/${formattedStartDate}`)
     .then((res) => {
       console.log("todays case", res.data.data);
       setDatediary(res.data.data);
       setLoading(false);
     })
     .catch((err) => {
       setLoading(false);
       console.log(err);
     });
 };


  return (
    <div>
      <Layout>
        <PageTitle pageName="Cause List" />
        <div className="mx-1 px-1 my-5">
          <FullCalendar
            initialView="dayGridMonth"
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            //  headerToolbar={{
            //   start:"",
            //   center:"",
            //   end:"dayGridMonth, timeGridWeek, timeGridDay",
            //  }}
            events={modifiedEvents}
            displayEventEnd={true}
            eventContent={renderEventContent}
            themeSystem="bootstrap"
            eventClick={handleEventClick}
            // dateClick={handleDateClick}
            editable={true}
            // dayRender={renderDay}
            dayCellContent={renderDayCell}
          />
        </div>
        <Modal show={showCaseModal}>
          <Modal.Header>
            <Button
              onClick={() => setCaseShowModal(false)}
              className="btn-close"
              variant="red">
              {/* x */}
            </Button>
          </Modal.Header>
          <div className="row">
            <div className="col-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <p className="card-description text-center">
                    {" "}
                    Causelist for{" "}
                    {selectedDate
                      ? selectedDate.toLocaleString("en-US", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })
                      : ""}{" "}
                  </p>
                  <form className="forms-sample">
                    <ul>
                      {dat.map((diary) => (
                        <a
                          className="list-a card mb-2 text-white text-align-left"
                          href={`/user-case/${diary.id}`}
                          style={{
                            backgroundColor: diary.CaseType.case_color,
                            color: diary.CaseType.case_color,
                          }}>
                          {/* <li>{diary.CaseAttachements.Case.suite_no}</li> */}
                          <li className="text-left text-white">
                            {diary.CaseAttachements.map((attachments) => (
                              <React.Fragment key={attachments.Case.id}>
                                <span className="text-center">
                                  {attachments.Case.suite_no}{" "}
                                  <span style={{ color: "white" }}>
                                    ({attachments.Case.parties})
                                  </span>
                                </span>
                                <br />
                              </React.Fragment>
                            ))}
                          </li>
                        </a>
                      ))}
                    </ul>
                  </form>
                </div>
              </div>
            </div>
            {/* <Button
              onClick={() => setShowModal(false)}
              className="btn btn-light btn-sm ml-5 mb-3"
              variant="">
              close
            </Button> */}
          </div>
        </Modal>
      </Layout>
    </div>
  );
};

export default Causelist;
