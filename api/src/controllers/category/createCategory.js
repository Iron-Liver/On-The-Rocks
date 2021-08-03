const { Category } = require("../../db");

module.exports = async (req, res, next) => {
    let category = req.body;
    try {
        category = await Category.create({ ...category });
        return res.json({ success: "Category successfully created" }).status(200);
    } catch (err) {
        return res.send({ error: err.message }).status(409);
    }
};
