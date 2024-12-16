import React, { useState, useEffect } from "react";
import endpoint from "../../utils/endpoint";
import ModalVideo from 'react-modal-video';
import { Button, Modal } from "react-bootstrap";
import Link from "next/link"

const Subscribe4 = () => {
    const [welcomeNote, setWelcomeNote] = useState();
    const [isOpen, setOpen] = useState(false);
    const [isOpenReadMore, setOpenReadMore] = useState(false);

    const truncateTitle = (title, wordLimit) => {
        if (!title) return ""; // Check if title is undefined or null new - 0EA476 | old - 0EA476
        const words = title.split(" ");
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(" ") + "...";
        }
        return title;
    };

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

    // Inline styles for the card, play button, and icon with animation
    const cardStyle = {
        // background: '#0EA476', // Gradient from soft blue to mint green
        background: "linear-gradient(190deg, #66BB6A 0%, #0EA476 100%)",
        // background: '#66BB6A',
        borderRadius: '10px', // Rounded corners for a smoother look
        padding: '20px', // Padding inside the card
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Soft shadow for a subtle elevation effect
    };

    const playButtonStyle = {
        display: 'inline-block',
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
    };

    const playIconStyle = {
        fontSize: '2rem',
        color: '#ff0000', // Example: red color for the play icon
        animation: 'pulse 2s infinite', // Continuous pulse animation
    };

    // Keyframes for the pulse animation
    const styles = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.3); }
            100% { transform: scale(1); }
        }
    `;

    return (
        <>
            {/* Adding styles inside the component */}
            <style>{styles}</style>

            <section className="subscribe-section">
                <div className="bg bg-image" style={{ backgroundImage: 'url(images/banner/newscnwelcome.jpg)' }}></div>
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="row">
                            <div className="title-column col-lg-6 col-md-12">
                                <div className="inner-column">
                                    <h2 className="title">Welcome to the Supreme Court of Nigeria</h2>
                                    <div className="text" style={{ fontFamily: 'Bahnschrift SemiCondensed', fontSize: '18px' }}>The Supreme Court has original jurisdiction in any dispute between the federation and a state and also has appellate jurisdiction to hear and determine appeal from the Court of Appeal... &nbsp; &nbsp;
                                        <Link
                                            href="#"
                                            className="theme-btn btn-style-one hover-light rounded-pill"
                                            onClick={() => { setOpenReadMore(true) }}>
                                            <span className="btn-title">Read More...</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="form-column col-lg-6 col-md-12 col-sm-12">
                                <div className="subscribe-form">
                                    <form method="post" action="#">
                                        <div className="row">
                                            <div className="card" style={cardStyle}>
                                                <div className="p-5 text-center">
                                                    <a
                                                        onClick={() => setOpen(true)}
                                                        className="play-btn"
                                                        style={playButtonStyle}
                                                    >
                                                        <i className="icon fa fa-play" aria-hidden="true" style={playIconStyle}></i>
                                                    </a>
                                                    &nbsp;&nbsp; <span style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>Discover the Highlights of the 2024 Legal Year!</span>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="KbhCMuKc9ck" onClose={() => setOpen(false)} />


            {/* <Modal show={isOpenReadMore}>
                <Modal.Header>
                    <h5 className="modal-title" id="staticBackdropLabel" style={{ color: '#0EA476' }}> <span className="fa fa-balance-scale" style={{ color: '#0EA476' }}></span> Welcome Note </h5>
                    <button type="button" className="btn-close" onClick={() => setOpenReadMore(false)}></button>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ padding: '10px' }}>
                        <p style={{ fontFamily: 'Bahnschrift SemiCondensed', fontSize: '18px' }}>The Supreme Court has original jurisdiction in any dispute between the Federation and a state or
                            between states and also has appellate jurisdiction to hear and determine appeals from the Court of Appeal.</p>
                        <p style={{ fontFamily: 'Bahnschrift SemiCondensed', fontSize: '18px' }}>The Supreme Court of Nigeria consists of the Chief Justice of Nigeria and such number of Justices of the Supreme Court, not exceeding twenty-one, as may be prescribed by an Act of the National Assembly.
                            Presently the Supreme Court is made up of the Chief Justice and Nineteen (19) other Justices.</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="theme-btn btn-style-one hover-light rounded-pill py-2" onClick={() =>
                        setOpenReadMore(false)
                    }>Close</button>
                </Modal.Footer>
            </Modal> */}


            <Modal
                show={isOpenReadMore}
                onHide={() => setOpenReadMore(false)}
                dialogClassName="modal-dialog-centered" /* Ensures vertical centering with Bootstrap */
                centered /* Centers the modal using Bootstrap's built-in property */
            >
                <Modal.Header>
                    <h5 className="modal-title" id="staticBackdropLabel" style={{ color: '#0EA476' }}>
                        <span className="fa fa-balance-scale" style={{ color: '#0EA476' }}></span> Welcome Note
                    </h5>
                    <button
                        type="button"
                        className="btn-close"
                        onClick={() => setOpenReadMore(false)}
                    ></button>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ padding: '10px' }}>
                        <p style={{ fontFamily: 'Bahnschrift SemiCondensed', fontSize: '18px' }}>
                            The Supreme Court has original jurisdiction in any dispute between the Federation and a state or
                            between states and also has appellate jurisdiction to hear and determine appeals from the Court of Appeal.
                        </p>
                        <p style={{ fontFamily: 'Bahnschrift SemiCondensed', fontSize: '18px' }}>
                            The Supreme Court of Nigeria consists of the Chief Justice of Nigeria and such number of Justices of the Supreme Court, not exceeding twenty-one, as may be prescribed by an Act of the National Assembly.
                            Presently the Supreme Court is made up of the Chief Justice and Nineteen (19) other Justices.
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        type="button"
                        className="theme-bt btn-style-on hover-light rounded-pil py-2 btn btn-danger"
                        onClick={() => setOpenReadMore(false)}
                    >
                        Close
                    </button>
                </Modal.Footer>
            </Modal>


        </>
    );
};

export default Subscribe4;
