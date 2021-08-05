const { Product } = require("../../db");

module.exports = async (req, res, next) => {
  let product = req.body;
  try {
    product = await Product.create({ ...product });
    return res.json(product);
  } catch (err) {
    res.send('invalid inputs').sendStatus(400), next(err);
  }
};

