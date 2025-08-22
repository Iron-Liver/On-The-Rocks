import React from "react";


import "./Options.css";

const ProductsOps = (props) => {       

    const options = [
        {
            text: "Search a product",
            handler: props.actionProvider.botSearchProd,
            id: 1,
        },
        {
            text: "View All",
            handler: props.actionProvider.botAllProds,
            id: 2
        },
        {
            text: "On Sale",
            handler: props.actionProvider.botOnSale,
            id: 3
        },

    ];

    const buttonsMarkup = options.map((option) => (
        <button key={option.id} onClick={option.handler} className="option-button">
            {option.text}
        </button>
    ));

    return <div className="options-container">{buttonsMarkup}</div>;
};

export default ProductsOps;