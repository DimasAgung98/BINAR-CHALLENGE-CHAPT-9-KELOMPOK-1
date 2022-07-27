const { user } = require('../models');
const bcrypt = require('bcrypt');
const Swal = require('sweetalert2');

const saltRound = Number(process.env.APP_HASH_ROUND) || 10;

const register = async (req, res) => {

    try {
        // buat sandi encrypted dengan bcrypt
        const encryptedPassword = await bcrypt.hash(req.body.password, saltRound);

        const username = req.body.username;
        const isExist = await user.findOne({
            where: {
                username: username
            }
        });

        if (isExist) {
            console.log('isExist');
            return res.status(400).json({
                message: "username already registered"
            });
        } else {
            console.log('berhasil');
            const data = await user.create({
                name: req.body.name,
                username: req.body.username,
                email: req.body.email,
                password: encryptedPassword
            });

            return res.status(200).json({
                message: "anda berhasil register"
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: "Error"
        });
    }
}


module.exports = register;