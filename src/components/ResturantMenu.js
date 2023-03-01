import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Config";
import ShimmerUI from "./ShimmerUI";
import useRestaurant from "../hooks/useRestaurant";
import { addItem } from "../store/cardSlice";
import { useDispatch } from "react-redux";
import { clearCartAll } from "../store/cardSlice";

const ResturantMenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id);
  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(addItem("grapes"));
  };
  const handleClearCart = () => {
    dispatch(clearCartAll());
  };
  const handleAdd = (item) => {
    // console.log(item)
    dispatch(addItem(item));
  }

  return !restaurant ? (
    <ShimmerUI />
  ) : (
    <div className="menu w-full   flex justify-center">
      <div className="bg-gray-50 p-10">
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} width="300px" />
        <h1 className="font-bold my-2 text-2xl">{restaurant.name}</h1>
        <h1>Menu id : {restaurant.id}</h1>
        <h2>
          {restaurant.area} , {restaurant.city}
        </h2>
        <h4>{restaurant.avgRating} Star</h4>
        <p>{restaurant.costForTwoMsg}</p>
      </div>

      <div className="bg-gray-50 p-10">
        <h1 className="font-bold text-xl">Menu</h1>
        <button onClick={handleAddItem} className="bg-gray-500 m-3 p-3">
          Add item
        </button>
        <button onClick={handleClearCart} className="bg-red-500 m-3 p-3">
          clear Cart
        </button>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>
              {item.name}: {item.price / 10 / 10 + ".00"}{" "}
              <button className="float-right underline" onClick={() => handleAdd(item)}>Add</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ResturantMenu;
