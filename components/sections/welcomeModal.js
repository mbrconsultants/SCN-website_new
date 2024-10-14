import React, { useState, useEffect } from "react";
import endpoint from "../../utils/endpoint";
// import "./welcomeStyles.css"; // Import custom CSS for wild styles

const Modal = ({ isOpen, onClose }) => {
  const [welcomeNote, setWelcomeNote] = useState();

  const getWelcomeDetails = async () => {
    try {
      const res = await endpoint.get("/welcome");
      setWelcomeNote(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getWelcomeDetails();
  }, []);

  return (
    <>
      <div
        className={`modal fade ${isOpen ? "show wild-show" : ""}`}
        style={{ display: isOpen ? "block" : "none" }}
        tabIndex="-1"
        role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg text-white"
          role="document">
          <div className="modal-content wild-modal-content">
            <div className="modal-header wild-modal-header">
              <h5 className="modal-title wild-modal-title text-center">
                Welcome to the Supreme Court of Nigeria Website
              </h5>
              <button
                type="button"
                className="close wild-close-button"
                onClick={onClose}
                aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body wild-modal-body">
              <section className="call-to-action-four wild-call-to-action">
                <div className="auto-container">
                  <div className="outer-box">
                    <div className="title-box">
                      <div
                        className="wild-welcome-text"
                        dangerouslySetInnerHTML={{
                          __html: welcomeNote,
                        }}></div>
                    </div>
                    <figure className="image wild-image">
                      <img
                        src="/images/banner/scn-scale.jpg"
                        alt="Image"
                        className="wild-img"
                      />
                    </figure>
                  </div>
                </div>
              </section>
            </div>
            <div className="modal-footer wild-modal-footer">
              <button
                type="button"
                className="btn btn-secondary wild-close-button"
                onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
