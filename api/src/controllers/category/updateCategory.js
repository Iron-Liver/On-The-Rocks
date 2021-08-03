const { Category } = require("../../db.js");

module.exports = async (req, res, next) => {
	let category = req.body;
	let { id } = req.params;
	try {
		const old = await Category.findOne({where: {id}})
		if(old.name === category.name && old.description === category.description && old.image === category.image) throw new Error("No changes were made")
		const result = await Category.update(
			{ ...category },
			{
				where: { id }
			}
		);
		if(!result) throw new Error("No changes were made")
		return res.json({ success: "Category successfully updated" }).status(200);
	} catch (err) {
		return res.send({ error: err.message }).status(409);
	}
};