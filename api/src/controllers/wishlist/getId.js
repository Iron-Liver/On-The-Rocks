const { Wishlist } = require("../../db");

module.exports = async (req, res, next) => {
  let { id } = req.query;
  try {
    let wishlist = await Wishlist.findAll();
    
    let filter = wishlist.filter((e) => e.userId == id);
    

    return res.json(filter);
  } catch (err) {
    return res.send({ error: err.message }).status(409);
  }
};
