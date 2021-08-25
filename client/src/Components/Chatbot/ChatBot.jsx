import React from 'react'
import Chatbot from "react-chatbot-kit";
import './ChatBot.css';
import config from "../Chatbot/CB-Components/config"
import MessageParser from "../Chatbot/CB-Components/MessageParser"
import ActionProvider from "../Chatbot/CB-Components/ActionProvider"
import Bot1 from "../../ImagesBot/bot1.png"
import { useState } from 'react';

const ChatBotApp = () => {

  const [robot, setRobot] = useState(false)
  const [logo, setLogo] = useState(true)
  const handleClick = () => {
    setRobot(robot === false ? true : false)
  }
  const handleClickX = () => {
    setLogo(logo === false);
     
  }

  if(logo === true){
    var bot = <button className="botonBot" onClick={() => handleClick()}><img className="logoBot" src={Bot1} alt="ChatBot" /></button>
  }else{
    var bot = <button style={{display:"none"}} onClick={() => handleClick()}><img className="logoBot" src={Bot1} alt="ChatBot" /></button>
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
      <button className="btnCloseBot" onClick={()=>handleClickX()}>B</button>
      {bot}
    </div>
  );
}

export default ChatBotApp;



