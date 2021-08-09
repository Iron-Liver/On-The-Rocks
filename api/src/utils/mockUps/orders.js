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
        total: 3905.74,
        status: "created",
        cart: [
          {
              units: 9,
              price: 68.99,
              id: 9
          },{
              units: 5,
              price: 92.99,
              id: 4
          },{
              units: 12,
              price: 234.99,
              id: 2
          }
        ] 
      }
    };
    const mockUpRes = {
      status: (order) => ({
        send: () => {}
      })
    }
    const users = await User.count();
    let order = 0;
    while (mockUpReq.body.id <= users) {
      mockUpReq.body.id = mockUpReq.body.id + 1;
      while (order < 5) {
        order++
        await createOrder(mockUpReq, mockUpRes, () => {});
      }
      order = 0;
    }
  } catch (err) {
    console.log(err.message);
  }
}
module.exports = {
  ordersMockUp
};