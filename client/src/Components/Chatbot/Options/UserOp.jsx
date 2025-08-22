import React from "react";


import "./Options.css";

const UserOp = (props) => {       

    const options = [
        {
            text: "Login",
            handler: props.actionProvider.botLogin,
            id: 1,
        },
        {
            text: "Sing Up",
            handler: props.actionProvider.botSignUp,
            id: 2
        },
        {
            text: "Wishlist",
            handler: props.actionProvider.botWish,
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

export default UserOp;