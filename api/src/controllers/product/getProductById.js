const { Product, Category } = require("../../db");


module.exports = async (req, res, next) => {
  const { id } = req.params;
  try {

    const productId = await Product.findAll({
      where: { id: id },
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
    });

    res.status(200).json(productId);
  } catch (err) {
    next(err)
  }
};