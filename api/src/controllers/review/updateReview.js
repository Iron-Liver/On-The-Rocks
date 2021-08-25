const { Review } = require("../../db.js");

module.exports = async (req, res, next) => {
	let {stars, description, anonymous} = req.body;
	let { id } = req.params;
	try {
    console.log(stars)
        if(id){
            const old = await Review.findOne({where: {id}})
            if(old.stars === stars && old.description === description && old.anonymous === anonymous) {
              throw new Error("No changes were made")
            } 
            const result = await Review.update(
                {...stars, description, anonymous},
                {
                    where: { id }
                })
            if(!result) throw new Error("No changes were made")
            return res.json({ success: "Category successfully updated" }).status(200);
        }else{
            throw new Error( 'Insufficient data' )
        }
	} catch (err) {
		return res.send({ error: err.message }).status(409);
	}
};