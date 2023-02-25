import React from "react";
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
  return (
    <div className="m-5 p-5 bg-green-100">
      <div className="flex justify-evenly">
        <div>
          <h2 className="h-4 font-bold m-3 p-3 rounded-r-xl">
            Cart Length-{data.length}
          </h2>
        </div>
        <div>
          <button
            onClick={handleCart}
            className="bg-red-500 m-3 p-3 rounded-lg font-bold"
          >
            Clear Cart
          </button>
        </div>
      </div>

      {data.length !== 0 ? (
        data.map((items) => <FoodItems key={items.id} {...items} />)
      ) : (
        <></>
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