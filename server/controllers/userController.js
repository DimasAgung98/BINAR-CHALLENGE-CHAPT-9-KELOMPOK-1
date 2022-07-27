const { user, user_bio } = require("../models");
const bcrypt = require("bcrypt")

//GET ALL PLAYER
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

//GET ONE PLAYER
const getProfile = async (req, res) => {
    const profile = [await user.findOne({
        where: {
            id: req.params.id,
        },
    })
    ]
    res.status(200).json({
        message: "profile-page",
        profile,
    })
}

module.exports = {
    getAllplayer,
    getProfile,
}