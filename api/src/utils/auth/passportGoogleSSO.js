const { User } = require("../../db");
const { SECRET_KEY, GOOGLE_CLIENT_ID } = process.env;
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(GOOGLE_CLIENT_ID);
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
    const { tokenId } = req.body;

    try {
        const ticket = await client.verifyIdToken({
            idToken: tokenId,
            audience: GOOGLE_CLIENT_ID,
        });
        var { email_verified, sub, given_name, family_name, email } =
            ticket.getPayload();
        email = email.toLocaleLowerCase();
        console.log(email_verified, email);
        if (email_verified) {
            const find = await User.findOne({
                where: {
                    email: email,
                },
            });
            if (find) {
                if (!find.name)
                    await find.update({ name: `${given_name} ${family_name}` });
                if (!find.googleId) await find.update({ googleId: sub });
                const token = await jwt.sign(
                    {
                        id: find.id,
                        email: find.email,
                        isAdmin: find.isAdmin,
                    },
                    SECRET_KEY,
                    { expiresIn: "24hr" }
                );
                res.json(token);
            } else {
                const generatedPSW = await bcrypt.hash(sub, 12);
                const newUser = await User.create({
                    name: `${given_name} ${family_name}`,
                    email: email,
                    password: generatedPSW,
                    googleId: sub,
                });
                const token = await jwt.sign(
                    {
                        id: newUser.id,
                        email: newUser.email,
                        isAdmin: newUser.isAdmin,
                    },
                    SECRET_KEY,
                    { expiresIn: "24hr" }
                );
                res.json(token);
            }
        } else {
            res.status(401).json({ message: "email no verificado" });
        }
    } catch (e) {
        res.status(401).json({ message: e.message });
    }
};
