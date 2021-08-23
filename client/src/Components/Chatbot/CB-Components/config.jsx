import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../Options/Options";

const botName = "OTRocksBot"

const config = {
  botName: botName,
  initialMessages: [createChatBotMessage(`Hi there`)],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
  ]
}

export default config