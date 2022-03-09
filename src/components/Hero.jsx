import React from "react";
import "./hero.css";
import "../App.css";

export const Hero = ({ Group }) => {
  return (
    <div>
      <section>
        <img src={Group} alt="" className="Hero--photo" />
        <h1 className="Hero--header">Online Experiences</h1>
        <p className="Hero--text">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </section>
    </div>
  );
};
