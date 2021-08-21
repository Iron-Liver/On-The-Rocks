const mercadopago = require ('mercadopago');
const { ACCESS_TOKEN_MERCADOPAGO } = process.env;

mercadopago.configure({
  access_token: ACCESS_TOKEN_MERCADOPAGO
});

module.exports = mercadopago;