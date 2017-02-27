var express =  require('express');
var app = express();

var mongojs = require('mongojs');
var db = mongojs('inputlist', ['inputlist']);

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(express.static(__dirname+ "/public"));
app.post('/inputlist', function(req, res) {
	db.inputlist.insert(req.body, function(err, data) {
		res.json(data);
		console.log(res.json(data));
	})
});
app.get('/inputlist', function(req, res) {

	db.inputlist.find(function(err, data) {

		res.json(data);
	})
});
app.listen(3000, function() {
	console.log("server running ... listen to port 3000");
})