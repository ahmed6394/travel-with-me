import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { name, img, description, price, id } = service;
  const navigate = useNavigate();
  const navigateToCheckout = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="container">
      <div className="service ">
        <img
          style={{
            height: "260px",
            width: "100%",
            borderRadius: "5px 5px 0px 0px",
          }}
          src={img}
          alt=""
        />
        <h2>{name}</h2>
        <p>Price: ${price}</p>
        <p>
          <small className="px-5">{description}</small>
        </p>
        <Button onClick={() => navigateToCheckout(id)} variant="primary">
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Service;
