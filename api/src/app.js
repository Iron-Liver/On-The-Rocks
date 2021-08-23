require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const passport = require("passport");
// const cookieParser = require('cookie-parser');
// const session = require("express-session");
// const cookieSession = require("cookie-session");

const routes = require("./routes/index.js");
const { SECRET_KEY, CLIENT_DOMAIN } = process.env;

require("./db.js");
require("./utils/auth/passport");
require("./utils/auth/passportGoogleSSO");

const server = express();
server.name = "ONTHEROCKS-API";

server.use(morgan("dev"));
server.use(express.urlencoded({ extended: true, limit: "50mb" }));
server.use(express.json({ limit: "50mb" }));
// server.use(cookieParser());
// server.set("trust proxy", 1);
server.use(helmet());
server.use(cors({ origin: CLIENT_DOMAIN, credentials: true }));

// server.use(
//     session({
//         secret: SECRET_KEY,
//         saveUninitialized: false,
//         resave: false,
//     })
// );

// server.use(
//     cookieSession({
//         // name: 'session',
//         maxAge: 24 * 60 * 60 * 1000,
//         secret: SECRET_KEY,
//         // path: '/',
//         // httpOnly: true,
//         // domain: '.vercel.com',
//         // secure: true,
//         // sameSite: 'none',
//         // secureProxy: true
//     })
// );
server.use(express.static("public"));
server.use(passport.initialize());
server.use(passport.session());

// server.all("*", function (req, res, next) {
//     passport.authenticate("bearer", function (err, user) {
//         if (err) return next(err);
//         if (user) {
//             req.user = user;
//         }
//         return next();
//     })(req, res, next);
// });

server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", `${CLIENT_DOMAIN}`);
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
        "Access-Control-Allow-Headers",
        "Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
});

server.use("/", routes);

module.exports = {
    server,
};
