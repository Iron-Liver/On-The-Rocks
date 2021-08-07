const { Order } = require('../../db');

const ordersMockUp = async () => {
  try {
  //   await Order.create({
  //     firstName: 'Pablo' ,
  //     lastName: 'Hernández',
  //     address: 'Moreno 322',
  //     city: 'Bolívar, Buenos Aires',
  //     paymentMethod: 'MercadoPago',
  //     zipCode: '1900',     
  //     total: 100,
  //     status: 'created'
  //   });
  //   await Order.create({
  //     firstName: "Gianfranco",
  //     lastName: "Saavedra",
  //     address: "Calle 22, Av.13, 1078",
  //     city: "La Plata, Buenos Aires",
  //     paymentMethod: "MercadoPago",
  //     zipCode: "1900",
  //     total: 50.1,
  //     status: "cancelled",
  //   }); 
  //   await Order.create({
  //     firstName: "Marcelo",
  //     lastName: "Piero",
  //     address: "Calle 5, Av.53, 1510",
  //     city: "La Plata, Buenos Aires",
  //     paymentMethod: "MercadoPago",
  //     zipCode: "1900",
  //     total: 78.1,
  //     status: "created",
  //   }); 
  //   await Order.create({
  //     firstName: "Alexis",
  //     lastName: "Chavez",
  //     address: "Belgrano 866",
  //     city: "Olavarría, Buenos Aires",
  //     paymentMethod: "MercadoPago",
  //     zipCode: "B7400",
  //     total: 225.85,
  //     status: "completed",
  //   }); 
  //   await Order.create({
  //     firstName: "Cristian",
  //     lastName: "Prieto",
  //     address: "Calle 5, Av.53, 860",
  //     city: "La Plata, Buenos Aires",
  //     paymentMethod: "MercadoPago",
  //     zipCode: "B1900",
  //     total: 55,
  //     status: "processing",
  //   }); 
  //   await Order.create({
  //     firstName: "Juana",
  //     lastName: "Sosa",
  //     address: "Las Heras, 1870",
  //     city: "Bolivar, Buenos Aires",
  //     paymentMethod: "MercadoPago",
  //     zipCode: "B6550",
  //     total: 859.5,
  //     status: "completed",
  //   }); 
  //   await Order.create({
  //     firstName: "Pablo",
  //     lastName: "Campos",
  //     address: "Savedra, 750",
  //     city: "Urdampilleta, Buenos Aires",
  //     paymentMethod: "MercadoPago",
  //     zipCode: "B6553",
  //     total: 467,
  //     status: "completed",
  //   }); 
  //   await Order.create({
  //     firstName: "Julian",
  //     lastName: "Viero",
  //     address: "Ocampo, 420",
  //     city: "Pehuajò, Buenos Aires",
  //     paymentMethod: "MercadoPago",
  //     zipCode: "B6450",
  //     total: 930.6,
  //     status: "processing",
  //   }); 
  //   await Order.create({
  //     firstName: "Gonzalo",
  //     lastName: "Carrero",
  //     address: "San Cayetano, 1950",
  //     city: "Bolivar, Buenos Aires",
  //     paymentMethod: "MercadoPago",
  //     zipCode: "B6550",
  //     total: 205,
  //     status: "completed",
  //   }); 
  //   await Order.create({
  //     firstName: "Isabella",
  //     lastName: "Lafuente",
  //     address: "Av. Hipólito Yrigoyen, 1870",
  //     city: "Córdoba, Córdoba",
  //     paymentMethod: "MercadoPago",
  //     zipCode: "B5000",
  //     total: 789.87,
  //     status: "cancelled",
  //   });
  } catch (err) {
    console.log(err.message);
  }

}

module.exports = {
  ordersMockUp
};