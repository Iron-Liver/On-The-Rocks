const { Review } = require("../../db");

module.exports = async (req, res, next) => {
    const { id } = req.params;
    try {
        if (id){
            const review = await Review.findAll({
                where: { userId: id }, 
            });
            res.json(review);
        } else{
            throw new Error( 'Insufficient data' )
        }
    } catch (err) {
        console.log(err);
        return res.send({ error: err.message }).status(409);
    }
};