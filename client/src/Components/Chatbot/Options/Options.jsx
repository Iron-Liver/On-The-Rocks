import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "Products",
      handler: props.actionProvider.handleProducts,
      id: 1,
    },
    {
      text: "About us",
      handler: props.actionProvider.handleAbout,
      id: 2
    },
    {
      text: "Payment",
      handler: props.actionProvider.handlePayment,
      id: 3
    },
    {
      text: "Delivery",
      handler: props.actionProvider.handleDelivery,
      id: 4
    },
    {
      text: "User",
      handler: props.actionProvider.handleUsers,
      id: 5
    },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;