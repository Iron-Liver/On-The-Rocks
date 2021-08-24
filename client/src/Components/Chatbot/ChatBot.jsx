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
  const handleClick = () => {
    setRobot(robot === false ? true : false)
  }

  if (robot === false) {
    var robotshow = null
  } else {
    robotshow = <div className="chatDeploy">
      <Chatbot
        className="inputbotdep"
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider} />
    </div>


  }

  return (
    <div className="Chatbot">
      {robotshow}
      <button className="botonBot" onClick={() => handleClick()}><img className="logoBot" src={Bot} alt="ChatBot" /></button>
    </div>
  );
}

export default ChatBotApp;



