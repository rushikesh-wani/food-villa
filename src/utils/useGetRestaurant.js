import React, { useState, useEffect } from "react";
import { async } from "regenerator-runtime";
import { SWIGGY_DAPI, SWIGGY_MAPI } from "../config";
const useGetRestaurant = () => {
  const [allRestaurant, setAllRestaurant] = useState([]);
  useEffect(() => {
    getRestaurants();
  }, []);
  async function getRestaurants() {
    const isMobile = window.innerWidth <= 768;
    const API = isMobile ? SWIGGY_MAPI : SWIGGY_DAPI;
    const data = await fetch("https://proxy.cors.sh/" + API, {
      headers: {
        "x-cors-api-key": "temp_d130502ab5f267c34e3d672961bc7d97",
      },
    });
    const json = await data.json();
    console.log(json);
    setAllRestaurant(json.data);
  }
  return allRestaurant;
};

export default useGetRestaurant;
