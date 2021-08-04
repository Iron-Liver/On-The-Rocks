const { Order } = require('../../db');

const ordersMockUp = async () => {
  try {
    await Order.create({
      name: 'Pablo Hernández',
      address: 'Moreno 322',
      city: 'Bolívar, Buenos Aires',
      paymentMethod: 'MercadoPago',
      zipCode: '1900',     
      total: 100,
      status: 'pending'
    })
    await Order.create({
      name: 'Gianfranco Saavedra',
      address: 'Calle 22, Av.13, 1078',
      city: 'La Plata, Buenos Aires',
      paymentMethod: 'MercadoPago',
      zipCode: '1900',     
      total: 50.10,
      status: 'paid'
    }) 
    await Order.create({
      name: 'Marcelo Piero',
      address: 'Calle 5, Av.53, 1510',
      city: 'La Plata, Buenos Aires',
      paymentMethod: 'MercadoPago',
      zipCode: '1900',     
      total: 78.10,
      status: 'paid'
    }) 
    await Order.create({
      name: 'Alexis Chavez',
      address: 'Belgrano 866',
      city: 'Olavarría, Buenos Aires',
      paymentMethod: 'MercadoPago',
      zipCode: 'B7400',     
      total: 225.85,
      status: 'paid'
    }) 
    await Order.create({
      name: 'Cristian Prieto',
      address: 'Calle 5, Av.53, 860',
      city: 'La Plata, Buenos Aires',
      paymentMethod: 'MercadoPago',
      zipCode: 'B1900',     
      total: 55,
      status: 'paid'
    }) 
    await Order.create({
      name: 'Juana Sosa',
      address: 'Las Heras, 1870',
      city: 'Bolivar, Buenos Aires',
      paymentMethod: 'MercadoPago',
      zipCode: 'B6550',     
      total: 859.50,
      status: 'paid'
    }) 
    await Order.create({
      name: 'Pablo Campos',
      address: 'Savedra, 750',
      city: 'Urdampilleta, Buenos Aires',
      paymentMethod: 'MercadoPago',
      zipCode: 'B6553',     
      total: 467,
      status: 'paid'
    }) 
    await Order.create({
      name: 'Julian Viero',
      address: 'Ocampo, 420',
      city: 'Pehuajò, Buenos Aires',
      paymentMethod: 'MercadoPago',
      zipCode: 'B6450',     
      total: 930.60,
      status: 'paid'
    }) 
    await Order.create({
      name: 'Gonzalo Carrero',
      address: 'San Cayetano, 1950',
      city: 'Bolivar, Buenos Aires',
      paymentMethod: 'MercadoPago',
      zipCode: 'B6550',     
      total: 205,
      status: 'pending'
    }) 
    await Order.create({
      name: 'Isabella Lafuente',
      address: 'Av. Hipólito Yrigoyen, 1870',
      city: 'Córdoba, Córdoba',
      paymentMethod: 'MercadoPago',
      zipCode: 'B5000',     
      total: 789.87,
      status: 'paid'
    })
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = {
  ordersMockUp
}