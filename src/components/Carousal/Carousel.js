import React, { useEffect, useState } from "react";
import "./Carousal_styles.css";
import { async } from "regenerator-runtime";
import { img_CDN_Url } from "../../config";
import { Link } from "react-router-dom";
import { SWIGGY_DAPI, SWIGGY_MAPI } from "../../config";

const Carousal = () => {
  const [carousalImg, setCarousalImg] = useState(null);

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
      ? setCarousalImg(json.data.cards[0])
      : setCarousalImg(json.data.success.cards[0]);
  }
  console.log(carousalImg);

  return (
    <div className="resto-list">
      <div className="carousel-container">
        <h2 className="carousal-title">What's in your mind!</h2>
        <div className="carousel">
          {carousalImg?.card?.card?.imageGridCards?.info?.map(
            (image, index) => (
              <div key={index} className="carousel-item">
                <Link to={image.action.link}>
                  <img src={img_CDN_Url + image.imageId} />
                </Link>
                {/* <h3 className="img-title">{}</h3> */}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Carousal;
