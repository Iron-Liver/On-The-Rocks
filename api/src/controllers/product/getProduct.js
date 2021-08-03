const { Product } = require("../../db");
const { Op } = require('sequelize')

module.exports = async (req, res, next) => {
  try {
    const { product } = req.query;
    if (!product) {
      const product = await Product.findAll()
      res.send(product).status(200)
    } else {
      const product = await Product.findAll({
        where: {
          name: { [Op.iLike]: `%${product}%` }
        }
      })
      res.send(product).status(200)
    }

  } catch (error) {
    next(error)
  }
};
