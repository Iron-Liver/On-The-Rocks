const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken")
require("dotenv").config();
const { SECRET_KEY} = process.env;
const {User} = require("../../db");

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email', 
      passwordField: 'password',
      session: false
    },
    async (email, password, done) => {
      email = email.toLowerCase()
      user = await User.findOne({where:{ email: email }})
      if (!user) return done(null, false);
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {return done(err)};
        if (!result) {
          return done(null, false);
        } else {
          return done(null, user);
        }
      });
    })
);

passport.serializeUser((user, cb) => {
  cb(null, user.id);
});

passport.deserializeUser(async (id, cb) => {
  try{
    const user = await User.findOne({ where: { id } })
    if (user) cb(null, user);
  }catch(e){
    cb(err, null);
  }
});

const BearerStrategy = require("passport-http-bearer").Strategy;

passport.use(
    new BearerStrategy((token, done) => {
      jwt.verify(token, SECRET_KEY, function (err, usuario) {
        if (err) return done(err);
        return done(null, usuario ? usuario : false);
      });
    })
  );
  