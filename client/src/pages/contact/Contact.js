import "./Contact.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkedAlt,
  faPhone,
  faEnvelope,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact(props) {
  const [contactDetails, setContactDetails] = useState({
    name: "",
    message: "",
    subject: "",
    email: "",
  });

  return (
    <div className="contact d-flex justify-content-center text-white">
      <div className="contact-bg"></div>
      <section className="my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5 fw-bold">
          Contact us
        </h2>
        <p className="text-center w-responsive mx-auto mb-4 fs-5">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>

        <div className="row">
          <div className="col-md-9 mb-md-0 mb-5">
            <form
              id="contact-form"
              name="contact-form"
              action="mail.php"
              method="POST"
            >
              <div className="row">
                <div className="col-md-6 form-group">
                  <div className="md-form mb-0 form-floating">
                    <input
                      type="text"
                      className="form-control bg-dark text-white"
                      id="name"
                      placeholder="Enter your name"
                      onChange={(e) =>
                        setContactDetails({
                          ...contactDetails,
                          name: e.target.value,
                        })
                      }
                    />
                    <label htmlFor="name" className="text-white">
                      Name
                    </label>
                  </div>
                </div>
                <div className="col-md-6 form-group">
                  <div className="md-form mb-0 form-floating">
                    <input
                      type="email"
                      className="form-control bg-dark text-white"
                      id="email"
                      placeholder="Enter your email"
                      onChange={(e) =>
                        setContactDetails({
                          ...contactDetails,
                          email: e.target.value,
                        })
                      }
                    />
                    <label htmlFor="email" className="text-white">
                      Email
                    </label>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-12 form-group">
                  <div className="md-form mb-0 form-floating">
                    <input
                      type="text"
                      className="form-control bg-dark text-white"
                      id="subject"
                      placeholder="Enter your subject"
                      onChange={(e) =>
                        setContactDetails({
                          ...contactDetails,
                          subject: e.target.value,
                        })
                      }
                    />
                    <label htmlFor="subject" className="text-white">
                      Subject
                    </label>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea
                      className="form-control bg-dark text-white mb-2 fw-bold"
                      id="message"
                      rows="4"
                      placeholder="Enter your message"
                      onChange={(e) =>
                        setContactDetails({
                          ...contactDetails,
                          message: e.target.value,
                        })
                      }
                    ></textarea>
                  </div>
                </div>
              </div>
            </form>

            <div className="text-center text-md-left fw-bold mt-3">
              {contactDetails.name &&
              contactDetails.email &&
              contactDetails.subject &&
              contactDetails.message ? (
                <Link to="/">
                  <button className="btn btn-primary btn-lg w-25">
                    <FontAwesomeIcon icon={faPaperPlane} /> Send
                  </button>
                </Link>
              ) : (
                <button
                  className="btn btn-primary btn-lg w-25 fw-bold"
                  disabled
                >
                  <FontAwesomeIcon icon={faPaperPlane} /> Send
                </button>
              )}
            </div>
            <div className="status"></div>
          </div>

          <div className="col-md-3 text-end">
            <ul className="list-unstyled mb-0">
              <li>
                <FontAwesomeIcon icon={faMapMarkedAlt} className="fs-1" />
                <p>Cluj-Napoca, Brazilor 4, Romania</p>
              </li>

              <li>
                <FontAwesomeIcon icon={faPhone} className="fs-1" />
                <p>03 222 111 33</p>
              </li>

              <li>
                <FontAwesomeIcon icon={faEnvelope} className="fs-1" />
                <p>contact@zenstime.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
