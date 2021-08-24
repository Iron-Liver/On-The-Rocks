import React from 'react'
import Chatbot from "react-chatbot-kit";
import './ChatBot.css';
import config from "../Chatbot/CB-Components/config"
import MessageParser from "../Chatbot/CB-Components/MessageParser"
import ActionProvider from "../Chatbot/CB-Components/ActionProvider"
import Bot from "../../ImagesBot/bot.png"
import { useState } from 'react';

const ChatBotApp = () => {

const [robot, setRobot] = useState(false)
const handleClick = ()=>{
    setRobot(robot === false? true : false)
}

if(robot === false){
    var robotshow = null
}else{
    robotshow = <Chatbot
    config={config}
    messageParser={MessageParser}
    actionProvider={ActionProvider}
    />
    
}

    return (
      <div className="Chatbot">
          <button className="botonBot" onClick={()=>handleClick()}><img className="logoBot" src={Bot} alt="ChatBot" /></button>
        {robotshow}
      </div>
    );
  }
  
  export default ChatBotApp;



