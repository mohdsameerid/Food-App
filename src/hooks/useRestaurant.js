import { useEffect, useState } from "react";
// import { Restaurant_Menu_List } from "../Config";
// import config from "../Config";
import config from "../Config";

// make our own custom Hook 'useRestaurant'
const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    getRestaurantInfo();
  }, []);
  async function getRestaurantInfo() {
    const Resdata = await fetch(config.Restuarant_Menu_API + id);
    const json = await Resdata.json();
    // console.log(json?.data?.cards[0].card.card.info);

    // const { name } = json?.data?.cards[0].card.card.info;
    // const { id } = json?.data?.cards[0].card.card.info;
    // console.log(name);
    // console.log(id);
    // const Array =
    // json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
    // console.log(Array);

    setRestaurant(json?.data?.cards);
  }

  return restaurant;
};
export default useRestaurant;
