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
            || lowercase.includes("spirits") || lowercase.includes("vodka") ||
            lowercase.includes("whisky") || lowercase.includes("tequila")
            || lowercase.includes("brandy") || lowercase.includes("champagne")
            || lowercase.includes("wines")) {
            return this.actionProvider.handleProducts();
        }
        if (lowercase.includes("user") || lowercase.includes("login")
            || lowercase.includes("sign")) {
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
        if (lowercase.includes("squad") || lowercase.includes("team") || lowercase.includes("creator")
            || lowercase.includes("agustin") || lowercase.includes("fede") ||
            lowercase.includes("matias") || lowercase.includes("hilber")
            || lowercase.includes("nicolas") || lowercase.includes("lucas")
            || lowercase.includes("gaston")) {
            return this.actionProvider.handleSquad();
        }
        if (lowercase.includes("henry") || lowercase.includes("toni") || lowercase.includes("franco")
            || lowercase.includes("diego") || lowercase.includes("martu")) {
            return this.actionProvider.handleHenry();
        }
        return this.actionProvider.handleDefault()
    };
}
export default MessageParser;