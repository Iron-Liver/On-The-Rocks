const { Product } = require("../../db");


module.exports = async (req, res, next) => {
  const { id } = req.params;
  try {
    
    const productId = await Product.findAll({
      where: { id : id }, 
    });
    
    res.status(200).json(productId);
  } catch (err) {
    next(err)
  }
};