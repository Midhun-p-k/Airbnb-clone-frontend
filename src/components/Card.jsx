import React from "react";
import "./card.css";
import "../App.css";

export const Card = ({ item }) => {
  console.log(item.title);

  return (
    <>
      <div className="Card">
        <img src={item.coverImg} alt="img" className="Card--image" />
        <div className="Card--stats">
          <img src={item.starimg} alt="" className="Card--star" />
          <span>{item.stats.rating}</span>
          <span className="gray">({item.stats.reviewCount}) .</span>
          <span className="gray">{item.location}</span>
        </div>
        <p className="Card-title">{item.title}</p>
        <p>
          <span className="bold">From ${item.price} </span>/ person
        </p>
      </div>
    </>
  );
};
