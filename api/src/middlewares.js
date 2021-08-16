const isLogedIn = (req,res,next) => {
    if(req.isAuthenticated()){
        next();
    } else{
        res.redirect("/auth/login");
        next();
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