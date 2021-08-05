const {User} = require('../../db');
const bcrypt = require('bcrypt');

module.exports = async(req,res,next) =>{
    let user = req.body;
    try {
        if(typeof(user.password) === 'undefined' || user.password.length < 6){
            throw new Error("Validation error: invalid password")}
        const hashedPassword = await bcrypt.hash(user.password, 12);
        const createdUser = await User.create({
            ...user,
            password: hashedPassword,
            email: user.email.toLowerCase()
        })
        return res.json(createdUser)

    } catch (error) {
        return res.send(error.message).status(409)
    }
}