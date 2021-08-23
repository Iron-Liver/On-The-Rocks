import React from 'react'
import Chatbot from "react-chatbot-kit";
import './ChatBot.css';
import config from "./CB-Components/config"
import MessageParser from "./CB-Components/MessageParser"
import ActionProvider from "./CB-Components/ActionProvider"

const ChatBot = () => {
    return (
        <div className="Chatbot">
            <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
            />
        </div>
    )
}

export default ChatBot
