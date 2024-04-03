import React, { useEffect, useState } from "react";

const ContactForm = (props) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(0);
  useEffect(() => {
    console.log("This will be called after the render!");
  });

  console.log("Rendered First Time!");
  return (
    <>
      <h1>Contact Form</h1>
      <h2>{props.name}</h2>
      <h2>{count}</h2>
      <button
        onClick={() => {
          setCount(1);
        }}
      ></button>
    </>
  );
};

export default ContactForm;
