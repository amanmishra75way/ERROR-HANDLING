import React from "react";

const Card = ({ image, title }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-64">
      <img className="w-full h-40 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h2 className="text-md font-semibold">{title}</h2>
      </div>
    </div>
  );
};

export default Card;
