import React from "react";
import Header from "./header";
import ContactForm from "./ContactForm";
import { Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          textDecoration: "underline",
          marginTop: "6rem",
        }}
      >
        Contact Us
      </h1>
      <Outlet />
    </>
  );
};

export default Contact;
