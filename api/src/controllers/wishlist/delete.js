const { Wishlist } = require("../../db");

module.exports = async (req, res, next) => {
  const {id} = req.params;

  try {
    await Wishlist.destroy({
        where: {
            id: id
        }
    })

    return res.json("Delete success").status(200);

    
  } catch (err) {
    return res.send({ error: err.message }).status(409);
  }
};
