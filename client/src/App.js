import React, { useState } from "react";
import "./App.css";
import NavigationBar from "./components/navigation_bar/NavigationBar";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./pages/menu/Menu";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Delivery from "./pages/delivery/Delivery";
import Book from "./pages/book/Book";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const itemInCart = cart.find((i) => i.title === item.title);
    if (itemInCart) {
      setCart(
        cart.map((i) =>
          i.title === item.title ? { ...i, frequency: i.frequency + 1 } : i
        )
      );
    } else {
      setCart([...cart, { ...item, frequency: 1 }]);
    }
    const toastLiveExample = document.getElementById("liveToast");
    const toast = new window.bootstrap.Toast(toastLiveExample);
    toast.show();
  };

  const removeFromCart = (item) => {
    const itemInCart = cart.find((i) => i.title === item.title);
    if (itemInCart.frequency > 1) {
      setCart(
        cart.map((i) =>
          i.title === item.title ? { ...i, frequency: i.frequency - 1 } : i
        )
      );
    } else {
      setCart(cart.filter((i) => i.title !== item.title));
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu addToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/delivery"
            element={
              <Delivery
                cart={cart}
                removeFromCart={removeFromCart}
                clearCart={clearCart}
              />
            }
          />
          <Route path="/book" element={<Book />} />
        </Routes>
      </BrowserRouter>
      <div
        className="position-fixed bottom-0 end-0 p-3 mx-3"
        style={{ zIndex: "1" }}
      >
        <div
          id="liveToast"
          className="toast hide"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <strong className="me-auto">Successfully added to order</strong>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body">
            {cart.map((item) => (
              <div key={item.title}>
                {item.title} - {item.frequency} -{" $"}
                {(parseFloat(item.price.slice(1)) * item.frequency).toFixed(2)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
