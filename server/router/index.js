const router = require("express").Router();
const multer = require('multer');

//PENGATURAN STORAGE UNTUK MULTER
const myStorage = multer.diskStorage({
    destination: './public/uploads',
    filename: (req, file, callback) => {
        callback(null, file.originalname); // upload dengan nama asli
    }
});

// middleware untuk upload dengan multer
const upload = multer({ storage: myStorage });

// import controllers
const home = require('../controllers/home');
const register = require('../controllers/register');
const login = require('../controllers/login');
const uploadPicture = require('../controllers/upload');
const forgotPassword = require('../controllers/forgot');
const userCont = require('../controllers/userController');

router.get("/", home.index);
router.post("/register", register);
router.post('/login', login);
router.post('/upload', upload.single('photo'), uploadPicture);
router.get('/users', userCont.getAllplayer);
router.get('/users/:id', userCont.getProfile);

//FORGOT PASSWORD
router.put('/forgot-password', forgotPassword)


module.exports = router;