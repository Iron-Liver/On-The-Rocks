const { Category } = require("../../db");

module.exports = async (req, res, next) => {
    let category = req.body;
    try {
        category = await Category.create({ ...category });
        return res.json(category).status(200);
    } catch (err) {
        return res.send(err.message).status(409);
    }
};
