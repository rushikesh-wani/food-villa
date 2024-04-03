import React, { useEffect, useState } from "react";
import RestoCard from "./RestoCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import NoConnection from "./NoConnection";
import Carousal from "./Carousal/Carousel";
import { SWIGGY_DAPI, SWIGGY_MAPI } from "../config";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
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

    API === SWIGGY_DAPI
      ? (setAllRestaurants(
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        ),
        setFilteredRestaurants(
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        ))
      : (setAllRestaurants(
          json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
            ?.restaurants
        ),
        setFilteredRestaurants(
          json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
            ?.restaurants
        ));
  }

  const status = useOnline();
  if (!status) {
    return <NoConnection />;
  }

  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <Carousal />
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for food items..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>

        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>

        {searchText === "" ? (
          <h2>All Restaurants</h2>
        ) : (
          <h3>Searched for {searchText}</h3>
        )}
      </div>
      {filteredRestaurants.length === 0 ? (
        <h2 style={{ textAlign: "center" }}>
          No search matched for "{searchText}"
        </h2>
      ) : (
        <div className="resto-list">
          {filteredRestaurants.map((result) => {
            return (
              <Link to={"/restaurant/" + result.info.id} key={result.info.id}>
                <RestoCard {...result.info} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
