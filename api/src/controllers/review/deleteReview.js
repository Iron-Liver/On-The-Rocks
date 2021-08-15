const { Review } = require("../../db");

module.exports = async (req, res, next) => {
    const { id } = req.params;
    try {
            if(id) {
                const result = Review.destroy({ where: {id} })
                if (!result) throw new Error("Review not found.");
                return res.json({ success: "Review successfully deleted" }).status(200);
            }else{
                throw new Error( 'Insufficient data' )
            }
        }
    catch (err) {
        return res.json({ error: `Category delete failed. ${err.message}` });
    }
};
