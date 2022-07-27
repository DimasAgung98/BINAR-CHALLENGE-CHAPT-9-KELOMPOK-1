const { user, user_bio } = require("../models");
const bcrypt = require("bcrypt")

const getAllplayer = async (req, res) => {
    try {
        const player = await user.findAll();
        res.status(200).json({
            massege: "Profile",
            data: player
        });
    } catch (err) {
        console.error(err.massege);
    }
};

module.exports = {
    getAllplayer,
}