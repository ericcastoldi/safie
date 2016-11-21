const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const customers = require('./src/store/api/customers.js');
const helmet = require('helmet');

const app = express();

app.set('port', (process.env.PORT || 3000));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'public/store')));
app.use('/img', express.static(path.join(__dirname, 'public/store/img')));

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-cache');

  next();
});


app.get('*', (request, response) => {
  var indexHtml = path.resolve(__dirname, 'public/store/', 'index.html');
  response.sendFile(indexHtml);
});

app.post('/api/customers', (request, response) => {
  customers.save(request.body, (apiResult) => {
    response.json(apiResult);
  });
});

app.listen(app.get('port'), () => {
  console.log('Server up and running! http://localhost:' + app.get('port') + '/');
});
