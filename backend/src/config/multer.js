const multer = require("multer");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, './src/public');
    },
    filename: function (req, file, cb) {
        // console.log("teste", file.originalname)
        if (file.mimetype.startsWith('video/')) {
            return cb(null, `${Date.now()}_${file.originalname}`);
        } else {
            return cb(new Error('O arquivo enviado não é um vídeo.'));
        }
    }
});


var upload = multer({ storage });

module.exports = upload;