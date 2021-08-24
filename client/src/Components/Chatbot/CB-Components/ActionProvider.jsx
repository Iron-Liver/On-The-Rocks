class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }  
  
  botLogin = () => {        
    const message = this.createChatBotMessage(`You can login easy here`,{widget:"login"});
    this.addMessageToState(message);
  };

  botSignUp = () => {        
    const message = this.createChatBotMessage(`You can sign up easy here`,{widget:"signUp"});
    this.addMessageToState(message);
  };
  botWish = () => {        
    const message = this.createChatBotMessage(`You can see your wishlist here`,{widget:"wishlist"});
    this.addMessageToState(message);
  };

  botOnSale = () => {        
    const message = this.createChatBotMessage(`We have many products on Sale right now, look at them now!`,{widget:"onSale"});
    this.addMessageToState(message);
  };

  botSearchProd = () => {        
    const message = this.createChatBotMessage(`Find any product that we have click on the search Icon`);
    this.addMessageToState(message);
  };

  botAllProds = () => {        
    const message = this.createChatBotMessage(`See all about our products here`,{widget:"allProds"});
    this.addMessageToState(message);
  };

  greet = () => {
    const message = this.createChatBotMessage("Hello friend");
    this.addMessageToState(message);
  };

  handleLove = () => {
    const message = this.createChatBotMessage("I love u, but please buy something");
    this.addMessageToState(message);
  };

  handleDavid = () => {
    const message = this.createChatBotMessage("My creator");
    this.addMessageToState(message);
  };

  handleSquad = () => {
    const message = this.createChatBotMessage(`Best team ever Agus Luca Mati Fede Nico Hilber David`);
    this.addMessageToState(message);
  };

  handleProducts = () => {
    const message = this.createChatBotMessage("Some options for help you with our products", {widget:"product"});
    this.addMessageToState(message);
  };

  handleUsers = () => {
    const message = this.createChatBotMessage("Some of our user options", {widget:"user"});
    this.addMessageToState(message);
  };
  
  handlePayment = () => {
    const message = this.createChatBotMessage("You can pay with: Mercado Pago  Mastercard, Visa  American Express");
    this.addMessageToState(message);
  };
  
  handleDelivery = () => {
    const message = this.createChatBotMessage("our delivery service works in Buenos Aires (same day), outside (3 days for shipping), if you want to know about your orders state please check out your profile, know our branch office here",{widget:"office"});
    this.addMessageToState(message);
  };
  
  handleAbout = () => {
    const message = this.createChatBotMessage("we are a company committed to customer service, learn more about us here",{widget:"about"});
    this.addMessageToState(message);
  };  







  handleDefault = () => {
    const message = this.createChatBotMessage(
      "Can´t resolve your request, remember the keywords",
      { widget: "options"}     
    );
    this.addMessageToState(message);
  };
  
  handleJavascriptQuiz = () => {
    const message = this.createChatBotMessage(
      "Fantastic. Here is your quiz. Good luck!",
      {
        widget: "javascriptQuiz",
      }
    );

    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;