import React, { useContext } from "react";
import { IMG_CDN_URL } from "../Config";
import UserContext from "../context/UserContext";

export const ResturantCard = ({
  name,
  lastMileTravelString,
  cloudinaryImageId,
  cuisines,
  area,
}) => {
  let url = IMG_CDN_URL + cloudinaryImageId;
  const { user } = useContext(UserContext);
  //   console.log(user.name)
  return (
    <div className="w-56 h-auto shadow-lg  m-4 p-3 rounded-md">
      <img src={url} alt="Img" className="rounded-md" />
      <h3 className="font-bold "> {name}</h3>
      <h4> {cuisines.join(", ")} </h4>
      <h5> {lastMileTravelString} </h5>
      <p className="font-semibold">{area}</p>
      <span>
        {user.name} {user.email}
      </span>
    </div>
  );
};
