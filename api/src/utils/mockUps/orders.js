const { User } = require('../../db');
const createOrder = require("../../controllers/order/createOrder")
const ordersMockUp = async () => {
  try {
    const mockUpReq = {
      body: {
        id: 0,
        firstName: "Juan",
        lastName: "Lopez",
        address: "Evergreen Terrace 742",
        city: "Springfield",
        paymentMethod: "MercadoPago",
        zipCode: "B333",
        total: 8823.94,
        status: "created",
        cart: [
          {
              units: 1,
              price: 8599.99,
              id: 11
          },{
              units: 3,
              price: 47.99,
              id: 7
          },{
              units: 2,
              price: 39.99,
              id: 6
          }
      ]
      }
    };

    const mockUpRes = {
      status: (order) => ({
        send: () => {}
      })
    };

    const users = await User.count();

    let order = 1;

    while (mockUpReq.body.id <= users) {
      mockUpReq.body.id++;
      while (order < 5) {
        await createOrder(mockUpReq, mockUpRes, () => {});
        order++
      }
      order = 1;
    }
    
  } catch (err) {
    console.log(err.message);
  }
}
module.exports = {
  ordersMockUp
};