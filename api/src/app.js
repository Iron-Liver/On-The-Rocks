require("dotenv").config();
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet')
const cors = require("cors");
const passport = require("passport");
const cookieSession = require("cookie-session");

const routes = require('./routes/index.js');
const { SECRET_KEY, CLIENT_DOMAIN } = process.env;

require('./db.js');
require("./utils/auth/passport");
require("./utils/auth/passportGoogleSSO");

const server = express();
server.name = 'ONTHEROCKS-API';

server.use(morgan('dev'));
server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));


server.use(helmet())
server.use(cors({ origin: CLIENT_DOMAIN, credentials: true }));
server.use(
    cookieSession({
        maxAge: 24 * 60 * 60 * 1000,
        secret: SECRET_KEY,
        // path: '/',
        // httpOnly: true,
        domain: '.vercel.app',
        // secure: true,
        // sameSite: 'none'
        // secureProxy: true
    })
);

server.use(passport.initialize());
server.use(passport.session());

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', `${CLIENT_DOMAIN}`);
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        "Access-Control-Allow-Headers",
        "Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

server.use('/', routes);

module.exports = {
    server
};
