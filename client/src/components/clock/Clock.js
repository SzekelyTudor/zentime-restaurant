import "./Clock.css";
import React, { useState, useEffect } from "react";
import { format } from "date-fns";

export default function Clock(props) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  });

  return (
    <div className="card d-flex flex-row justify-content-around shadow-lg bg-dark text-center">
      {format(time, "EEEEEE:HH:mm:ss")
        .split(":")
        .map((el) => {
          return (
            <span key={format(time, "EEEEEE:HH:mm:ss").split(":").indexOf(el)}>
              {el.toUpperCase()}
            </span>
          );
        })}
    </div>
  );
}
