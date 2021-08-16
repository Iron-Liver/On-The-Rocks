const { Product } = require("../../db");

module.exports = async (req, res, next) => {
  const { name, description, size, stock, categories, image, brand, sku, price } = req.body;

  console.log(req.body);
  try {
    product = await Product.create({ name, description, size, image, stock, brand, sku, price });
    console.log(product);
    await product.setCategories(categories);
    return res.json(product);

  } catch (error) {
    next(error)
    return res.send(['invalid inputs']).sendStatus(400)
  };
};

