import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import config from "../Config";
import ShimmerUI from "./ShimmerUI";
import useRestaurant from "../hooks/useRestaurant";
import { addItem } from "../store/cardSlice";
import { useDispatch } from "react-redux";
import { clearCartAll } from "../store/cardSlice";

const ResturantMenu = () => {
  const { id } = useParams();
  const Restaurant = useRestaurant(id);

  // details of Restaurant
  const restaurantData = Restaurant[0]?.card?.card?.info;
  // console.log(restaurantData);

  // details of menu of restaurant
  const restaurantMenu =
    Restaurant[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      .itemCards;
  // console.log(restaurantMenu);

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
  };

  return !restaurantData ? (
    <ShimmerUI />
  ) : (
    <div className="menu w-full   flex justify-center">
      <div className="bg-gray-50 p-10">
        <img
          src={config.IMG_CDN_URL + restaurantData.cloudinaryImageId}
          width="300px"
        />
        <h1 className="font-bold my-2 text-2xl">{restaurantData.name}</h1>
        <h1>Menu id : {restaurantData.id}</h1>
        <h2>
          {restaurantData.areaName} , {restaurantData.city}
        </h2>
        <h4>{restaurantData.avgRating} Star</h4>
        <p>{restaurantData.costForTwoMsg}</p>
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
          {restaurantMenu.map((items) => (
            <li key={items?.card?.info?.id}>
              {items?.card?.info?.name}: {items?.card?.info?.price / 100}{" "}
              <button
                className="float-right underline"
                onClick={() => handleAdd(items?.card?.info)}
              >
                Add
              </button>
            </li>
          ))}
        </ul>

        {/* <ul>
          {restaurantMenu.map((items) => (
            <li key={items?.card?.info?.id}>
              {item.name}: {item.price / 10 / 10 + ".00"}{" "}
              <button
                className="float-right underline"
                onClick={() => handleAdd(item)}
              >
                Add
              </button>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};
export default ResturantMenu;
