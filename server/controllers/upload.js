const express = require('express');
const multer = require('multer');
const path = require('path');

// //PENGATURAN STORAGE UNTUK MULTER
// const myStorage = multer.diskStorage({
//     destination: './public/uploads',
//     filename: (req, file, callback) => {
//         callback(null, file.originalname); // upload dengan nama asli
//     }
// });

// // middleware untuk upload dengan multer
// const upload = multer({ storage: myStorage });

const uploadPicture = async (req, res) => {
    // upload.single('photo')
    let imageURL = req.protocol + '://' + req.get('host') + '/uploads/' + req.file.filename;
    console.log(req.file);
    console.log(req.body);
    res.status(200).json({
        message: 'Upload success',
        data: {
            name: req.body.name,
            image: imageURL,
            path: req.file.path
        }
    })
};

module.exports = uploadPicture;