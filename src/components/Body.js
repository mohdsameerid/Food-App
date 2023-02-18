import { resturantList } from "../Config";
import { ResturantCard } from "./ResturantCard";
import React, { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import {filterdata } from "../utils/helper.js"
import useOnline from "../hooks/useOnline.js";

const Body = () => {
    const[searchText, setSearchText] = useState("");
    const [allResturants, setAllResturants] = useState([]);
    const[filteredResturants, setFilteredResturants] = useState([]);

    useEffect(()=>{
        // API call
        getRestraunt();
    },[]);

    async function getRestraunt(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.4403848&lng=80.3160714&page_type=DESKTOP_WEB_LISTING"  
        );
        const json = await data.json();
        // console.log(json);

        setAllResturants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredResturants(json?.data?.cards[2]?.data?.data?.cards);
    }

    const isOnline = useOnline();
    if(!isOnline){
        return <h1> ⛔ Check Your Internet Connection , Look like you are Offline ....... </h1>;
    }
    
    // if Resturant.length == 0 => Shimmer UI
    // else Show restaurant data  
    return  (allResturants.length == 0) ?  <ShimmerUI /> :  (
        <>
          <div className="Seach-container" >
            <input type="text" placeholder="Search" value={searchText} 
            onChange={ (e)=> {
                setSearchText(e.target.value);
            } } /> 
            <button 
            onClick={ ()=> {
                // (1) need to filter data 
                const data = filterdata(searchText, allResturants);
                // (2) set data
                setFilteredResturants(data);

            }}> Search </button>
          </div>
          
          <div className="restrauntant-list">     
          { (filteredResturants.length > 0 ) ?
            filteredResturants.map( (rest) => {
               return <Link to={"/restaurant/"+rest.data.id} key={rest.data.id} >
                    <ResturantCard {...rest.data}  />
                </Link>
            }) : <h1>NO data Found!!!</h1>
          }
          </div>
        </>
    )
}

export default Body;