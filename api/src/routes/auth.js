const router = require("express").Router();
const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { User } = require("../db");
const { transporter } = require("../utils/nodemailer");
const { isLogedIn, isLogedAsAdmin } = require("../middlewares");
const { SECRET_KEY, GMAIL_APP_EMAIL, FRONT } = process.env;

router.use(express.json());


router.post("/login", (req, res, next) => {
  passport.authenticate("local", { session: true }, (err, user, done) => {
    if (err) throw err;
    if (!user) res.send("No user exist");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
      });
    }
  })(req, res, next);
});


router.get(
  "/login/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/redirect",
  passport.authenticate("google", {
    failureMessage: "Cannot login to Google, please try again later!",
  }),
  (req, res) => {
    res.send("Thank you for signing in!");
  }
);

router.get("/logout", (req, res, next) => {
  req.logOut();
  req.session = null;
  res.send("Logged out");
});

router.get("/user", isLogedIn, async (req, res) => {
  try {
    const user = await User.findOne({
      where: { id: req.user.id },
    });

    const { id, email, isAdmin } = user;
    let token = await jwt.sign({ id, email, isAdmin }, SECRET_KEY, { expiresIn: "24hr" });
    res.json(token);
  } catch (error) {
    res.json(error.message);
  }
});

router.post("/email", async (req, res, next) => {
  let { email, type } = req.body;
  email = email.toLowerCase();
  let user = User.findOne({ where: { email } });
  if (!user) return res.json({ error: "Non-existent User" });
  let token = await jwt.sign({ email }, SECRET_KEY, { expiresIn: "1hr" });
  if (type === "passwordreset") {
    transporter.sendMail({
      from: `"On The Rocks" <${GMAIL_APP_EMAIL}>`, // sender address
      to: email, // list of receivers
      subject: "Recover password", // Subject line
      text: "click on the link to reset your password ", // plain text body
      html: `<b>click on the link to reset your password: <a href="${FRONT}/verify/password?token=${token}"> HERE </a> </b>`, // html body
    });
    res.json({ success: "Email sent" });
  }
  if (type === "verifyadmin") {
    console.log(FRONT);
    await transporter.sendMail({
      from: `"On The Rocks" <${GMAIL_APP_EMAIL}>`, // sender address
      to: email, // list of receivers
      subject: "Two steps verification", // Subject line
      text: "Click on the link to verify your identity: ", // plain text body
      html: `<b>Click on the link to verify your identity: <a href="${FRONT}/verify/admin?token=${token}"> HERE </a> </b>`, // html body
    });
    res.json({ success: "Email sent" });
  }
});

router.post("/passwordreset",passport.authenticate("bearer", { session: false }), async (req, res, next) => {
  let { token, newPassword } = req.body;
  try {
    let email = jwt.verify(token, SECRET_KEY).email.toLowerCase();
    let isRegistered = await User.findOne({ where: { email: email } });
    if (isRegistered) {
      const hashedPassword = await bcrypt.hash(newPassword, 12);
      await User.update(
        { password: hashedPassword },
        { where: { email: email } }
      );
      return res.json({ success: "Updated user" });
    } else {
      return res.json({ error: "Non-existent User" });
    }
  } catch (e) {
    return res.json({ error: e.message });
  }
});

router.post("/admin",passport.authenticate("bearer", { session: false }), async (req, res, next) => {
  let { token } = req.body;
  try {
    let email = jwt.verify(token, SECRET_KEY).email.toLowerCase();
    let isAdmin = await User.findOne({
      where: { email: email, isAdmin: true },
    });
    isAdmin ? res.json(true) : res.json(false);
  } catch (e) {
    return res.json({ error: e.message });
  }
});

module.exports = router;
