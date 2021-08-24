class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }

    parse(message) {
        const lowercase = message.toLowerCase();

        if (lowercase.includes("hello")) {
            return this.actionProvider.greet();
        }
        if (lowercase.includes("product") || lowercase.includes("liqueur")
         || lowercase.includes("spirits")) {            
            return this.actionProvider.handleProducts();
        }
        if (lowercase.includes("user") || lowercase.includes("login")
        || lowercase.includes("sign") ) {            
            return this.actionProvider.handleUsers();
        }
        if (lowercase.includes("deliver") || lowercase.includes("shipp")) {            
            return this.actionProvider.handleDelivery();
        }
        if (lowercase.includes("pay")) {            
            return this.actionProvider.handlePayment();
        }
        if (lowercase.includes("david")) {            
            return this.actionProvider.handleDavid();
        }
        if (lowercase.includes("love")) {            
            return this.actionProvider.handleLove();
        }
        if (lowercase.includes("squad") || lowercase.includes("team") || lowercase.includes("creator")) {            
            return this.actionProvider.handleSquad();
        }
        return this.actionProvider.handleDefault()
    };
}
export default MessageParser;