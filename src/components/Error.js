import React from "react";

import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <h1 style={{ textAlign: "center", color: "red" }}>404 Page Not Found</h1>
      <h2 style={{ textAlign: "center", color: "red" }}>
        {err.status + " : " + err.statusText}
      </h2>
    </>
  );
};

export default Error;
