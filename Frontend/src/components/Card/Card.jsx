import React from "react";
import "./Card.css";
// import { BASE_URL } from "../../App";q
const Card = ({ data }) => {
  return (
    <div>
      <div className="bg-container"></div>
      <div className="box">
        {data?.map(({ name, image, text, price, type }) => (
          <div className="">
          <div key={name} className="product-container">
            <div className="food_img">
              <img src={"http://localhost:9000" + image} alt="imag" />
            </div>
            <div className="food_info">
              <div className="right-detail">
                <h3>{name}</h3>
                <p>{text}</p>

                <p>
                  <span className="rate">${price}</span>
                </p>
                <p>{type}</p>
              </div>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
