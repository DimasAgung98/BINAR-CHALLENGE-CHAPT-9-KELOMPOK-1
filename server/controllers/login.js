const { user } = require('../models');
const bcrypt = require("bcrypt");

// import jwt
const jwt = require('jsonwebtoken');

//import jwt config
const jwtConfig = require('../config/jwt');

const login = async (req, res) => {
    try {
        const data = await user.findOne({
            where: { username: req.body.username }
        });


        try {
            const isPasswordMatch = await bcrypt.compare(req.body.password, data.password);
        } catch (error) {
            return res.status(500).json({ message: "login gagal, password salah" });
        }

        const tokenPayload = {
            id: data.id,
            username: data.username,
            email: data.username
        }

        const token = jwt.sign(tokenPayload, jwtConfig.JWT_SECRET);
        const datapas = !data.password == req.body.password;

        return res.status(200).redirect('http://localhost:4000')

    } catch (error) {
        return res.status(400).json({ message: "username salah", })
    }
}

module.exports = login;


//HALO BRO