import React from "react";
import { IMG_CDN_URL } from "../Config";

const FoodItems = ({ cloudinaryImageId, name, description, price }) => {
  const img = IMG_CDN_URL + cloudinaryImageId;
  // console.log(name);
  return (<>
  <hr className=""></hr>
    <div className="p-2  bg-green-100 h-auto">
      <div className="h-auto  p-5 flex justify-evenly">
        <div className="w-1/2">
          <span className="font-bold">{name}</span>
          <img src={img} className="h-32 w-60"></img>
          
          <span className="w-1/3"> {description}</span>
          <br></br>
        </div>
        <div className="m-6 p-10">
          <span className="font-bold">Price: {price / 100}</span>
        </div>
      </div>
    </div>

    </>
  );
};

export default FoodItems;
