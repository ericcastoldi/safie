const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const Correios = require('node-correios'),
    correios = new Correios();

const MongoClient = require('mongodb').MongoClient;

// Connection URL
var url = 'mongodb://localhost:27017/safie';



var app = express();

app.set('port', (process.env.PORT || 8080));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'public/store')));
app.use('/img', express.static(path.join(__dirname, 'public/store/img')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-cache');

  next();
});

app.post('/shop/shipping', (request, response) => {
  var args = {
      nCdServico: '40010,41106',
      sCepOrigem: '89040320',
      sCepDestino: request.body.cep,
      nVlPeso: request.body.totalWeight,
      nCodFormato: 1, // 1- caixa/pacote, 2 - rolo/prisma, 3 = envelope
      nVlComprimento: 50,
      nVlAltura: 15,
      nVlLargura: 30,
      nVlDiametro: 30
  };

  correios.calcPreco(args, function (err, result) {
    response.json(result);
  });
});

app.get('/customers', (req, res) =>{
  // Get the documents collection
  // Use connect method to connect to the server
  MongoClient.connect(url, function(err, db) {
    console.log('Connected successfully to server');

    var collection = db.collection('customers');
    collection.find({}).toArray(function(findErr, docs) {
      res.json(docs);
    });

    db.close();
  });
});

app.get('*', function (request, response) {
  var indexHtml = path.resolve(__dirname, 'public/store/', 'index.html');
  response.sendFile(indexHtml);
});


app.listen(app.get('port'), function () {
  console.log('Server up and running! http://localhost:' + app.get('port') + '/');
});
