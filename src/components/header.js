import { useState, useContext } from "react";
import foodvilla from "../assets/foodvilla.png";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const title = (
  <>
    <a href="/">
      <img className="logo" src={foodvilla} />
    </a>
  </>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user } = useContext(UserContext);

  // subscribing to the Redux store
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });

  console.log(cartItems);
  return (
    <div className="header ">
      {title}

      <div className="nav-items">
        <ul>
          <li>
            <Link className="tabs" to="/">
              Home{" "}
            </Link>
          </li>

          <li>
            <Link className="tabs" to="/about">
              About
            </Link>
          </li>

          <li>
            <Link className="tabs" to="/contact">
              Contact{" "}
            </Link>
          </li>
          <li>
            <Link className="tabs" to="/instamart">
              Instamart
            </Link>
          </li>

          <li className="tab-btn  ">
            <Link className="tabs" style={{ color: "#ffff" }} to="/cart">
              Cart ({cartItems.length})
            </Link>
          </li>
          <li>
            <Link className="tabs" to="">
              {user.name}
            </Link>
          </li>
        </ul>
      </div>
      {/* {isLoggedIn ? (
        <button onClick={setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={setIsLoggedIn(true)}>Login</button>
      )} */}
    </div>
  );
};

export default Header;
