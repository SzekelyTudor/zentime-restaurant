import React from "react";
import "./About.css";

export default function About(props) {
  return (
    <div className="about row w-100">
      <div className="about-bg"></div>
      <div className="col-6 text-end text-white left">
        <h1>About Us</h1>
        <p className="fs-5">
          Zen's Time Restaurant builds its own spice-based cuisine around
          British micro-seasonality: vegetables slowly grown for flavour,
          sustainable, line-caught fish and aged native beef. Our kitchen aims
          to serve produce in its optimal state, harnessing as much flavour as
          possible while respecting the true nature of the ingredient.
        </p>
        <p className="fs-5">
          The foundation for our menu is a vast collection of spices with a
          focus on the most well-known and loved dishes from around the world,
          which we have meticulously sourced over the past few years. We explore
          ingredients such as Grains of Selim, a smoky peppercorn with the scent
          of eucalyptus, plantains and scotch bonnet chillies, which we ferment,
          burn and pickle.
        </p>
        <h4 className="fw-bold">Open:</h4>
        <p>(Monday - Saturday) 08:00 am - 10:00 pm</p>
        <p>(Sunday) 09:30 am - 10:00 pm</p>
        <h4 className="fw-bold">Breakfast:</h4>
        <p>08:00 am - 12:00 pm</p>
      </div>
      <div className="col-6 right">
        <img
          src={require("./assets/restaurant.jpg")}
          className="restaurant-img"
          alt="restaurant"
        />
      </div>
    </div>
  );
}
