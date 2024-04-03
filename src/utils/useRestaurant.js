import { useState, useEffect } from "react";
import { FETCH_MENU_MURL, FETCH_MENU_URL } from "../config";

const useRestaurant = (restoId) => {
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const isMobile = window.innerWidth <= 768;
    const API = isMobile ? FETCH_MENU_MURL : FETCH_MENU_URL;
    const data = await fetch("https://proxy.cors.sh/" + API + restoId, {
      headers: {
        "x-cors-api-key": "temp_d130502ab5f267c34e3d672961bc7d97",
      },
    });
    const json = await data.json();
    // console.log(json);

    setRestaurant(json.data);
  }
  return restaurant;
};

export default useRestaurant;
