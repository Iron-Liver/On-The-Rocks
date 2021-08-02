const {User} = require('../../db')

module.export = async(req,res,next) =>{
    const {id} = req.params;
    try {
        const user = await User.findOne({
            where:{id}
        });
        return res.json(user)
    } catch (error) {
        next(error)
        return res.json(error)
    }
}