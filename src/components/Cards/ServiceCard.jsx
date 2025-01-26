import Image from "next/image";
import React from "react";

const ServiceCard = ({ service }) => {
  const { img, title, price } = service;
  return (
    <div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>Price: {price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
