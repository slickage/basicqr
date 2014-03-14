var qr = require('qr-image');  
var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

app.get('/qr/:str', function(req, res) {  
  var code = qr.image(req.params.str, { type: 'png' });
  res.type('png');
  code.pipe(res);
});

app.listen(3000);
