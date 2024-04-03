import React from "react";
import cart from "../assets/cart.avif";
import { useDispatch, useSelector } from "react-redux";
import { img_CDN_Url } from "../config";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeItem());
  };
  return (
    <>
      {cartItems.length === 0 ? (
        <div className="cart-container">
          <h1>My Cart</h1>
          <img src={cart} className="cart-img" alt="Empty cart" />
          <h2>No items added</h2>
          <h3>Please add the items to view in cart section</h3>
        </div>
      ) : (
        <div className="cart-container">
          <div className="menu">
            <h2>My Cart ({cartItems.length})</h2>
            {
              <ul>
                {cartItems.map((item) => (
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
                      <p className="menu-item-price">
                        ₹ {item?.card?.info?.price / 100}
                      </p>
                      <h3 className="menu-item-title">
                        <button
                          onClick={() => handleRemoveItem()}
                          className="menu-item-title menu-btn"
                        >
                          Remove
                        </button>
                      </h3>
                      <hr />
                    </div>
                  </li>
                ))}

                <button
                  className="menu-btn clear-cart"
                  onClick={handleClearCart}
                >
                  Clear Cart
                </button>
              </ul>
            }
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
