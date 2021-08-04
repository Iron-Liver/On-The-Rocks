const { Category } = require("../../db");

module.exports = async (req, res, next) => {
    const { id } = req.params;
    const { name } = req.query;
    try {
        if( !id && !name ) throw new Error('No data available to run the search')
        if (id){
            const category = await Category.findOne({
                where: { id }, 
            });
            res.json(category);
        }
        if(name){
            const category = await Category.findOne({
                where: { name }, 
            });
            res.json(category);
        }
    } catch (err) {
        res.json(err);
        return console.log(err);
    }
};