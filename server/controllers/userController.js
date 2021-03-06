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
        data: profile,
    })
}

//GET ONE PLAYER TO UPDATE
// const getUpdateprofile = async (req, res) => {
//     const getUser = await user.findOne({
//         where: {
//             id: req.params.id
//         },
//         include: {
//             model: user_bio
//         }
//     });
//     res.status(200).json({
//         getUser,
//     })
// };

// const postUpdateUser = async (req, res) => {
//     const { username, password, email } = req.body;
//     const query = {
//         where: {
//             id: req.params.id,
//         },
//     }
// };
// const profile = user.update({ username, password, email }, query);
// const profiles = user_bio.update(
//     {
//         nama: req.body.nama,
//         socialMedia: req.body.socialMedia,
//         aboutMe: req.body.aboutMe,
//     }, {
//     where: {
//         id_foreign: req.params.id
//     }
// }
// );
// res.status(200).json({
//     massege: "data updated",
//     profile,
//     profiles
// })


module.exports = {
    getAllplayer,
    getProfile,
    // getUpdateprofile,
    // postUpdateUser
}