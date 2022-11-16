import React from "react";
import house1 from "../assets/house1.jpg";
import houses from "../assets/houses.png";
import CardComponent from "./CardComponent";
const NewListings = () => {
  const cards = [
    { photo: house1, price: "$236,910" },
    { photo: houses, price: "$346,410" },
    { photo: house1, price: "$800,910" },
    { photo: houses, price: "$196,910" },
  ];
  return (
    <div>
      {/* Title */}
      <div className="mx-8 mt-10  ">
        <p className="text-[18.5px] font-medium ">
          New Listings in Spokeane, WA
        </p>
        <p className="text-blue-600 text-[15px]">View All 160 New Listings</p>
      </div>
      {/* Listings */}
      <div className="">
        {cards.map((card) => (
          <CardComponent />
        ))}
      </div>
    </div>
  );
};

export default NewListings;
