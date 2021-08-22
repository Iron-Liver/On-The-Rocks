const { User } = require("../../db.js");

module.exports = async (req, res, next) => {
    let { coins } = req.body;
    let { id } = req.params;
    try {
        const user = await User.findOne({
            where: { id },
        });
        user.coins += coins;
        await User.update({ ...user, coins: user.coins}, { where: { id } });
        return res.json({ success: true }).status(200);
    } catch (err) {
        return res.send(err.message).status(409);
    }
};
