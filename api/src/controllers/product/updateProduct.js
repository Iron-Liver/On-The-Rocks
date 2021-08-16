const { Product, Category } = require("../../db.js");

module.exports = async (req, res, next) => {
  const product = req.body;
  const { id } = req.params;

  try {
    const productFound = await Product.findOne({
      where: { id: id },
      include: [
        { model: Category, attributes: ['id', 'name'], through: { attributes: [] } }
      ]
    });

    let updated = await Product.update(
      product,
      {
        where: { id: id },
      }
    );
    await productFound.setCategories(req.body.categories);
    res.send([`${updated} product/s updated`]);
  } catch (err) {
    res.send(['invalid inputs']).sendStatus(400), next(err);
  }
};
