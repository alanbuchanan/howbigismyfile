var express = require('express');
var app = express();

var multer = require('multer');
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.json());

// view engine setup
app.use(express.static(path.join(__dirname, '/views')));

app.get('/', (req, res) => {
  res.sendFile('/views/index.html');
});

app.post('/', multer({ dest: './uploads/'}).single('upl'), (req, res) => {
	console.log(req.file); //form files
	res.send({
		file: req.file.originalname,
		size: req.file.size
	})
});

var port = 3000 || process.env.PORT;
app.listen(port, () => console.log(`listening on port ${port}`));