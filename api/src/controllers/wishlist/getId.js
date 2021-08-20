const { Wishlist } = require("../../db");

module.exports = async (req, res, next) => {
  let { id } = req.query;
  try {
    let wishlist = await Wishlist.findAll();
    console.log("esteee", wishlist);
    let filter = wishlist.filter((e) => e.userId == id);
    /* let parse = filter.parseIn() */

    return res.json(filter);
  } catch (err) {
    return res.send({ error: err.message }).status(409);
  }
};
