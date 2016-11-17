var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var customers = require('./src/store/api/customers.js');
var helmet = require('helmet');

var app = express();

app.set('port', (process.env.PORT || 3000));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'public/store')));
app.use('/img', express.static(path.join(__dirname, 'public/store/img')));

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-cache');

  next();
});


app.get('*', function (request, response) {
  var indexHtml = path.resolve(__dirname, 'public/store/', 'index.html');
  response.sendFile(indexHtml);
});

app.post('/api/customers', function(req, res, next){
  console.log(req.body);

  customers.add(req.body, function(err, result) {
    if(err) {
      next(new Error('Não foi possível realizar o cadastro :( ' + err.message));
    }
    else {
      res.json(result);
    }
  });
});

app.listen(app.get('port'), function () {
  console.log('Server up and running! http://localhost:' + app.get('port') + '/');
});
