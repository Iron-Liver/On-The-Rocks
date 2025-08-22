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
const { SECRET_KEY, CLIENT_DOMAIN, CLIENT_ORIGINS, FRONT, ALLOW_VERCEL_WILDCARD } = process.env;

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
// Configure CORS with allowlist from env
const allowedOrigins = [CLIENT_DOMAIN, FRONT]
    .concat((CLIENT_ORIGINS || "").split(",").map((s) => s.trim()).filter(Boolean))
    .filter(Boolean);

const corsOptions = {
    origin: (origin, callback) => {
        // allow non-browser requests or same-origin
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) return callback(null, true);
        // optional wildcard for any Vercel subdomain
        if (
            ALLOW_VERCEL_WILDCARD === "true" &&
            (origin.endsWith(".vercel.app") || origin.endsWith(".vercel.sh"))
        ) {
            return callback(null, true);
        }
        return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
};

server.use(cors(corsOptions));
// Preflight for all routes
server.options("*", cors(corsOptions));

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

server.use("/", routes);

module.exports = {
    server,
};

