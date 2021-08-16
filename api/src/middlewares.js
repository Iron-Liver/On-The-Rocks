const isLogedIn = (req,res,next) => {
    try {
        if(req.isAuthenticated()){
        } else{
            res.redirect("/auth/login");
        }
    } catch (e) {
        console.log(e.message)
    }
}

const isLogedAsAdmin = (req,res,next) => {
    if(req.isAuthenticated()){
        if(req.user.isAdmin){
            next();
        }else{
            res.status(400)
        }
    }else{
        res.redirect("/login");
        next();
    }
}

module.exports = {
    isLogedIn,
    isLogedAsAdmin
}