const path = require('path');
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const customers = require('./src/store/api/customers.js');
const favicon = require('serve-favicon');
const morgan = require('morgan');
const helmet = require('helmet');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const MongoClient = require('mongodb').MongoClient;
const dbConfig = require('./src/store/config/database.js');

// https://scotch.io/tutorials/easy-node-authentication-setup-and-local
// https://scotch.io/tutorials/easy-node-authentication-facebook
/*
1 - Configurar o mongooose
2 - Configurar o sign-up local do passport
3 - Configurar o login local do passport
4 - Testar e ajustar o login local

===

5 - Configurar o sign-up via Facebook
6 - Configurar o login via Facebook
7 - Testar e ajustar o login via Facebook

===

8 - Configurar o mongo para limpar as sessões de tempos em tempos
*/

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});



const app = express();

app.use(favicon(__dirname + '/public/store/img/favicon.ico'));

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'public/store')));
app.use('/img', express.static(path.join(__dirname, 'public/store/img')));

app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(session({
	secret: 'safie_session_super_secret',
	proxy: true,
	resave: false,
	saveUninitialized: false,
	store: new MongoStore({ url: dbConfig.url })
	})
);

app.use(passport.initialize());
app.use(passport.session());



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

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), () => {
  console.log('Server up and running! http://localhost:' + app.get('port') + '/');
});
