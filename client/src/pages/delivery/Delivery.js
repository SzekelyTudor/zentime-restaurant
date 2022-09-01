import "./Delivery.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

export default function Delivery(props) {
  const [orderDetails, setOrderDetails] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });

  return (
    <>
      <div className="delivery-bg"></div>
      <div className="delivery">
        {props.cart.length > 0 ? (
          <div className="delivery-cart d-flex flex-column align-items-center justify-content-center">
            <h2 className="mt-5 fs-1 text-white fw-bold">Your orders</h2>
            <table className="table table-dark table-hover table-striped w-50 mt-5 fs-5">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Item</th>
                  <th scope="col" className="text-center">
                    Price
                  </th>
                  <th scope="col" className="text-center">
                    Total
                  </th>
                  <th scope="col" className="text-center">
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody>
                {props.cart.map((item, index) => (
                  <tr key={item.title}>
                    <td>{index + 1}</td>
                    <td>
                      {item.title} - {item.frequency}
                    </td>
                    <td className="text-center">{item.price}</td>
                    <td className="text-center">
                      $
                      {(
                        parseFloat(item.price.slice(1)) * item.frequency
                      ).toFixed(2)}
                    </td>
                    <td className="text-center">
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => props.removeFromCart(item)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="d-flex w-50 justify-content-between mx-auto mt-5">
              <button
                type="button"
                className="btn btn-success btn-lg fw-bold"
                data-bs-toggle="modal"
                data-bs-target="#order-modal"
              >
                Place order
              </button>
              <h1 className="text-white fw-bold">
                Total: $
                {props.cart.reduce(
                  (acc, item) =>
                    (
                      parseFloat(acc) +
                      parseFloat(item.price.slice(1)) * item.frequency
                    ).toFixed(2),
                  0
                )}
              </h1>
            </div>
          </div>
        ) : (
          <div className="delivery-cart d-flex flex-column justify-content-center align-items-center">
            <h2 className="fs-1 mt-5 text-white fw-bold">Your orders</h2>
            <p className="fs-3 mt-5 text-white">Your cart is empty</p>
          </div>
        )}
        <div
          className="modal fade"
          id="order-modal"
          tabIndex="-1"
          aria-labelledby="Finish order"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content bg-dark">
              <div className="modal-header">
                <h5 className="modal-title text-white">Finish order</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control bg-dark text-white"
                      id="name"
                      placeholder="Enter your name"
                      onChange={(e) =>
                        setOrderDetails({
                          ...orderDetails,
                          name: e.target.value,
                        })
                      }
                    />
                    <label htmlFor="name" className="text-white">
                      Name
                    </label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control bg-dark text-white"
                      id="address"
                      placeholder="Enter your address"
                      onChange={(e) =>
                        setOrderDetails({
                          ...orderDetails,
                          address: e.target.value,
                        })
                      }
                    />
                    <label htmlFor="address" className="text-white">
                      Address
                    </label>
                  </div>
                  <div className="form-floating mb-2">
                    <input
                      type="text"
                      className="form-control bg-dark text-white"
                      id="phone"
                      placeholder="Enter your phone number"
                      onChange={(e) =>
                        setOrderDetails({
                          ...orderDetails,
                          phone: e.target.value,
                        })
                      }
                    />
                    <label htmlFor="phone" className="text-white">
                      Phone
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="payment" className="text-white mb-2">
                    Payment method
                  </label>
                  <select
                    className="form-control bg-dark text-white mb-2"
                    id="payment"
                  >
                    <option>Credit card</option>
                    <option>Debit card</option>
                    <option>Cash</option>
                  </select>

                  <label htmlFor="delivery" className="text-white mb-2">
                    Delivery method
                  </label>
                  <select
                    className="form-control bg-dark text-white mb-2"
                    id="delivery"
                  >
                    <option>Delivery</option>
                    <option>Pickup</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="observations" className="text-white mb-2">
                    * Observations
                  </label>
                  <textarea
                    className="form-control bg-dark text-white mb-2"
                    id="observations"
                    rows="3"
                    placeholder="Enter your observations"
                  ></textarea>

                  <label htmlFor="total" className="text-white mb-2">
                    Total
                  </label>
                  <input
                    type="text"
                    className="form-control bg-dark text-white"
                    id="total"
                    placeholder="Total"
                    value={
                      "$" +
                      props.cart.reduce(
                        (acc, item) =>
                          (
                            parseFloat(acc) +
                            parseFloat(item.price.slice(1)) * item.frequency
                          ).toFixed(2),
                        0
                      )
                    }
                    readOnly
                  />
                  {orderDetails.phone.length > 0 &&
                  orderDetails.address.length > 0 &&
                  orderDetails.name.length > 0 ? (
                    <Link to="/">
                      <button
                        className="btn btn-lg btn-success w-100 mt-3"
                        onClick={props.clearCart}
                        data-bs-dismiss="modal"
                      >
                        Place order
                      </button>
                    </Link>
                  ) : (
                    <button
                      className="btn btn-lg btn-success w-100 mt-3"
                      onClick={props.clearCart}
                      data-bs-dismiss="modal"
                      disabled
                    >
                      Place order
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
