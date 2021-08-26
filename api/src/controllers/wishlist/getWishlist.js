const { Wishlist } = require("../../db");

module.exports = async (req, res, next) => {
  try {
    let wishlist = await Wishlist.findAll();
    console.log(wishlist);
    return res.json(wishlist);
  } catch (err) {
    return res.send({ error: err.message }).status(409);
  }
};
