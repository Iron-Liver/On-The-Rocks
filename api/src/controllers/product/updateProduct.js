const { Product } = require("../../db.js");

module.exports = async (req, res, next) => {
  const product = req.body;
  const { id } = req.params;
  try {
    let updated = await Product.update(
      product,
      {
        where: {id: id},
      }
    );
    res.send([`${updated} product/s updated`]);
  } catch (err) {
    res.send(['invalid inputs']).sendStatus(400), next(err);
  }
};
