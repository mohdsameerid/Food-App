import React from "react";
import config from "../Config";

const FoodItems = ({ imageId, name, description, price }) => {
  console.log(imageId);
  const img = config.IMG_CDN_URL + imageId;
  // console.log(name);
  return (
    <>
      <hr className=""></hr>
      <div className="p-2  bg-gray-50 h-auto">
        <div className="h-auto  p-5 flex justify-evenly">
          <div className="w-1/3 ml-80">
            <span className="font-bold">{name}</span>
            <img src={img} className="h-32 w-60"></img>

            <span className="w-1/3"> {description}</span>
            <br></br>
          </div>
          <div className="m-6 p-5 mr-80 inline-flex">
            <span className=" ">Price: {price / 100}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodItems;
