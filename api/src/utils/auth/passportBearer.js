const passport = require("passport");
const BearerStrategy = require("passport-http-bearer").Strategy;

passport.use(
    new BearerStrategy((token, done) => {
      jwt.verify(token, SECRET_KEY, function (err, usuario) {
        if (err) return done(err);
        return done(null, usuario ? usuario : false);
      });
    })
  );
  