/*eslint no-underscore-dangle: 1*/
const bcrypt = require('bcrypt');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/safie';


const customerModel = {
  _id: null,
  name: null,
  email: null,
  password: null,
  birthday: null,
  phone: null,
  measurements: []
};

const validEmail = (email) => {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const customerFactory = (customerCandidate, createdCallback) => {

  if(!customerCandidate){
    throw new Error('Instancia vazia de cliente.');
  }

  if(!customerCandidate.name){
    throw new Error('Informe seu nome.');
  }

  if(!customerCandidate.email){
    throw new Error('Informe seu e-mail.');
  }

  if(!validEmail(customerCandidate.email)){
    throw new Error('Informe um e-mail valido.');
  }

  if(!customerCandidate.password){
    throw new Error('Informe sua senha.');
  }

  if(!customerCandidate.passwordConfirmation){
    throw new Error('Repita sua senha.');
  }

  if(!(customerCandidate.password === customerCandidate.passwordConfirmation)){
    throw new Error('A senha e a confirmação da senha devem ser iguais.');
  }

  if(!customerCandidate.birthday){
    throw new Error('Informe sua data de nascimento.');
  }

  if(!Date.parse(customerCandidate.birthday)) {
    throw new Error('A data de nascimento deve ser uma data válida.');
  }

  if(!customerCandidate.phone){
    throw new Error('Informe seu telefone.');
  }

  const saltRounds = 10;

  bcrypt.genSalt(saltRounds, function(saltError, salt) {
      bcrypt.hash(customerCandidate.password, salt, function(hashError, hash) {
        const customer = Object.assign({}, customerModel, {
          _id: customerCandidate._id,
          name: customerCandidate.name.trim(),
          email: customerCandidate.email.trim(),
          password: hash, // TODO: gerar hash aqui
          birthday: new Date(customerCandidate.birthday),
          phone: customerCandidate.phone.trim()
        });

        createdCallback(customer);
      });
  });
};

const addCustomer = function(customerCandidate, callback){

  customerFactory(customerCandidate, (customer) => {
    MongoClient.connect(url, function(connectionError, db) {

      db.collection('customers').save(customer, function(insertError, result) {
        callback(insertError, result);
        db.close();
      });

    });
  });
};


module.exports = {
  add: addCustomer
};
