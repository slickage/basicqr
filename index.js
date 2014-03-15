var qr = require('qr-image');  
var express = require('express');

var app = express();
app.use(express.bodyParser());
app.use(express.json());
app.use(express.urlencoded());

var port = process.env.PORT || 3000;

var respondQR = function(str, res) {
  var code = qr.image(str, { type: 'png' });
  res.type('png');
  code.pipe(res);
}

app.get('/qr', function(req, res) {
  var str = req.body.str || req.query.str || '';
  respondQR(str, res);
});

app.get('/qr/:str', function(req, res) {
  var str = req.params.str || '';
  respondQR(str, res);
});

app.listen(3000);
