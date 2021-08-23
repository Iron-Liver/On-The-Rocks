const { Product, Category } = require("../../db");
const { Op } = require('sequelize')

module.exports = async (req, res, next) => {
  try {
    const { product } = req.query;
    if (!product) {
      const product = await Product.findAll({
        include: {
          model: Category,
          attributes: {
              include: ['name'],
              exclude: ['createdAt', 'updatedAt']
          },
          through: {
              attributes: []
          }
      }
      })
      res.send(product).status(200)
    } else {
      const product = await Product.findAll({
        where: {
          name: { [Op.iLike]: `%${product}%` }
        },
        include: {
          model: Category,
          attributes: {
              include: ['name'],
              exclude: ['createdAt', 'updatedAt']
          },
          through: {
              attributes: []
          }
      }
      })
      res.send(product).status(200)
    }

  } catch (error) {
    next(error)
  }
};
