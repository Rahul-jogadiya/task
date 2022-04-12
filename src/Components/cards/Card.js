import React from "react";

const Card = ({ imgurl, title }) => {
  return (
    <div className="card">
      <div className="box">
        <div className="card-image">
          <img src={imgurl} alt="diagram" />
        </div>
        <div className="title">{title}</div>
        <div className="subInfo">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
          perferendis corporis commodi a facere, at officia ea amet quisquam
          doloremque ratione ex voluptates porro consequatur consectetur tenetur
          magnam!
        </div>
      </div>
    </div>
  );
};

export default Card;
