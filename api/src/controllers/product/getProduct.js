const { Product } = require("../../db");
const {Op} = require('sequelize')

module.exports = async (req, res, next) => {
  try {
    const { product } = req.query;
    if (!product) {
      await Product.findAll()
      .then(product => res.send(product))
    } else {
      await Product.findAll({
        where:{
          name:{[Op.iLike]: `%${product}%`}
        }
      })
      .then(product => res.send(product))
    }
    
  } catch (error) {
    next(error)
  }
};
