/*eslint no-underscore-dangle: 1*/
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/safie';

const customerModel = {
  _id: null,
  name: null,
  email: null,
  password: null,
  birthday: null,
  cpf: null,
  phone: null,
  measurements: []
};

const validEmail = (email) => {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const validCPF = (cpf) => {
    var soma = 0;
    var resto;

    if(!parseInt(cpf))
    {
      return false;
    }

    for(var i = 1; i <= 9; i++) {
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if((resto === 10) || (resto === 11)) {
      resto = 0;
    }

    if(resto !== parseInt(cpf.substring(9, 10))) {
      return false;
    }

    soma = 0;
    for (i = 1; i <= 10; i++) {
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    resto = (soma * 10) % 11;

    if((resto === 10) || (resto === 11)) {
      resto = 0;
    }

    if(resto !== parseInt(cpf.substring(10, 11))) {
      return false;
    }
    return true;
};

const customerFactory = (customer) => {

  if(!customer){
    throw new Error('Instancia vazia de cliente.');
  }

  if(!customer.name){
    throw new Error('Informe seu nome.');
  }

  if(!customer.email){
    throw new Error('Informe seu e-mail.');
  }

  if(!validEmail(customer.email)){
    throw new Error('Informe um e-mail valido.');
  }

  if(!customer.password){
    throw new Error('Informe sua senha.');
  }

  if(!customer.passwordConfirmation){
    throw new Error('Repita sua senha.');
  }

  if(!(customer.password === customer.passwordConfirmation)){
    throw new Error('A senha e a confirmação da senha devem ser iguais.');
  }

  if(!customer.birthday){
    throw new Error('Informe sua data de nascimento.');
  }

  if(!Date.parse(customer.birthday)) {
    throw new Error('A data de nascimento deve ser uma data válida.');
  }

  if(!customer.cpf){
    throw new Error('Informe seu CPF.');
  }

  if(!validCPF(customer.cpf)){
    throw new Error('Informe um CPF válido.');
  }

  if(!customer.phone){
    throw new Error('Informe seu telefone.');
  }

  return Object.assign({}, customerModel, {
    _id: customer._id,
    name: customer.name.trim(),
    email: customer.email.trim(),
    password: customer.password, // TODO: gerar hash aqui
    birthday: new Date(customer.birthday),
    cpf: customer.cpf.trim(),
    phone: customer.phone.trim()
  });
};

const addCustomer = function(customerCandidate, callback){

  var customer = customerFactory(customerCandidate);

  MongoClient.connect(url, function(err, db) {

    db.collection('customers').save(customer, function(insertErr, result) {
      db.close();
      callback(insertErr, result);
    });

  });
};


module.exports = {
  add: addCustomer
};
