import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import { NavLink } from "react-router-dom";

import Options from "../Options/Options";
import ProductsOps from "../Options/ProductsOps";
import UserOp from "../Options/UserOp";

const botName = "OTRocksBot"

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(`Hi I'm ${botName}. I’m here to help you`),
    createChatBotMessage(
      "Let´s start with some keywords can guide you to go more deeper",
      { widget: "options"}     
    ),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "user",
      widgetFunc: (props) => <UserOp {...props} />,      
    },
    {
      widgetName: "product",
      widgetFunc: (props) => <ProductsOps {...props} />,      
    },
    {
      widgetName: "login",
      widgetFunc: () => <NavLink to="/login">Login</NavLink>,      
    },
    {
      widgetName: "wishlist",
      widgetFunc: () => <NavLink to="/profile/:id/wishlist">Wishlist</NavLink>,      
    },
    {
      widgetName: "signUp",
      widgetFunc: () => <NavLink to="/register">SignUp</NavLink>,      
    },
    {
      widgetName: "about",
      widgetFunc: () => <NavLink to="/aboutus">About Us</NavLink>,      
    },  
    {
      widgetName: "office",
      widgetFunc: () => <NavLink to="/shipping">Shipping</NavLink>,      
    },
    {
      widgetName: "onSale",
      widgetFunc: () => <NavLink to="/products?onSale=_">OnSale</NavLink>,      
    },
    {
      widgetName: "allProds",
      widgetFunc: () => <NavLink to="/products">Products</NavLink>,      
    },      
   
  ],
};  


export default config