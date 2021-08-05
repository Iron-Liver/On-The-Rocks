const { Product } = require("../../db.js");

module.exports = async (req, res, next) => {
  let product = req.body;
  const { id } = req.params;
  try {
    await Product.update(
      { ...product },
      {
        where: id,
      }
    );
    const updatedProduct = await Product.findOne({ where: { id } });
    return res.json(updatedProduct).status(200);
  } catch (err) {
    res.send(['invalid inputs']).sendStatus(400), next();
  }
};
