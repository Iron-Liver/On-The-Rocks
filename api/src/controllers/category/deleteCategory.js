const { Category } = require("../../db");

module.exports = async (req, res, next) => {
    const { id } = req.params;
    try {
        const result = await Category.destroy({
            where: {
                id 
            },
        });
        if (!result) throw new Error("Category not found.");
        return res.json({ success: "Category successfully deleted" }).status(200);
    } catch (err) {
        return res.json({ error: `Category delete failed. ${err.message}` });
    }
};
