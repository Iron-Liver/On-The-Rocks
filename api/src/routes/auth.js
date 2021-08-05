const {User} = require("../db");
const router  = require("express").Router();
const express = require("express");
const passport = require("passport");
const {isLogedIn, isLogedAsAdmin} = require("../middlewares")
require("../utils/auth/passport");
router.use(express.json())

router.post("/login", (req,res,next) =>{
   passport.authenticate("local",{session:true}, (err,user,done) =>{
    if (err) throw err;
   if(!user) res.send("No user exist");
   else{
       req.logIn(user, (err)=>{
           if (err) throw err;
           res.send("Successfully Authenticated")
       })
   }    

   })(req,res, next); 
})

router.get("/login/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get( "/google/redirect", passport.authenticate("google", 
{ failureMessage: "Cannot login to Google, please try again later!"}),
    (req, res) => {
        res.send("Thank you for signing in!");
    }
);


router.get('/logout', (req, res, next) =>{
   req.logOut();
   req.session = null;
   res.json("Logged out")
})

router.get("/user", isLogedIn, async(req,res)=>{
    try {
        const user = await User.findOne({
             where: {id:req.user.id}
         })
         const {id,email} = user;
         res.json({id,email})
        
    } catch (error) {
         res.json(error.message);     
    }
})

module.exports = router