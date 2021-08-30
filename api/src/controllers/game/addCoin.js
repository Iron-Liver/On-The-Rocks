const { User } = require("../../db.js");

module.exports = async (req, res, next) => {
    let {id}  = req.params;
    let {coins} = req.body;
    try {
        const user = await User.findOne({
            where: { id },
        });
        coins === -1 ? user.coins -= 1 : user.coins += 1;
        await User.update({ ...user, coins: user.coins}, { where: { id } });
        return res.json({ success: true }).status(200);
    } catch (err) {
        return res.send(err.message).status(409);
    }
};
