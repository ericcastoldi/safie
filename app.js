const path = require('path');
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const favicon = require('serve-favicon');
const morgan = require('morgan');
const helmet = require('helmet');
const passport = require('passport');
const mongoose = require('mongoose');
const configurePassport = require('./src/store/api/config/passport.js');
const configureRoutes = require('./src/store/api/config/routes.js');
const dbConfig = require('./src/store/api/config/database.js');

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url);

configurePassport(passport);

const app = express();

app.use(favicon(__dirname + '/public/store/img/favicon.png'));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'public/store')));
app.use('/img', express.static(path.join(__dirname, 'public/store/img')));

app.use(morgan('dev'));

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
  cookie: { maxAge: 180 * 60 * 1000 }, // 3hrs
	store: new MongoStore({ mongooseConnection: mongoose.connection })
	})
);

app.use(passport.initialize());
app.use(passport.session());



app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-cache');

  next();
});

configureRoutes(app, passport);

app.get('*', (request, response) => {
  var indexHtml = path.resolve(__dirname, 'public/store/', 'index.html');
  response.sendFile(indexHtml);
});

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), () => {
  console.log('Server up and running! http://localhost:' + app.get('port') + '/');
});
