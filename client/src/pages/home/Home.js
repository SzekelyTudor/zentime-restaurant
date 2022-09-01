// styles
import styles from "./Home.module.css";

// imports
import React from "react";
import Clock from "../../components/clock/Clock";
import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <div className={`${styles.home} d-flex align-items-center px-5`}>
      <div className={styles.left}>
        <img
          src={require("./assets/mainfood.jpg")}
          className={`img-fluid ${styles.mainfood} shadow-lg`}
          alt="main food"
        />
      </div>
      <div className={styles.right}>
        <Clock />
        <h3 className={styles.title}>Welcome to Zen's Time Restaurant</h3>
        <p className={styles.paragraph}>
          A modern urban meeting point. A place to eat, drink and socialise, for
          special occasions, and informal everyday affairs.
        </p>
        <Link to="/book">
          {" "}
          <button
            className={`${styles["home-button"]} btn btn-secondary btn-lg mt-5 shadow-lg`}
          >
            BOOK A TABLE
          </button>{" "}
        </Link>
      </div>
    </div>
  );
}
