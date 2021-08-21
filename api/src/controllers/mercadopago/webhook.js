const axios = require('axios');
const { BACK } = process.env;

module.exports = async (req, res, next) => {

  try {
    await axios.post(`${BACK}/mercadopago/payment`, req.body);
  } catch (err) {
    next(err)
  }

  res.status(200).send();
};