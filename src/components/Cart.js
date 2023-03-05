import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodItems from "./FoodItems";
import { clearCartAll } from "../store/cardSlice";

const Cart = () => {
  const data = useSelector((store) => store.card.items);
  const dispatch = useDispatch();
  const handleCart = () => {
    dispatch(clearCartAll());
  };
  //    console.log(data)
  var price = 0;
  data.map((items) => {
    // console.log(items.price / 100);
    price = price + items.price / 100;
    // setTotalPrice(items.price / 100);  //Error:  Too many re-renders. React limits the number of renders to prevent an infinite loop.
  });
  return (
    <div className=" p-5 bg-gray-50">
      <div className="flex justify-evenly">
        <div>
          <h2 className="h-4 font-bold m-3 p-3 rounded-r-xl">
            Cart Length-{data.length}
          </h2>
        </div>
        <div>
          <button
            onClick={handleCart}
            className="bg-red-400 m-3 p-2 rounded-lg text-white"
          >
            Clear Cart
          </button>
        </div>
      </div>

      {data.length !== 0 ? (
        data.map((items) => <FoodItems key={items.id} {...items} />)
      ) : (
        <h1 className="font-bold text-2xl text-center">Cart is empty</h1>
      )}
      <hr></hr>
      {price != 0 ? (
        <div className="m-6 p-5 mr-80 flex justify-end">
          <span className="font-bold mr-2">Total Price: {price}</span>
        </div>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default Cart;

/**
 * img                           items
 * name of restaurant
 *
 *
 */
