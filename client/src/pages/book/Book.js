// styles
import styles from "./Book.module.css";

// imports
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";

export default function Book(props) {
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    phone: "",
    address: "",
    date: "",
  });

  const today = new Date();

  return (
    <div className="book d-flex justify-content-center align-items-center flex-column">
      <div className="table-bg"></div>
      <h1 className="mb-5 fw-bold text-white">
        Please enter your details below in order to book a table
      </h1>
      <div className="form-group w-50 fs-5">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control bg-dark text-white"
            id="name"
            placeholder="Enter your name"
            onChange={(e) =>
              setBookingDetails({
                ...bookingDetails,
                name: e.target.value,
              })
            }
          />
          <label htmlFor="name" className="text-white">
            Name
          </label>
        </div>
        <div className="form-floating mb-2">
          <input
            type="text"
            className="form-control bg-dark text-white mb-3"
            id="phone"
            placeholder="Enter your phone number"
            onChange={(e) =>
              setBookingDetails({
                ...bookingDetails,
                phone: e.target.value,
              })
            }
          />
          <label htmlFor="phone" className="text-white">
            Phone
          </label>
        </div>
        <div className="row mb-3">
          <div className="col-3">
            <div className="form-floating">
              <input
                type="number"
                className="form-control bg-dark text-white"
                id="address"
                placeholder="Enter your address"
                onChange={(e) =>
                  setBookingDetails({
                    ...bookingDetails,
                    address: e.target.value,
                  })
                }
              />
              <label htmlFor="address" className="text-white">
                Number of people
              </label>
            </div>
          </div>
          <div className="col-3">
            <div className="form-floating mb-3">
              <input
                type="date"
                className="form-control bg-dark text-white"
                id="date"
                placeholder="Enter your date"
                onChange={(e) =>
                  setBookingDetails({
                    ...bookingDetails,
                    date: e.target.value,
                  })
                }
              />
              <label htmlFor="date" className="text-white">
                Date
              </label>
            </div>
          </div>
          <div className="col-6">
            <h5 className="text-danger fw-bold mt-3">
              * Please choose a date starting from tomorrow
            </h5>
          </div>
        </div>
        {bookingDetails.name &&
        bookingDetails.phone &&
        bookingDetails.address &&
        bookingDetails.date > today.toISOString().split("T")[0] ? (
          <Link to="/">
            <button className="btn btn-success w-50 mt-5 book-button fs-4 fw-bold">
              <FontAwesomeIcon icon={faCalendarCheck}></FontAwesomeIcon> Book a
              table
            </button>
          </Link>
        ) : (
          <button
            className="btn btn-success btn-lg w-50 mt-5 book-button fs-4 fw-bold"
            disabled
          >
            <FontAwesomeIcon icon={faCalendarCheck}></FontAwesomeIcon> Book a
            table
          </button>
        )}
      </div>
    </div>
  );
}
