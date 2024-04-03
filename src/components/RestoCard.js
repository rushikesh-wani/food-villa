import { useContext } from "react";
import { img_CDN_Url } from "../config";
import UserContext from "../utils/UserContext";

const RestoCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  costForTwo,
  sla,
}) => {
  // console.log(cuisines);

  return (
    <div className="card ">
      <img src={img_CDN_Url + cloudinaryImageId} />

      <h3>{name}</h3>
      <p>Category: {cuisines.join(", ")}</p>
      <p>Rating: {avgRating} star</p>
      <p>Delivery in: {sla.deliveryTime} min</p>
      <h4>Price: {costForTwo}</h4>
      {/* <button>Add</button> */}
    </div>
  );
};

export default RestoCard;
