import React, { Component } from "react";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
    };
    console.log("constructor invoked");
  }

  // componentDidMount is same as useEffect hook in functional Component
  componentDidMount() {
    console.log("This will be called after the render!");
  }
  render() {
    console.log("Rendered first Time!");
    const { count, count2 } = this.state;
    return (
      <>
        <h1>Contact Form</h1>
        <h2>
          Count: {count}, {count2}
        </h2>
        <button
          onClick={() => {
            this.setState({ count: 1, count2: 2 });
          }}
        >
          Counter
        </button>
      </>
    );
  }
}

export default ContactForm;
