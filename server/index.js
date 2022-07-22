const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');
const { triggerAsyncId } = require('async_hooks');
const app = express();
const PORT = 4000;

//middleware untuk bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, '/public/upload')));

//PENGATURAN STORAGE UNTUK MULTER
const myStorage = multer.diskStorage({
    destination: './public/uploads',
    filename: (req, file, callback) => {
        callback(null, file.originalname); // upload dengan nama asli
    }
});

// middleware untuk upload dengan multer
const upload = multer({ storage: myStorage });

//menerapkan cors
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('hello world')
})

//MULTER UPLOAD IMAGE
app.post('/upload', upload.single('photo'), (req, res) => {
    console.log(req.file);
    console.log(req.body);
    res.status(200).json({
        message: 'Upload success',
        data: {
            name: req.body.name,
            image: req.file.path
        }
    });
});


//APP LISTEN
app.listen(PORT, (err) => {
    if (err) throw err;
    console.log('App is running on port' + PORT);
})