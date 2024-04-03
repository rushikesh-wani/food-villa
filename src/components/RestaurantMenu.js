import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import Error from "./Error";
import { img_CDN_Url } from "../config";
import { Link } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const para = useParams();
  const { restoId } = para;
  console.log(para);

  const isMobile = window.innerWidth <= 768;

  const restaurant = useRestaurant(restoId);
  console.log(restaurant);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item));
  };
  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      <div className="detail">
        {isMobile ? (
          <>
            <div className="menu-resto">
              <Link to="/">Back to HomePage </Link>
              <h2>Restaurant Details</h2>
              <ul>
                <li className="menu-item">
                  <div className="menu-item-details">
                    <p className="menu-item-decription">
                      Id: {restaurant?.cards[2]?.card?.card?.info?.id}
                    </p>
                    <h3 className="menu-item-title">
                      Name: {restaurant?.cards[2]?.card?.card?.info?.name}
                    </h3>
                    <p className="menu-item-description">
                      Location:{" "}
                      {restaurant?.cards[2]?.card?.card?.info?.locality} ,
                      {restaurant?.cards[2]?.card?.card?.info?.city}
                    </p>
                    <p className="menu-item-description">
                      Cuisines:
                      {restaurant?.cards[2]?.card?.card?.info?.cuisines.join(
                        ", "
                      )}
                    </p>
                    <p className="menu-item-price">
                      {" "}
                      {restaurant?.cards[2]?.card?.card?.info?.avgRating} Rating
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="menu">
              <h2>
                Recommended (
                {!restaurant?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR
                  ?.cards[2]?.card?.card?.itemCards
                  ? 0
                  : restaurant?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR
                      ?.cards[2]?.card?.card?.itemCards.length}
                )
              </h2>
              {!restaurant?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR
                ?.cards[2]?.card?.card?.itemCards ? (
                <p className="menu-item-price">
                  No recommedation found for this restaurant!
                </p>
              ) : (
                <ul>
                  {restaurant?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map(
                    (item) => (
                      <li className="menu-item" key={item?.card?.info?.id}>
                        <img
                          src={img_CDN_Url + item?.card?.info?.imageId}
                          alt="Img not found"
                          className="menu-item-image"
                        />
                        <div className="menu-item-details">
                          <h3 className="menu-item-title">
                            {item?.card?.info?.name}
                          </h3>
                          <p className="menu-item-description">
                            {item?.card?.info?.description}
                          </p>
                          <p className="menu-item-description">
                            {item?.card?.info?.itemAttribute.portionSize} |
                            {item?.card?.info?.itemAttribute.vegClassifier}
                          </p>
                          <p className="menu-item-price">
                            {item?.card?.info?.price / 100}/-
                          </p>
                          <h3 className="menu-item-title">
                            <button
                              onClick={() => {
                                handleAddItem(item);
                              }}
                              className="menu-item-title menu-btn"
                            >
                              Add
                            </button>

                            <hr />
                          </h3>
                        </div>
                      </li>
                    )
                  )}
                </ul>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="menu-resto">
              <Link to="/">Back to HomePage </Link>
              <h2>Restaurant Details</h2>
              <ul>
                <li className="menu-item">
                  <div className="menu-item-details">
                    <p className="menu-item-decription">
                      Id: {restaurant?.cards[2]?.card?.card?.info?.id}
                    </p>
                    <h3 className="menu-item-title">
                      Name: {restaurant?.cards[2]?.card?.card?.info?.name}
                    </h3>
                    <p className="menu-item-description">
                      Location:{" "}
                      {restaurant?.cards[2]?.card?.card?.info?.locality} ,
                      {restaurant?.cards[2]?.card?.card?.info?.city}
                    </p>
                    <p className="menu-item-description">
                      Cuisines:
                      {restaurant?.cards[2]?.card?.card?.info?.cuisines.join(
                        ", "
                      )}
                    </p>
                    <p className="menu-item-price">
                      {" "}
                      {restaurant?.cards[2]?.card?.card?.info?.avgRating} Rating
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="menu">
              <h2>
                Recommended (
                {!restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
                  ?.cards[2]?.card?.card?.itemCards
                  ? 0
                  : restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
                      ?.cards[2]?.card?.card?.itemCards.length}
                )
              </h2>
              {!restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
                ?.cards[2]?.card?.card?.itemCards ? (
                <p className="menu-item-price">
                  No recommedation found for this restaurant!
                </p>
              ) : (
                <ul>
                  {restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map(
                    (item) => (
                      <li className="menu-item" key={item?.card?.info?.id}>
                        <img
                          src={img_CDN_Url + item?.card?.info?.imageId}
                          alt="Img not found"
                          className="menu-item-image"
                        />
                        <div className="menu-item-details">
                          <h3 className="menu-item-title">
                            {item?.card?.info?.name}
                          </h3>
                          <p className="menu-item-description">
                            {item?.card?.info?.description}
                          </p>
                          <p className="menu-item-description">
                            {item?.card?.info?.itemAttribute.portionSize} |
                            {item?.card?.info?.itemAttribute.vegClassifier}
                          </p>
                          <p className="menu-item-price">
                            {item?.card?.info?.price / 100}/-
                          </p>
                          <h3 className="menu-item-title">
                            <button
                              onClick={() => {
                                handleAddItem(item);
                              }}
                              className="menu-item-title menu-btn"
                            >
                              Add
                            </button>
                            <hr />
                          </h3>
                        </div>
                      </li>
                    )
                  )}
                </ul>
              )}
            </div>
          </>
        )}
      </div>

      {/* <div className="resto-info">
        <h1>{restaurant?.cards[2]?.card?.card?.info?.name}</h1>
        <h3>
          locality: City: {restaurant?.cards[2]?.card?.card?.info?.locality}
        </h3>
        <h3>City: {restaurant?.cards[2]?.card?.card?.info?.city}</h3>
        <img
          src={
            img_CDN_Url +
            restaurant?.cards[2]?.card?.card?.info?.cloudinaryImageId
          }
        />
      </div>

      <div>Restaurant Id : {restoId}</div>
      <h2>Restaurant Id: {restaurant?.cards[2]?.card?.card?.info?.id}</h2>

      <h2>Restaurant city: {restaurant?.cards[2]?.card?.card?.info?.city}</h2>
      <h1>Recommended</h1>
      <div className="resto-list">
        <ul>
          {restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map(
            (item) => (
              <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
            )
          )}
        </ul>
      </div> */}
    </>
  );
};

export default RestaurantMenu;
