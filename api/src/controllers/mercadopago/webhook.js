const axios = require('axios');
const { BACK } = process.env;

module.exports = async (req, res, next) => {

  res.status(200).json();
  
  try {
    await axios.post(`${BACK}/mercadopago/payment`, req.body);
  } catch (err) {
    next(err)
  }
  
};