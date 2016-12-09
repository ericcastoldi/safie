require('babel-register')({
  presets: ['react']
});
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Safie = require('./src/store/components/Safie.jsx');
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
const configurePassport = require('./src/store/config/passport.js');
const configureRoutes = require('./src/store/api/routes.js');
const dbConfig = require('./src/store/config/database.js');
//const renderMiddleware = require('./src/store/components/state/data/ServerRendering.js');

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url);
configurePassport(passport);


// https://scotch.io/tutorials/easy-node-authentication-facebook
// https://github.com/reactjs/redux/blob/master/docs/recipes/ServerRendering.md
/*
1 - Configurar o ServerRendering do react/redux
2 - Configurar a base de dados de produtos
3 - Implementar regras mais robustas na shopping bag

===

4 - Configurar o sign-up via Facebook
5 - Configurar o login via Facebook
6 - Testar e ajustar o login via Facebook
*/


const app = express();

// app.use(favicon(__dirname + '/public/store/img/favicon.png'));
// app.use(express.static(path.join(__dirname, 'node_modules')));
// app.use(express.static(path.join(__dirname, 'public/store')));
// app.use('/img', express.static(path.join(__dirname, 'public/store/img')));

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

//https://www.youtube.com/watch?v=Uf1Vk3RnXsk&list=PLVgOtoUBG2md5HxaABCcnfstF88CPzUeD&index=2
//app.use(renderMiddleware);



//configureRoutes(app, passport);

app.get('*', (request, response) => {
  const html = ReactDOMServer.renderToString(React.createElement(Safie));
  response.send(html);
});

// app.get('*', (request, response) => {
//   var indexHtml = path.resolve(__dirname, 'public/store/', 'index.html');
//   response.sendFile(indexHtml);
// });

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), () => {
  console.log('Server up and running! http://localhost:' + app.get('port') + '/');
});
