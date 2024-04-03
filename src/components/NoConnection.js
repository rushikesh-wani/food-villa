import React from "react";
import internet from "../assets/internet.png";
import foodvilla from "../assets/foodvilla.png";
const NoConnection = () => {
  return (
    <>
      <h1 style={{ marginTop: "6rem", textAlign: "center", color: "red" }}>
        Oops! Seem's like you are Offline
      </h1>
      {/* <img src={require({ internet })} alt="no image found" /> */}
    </>
  );
};

export default NoConnection;
