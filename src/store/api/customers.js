/*eslint no-underscore-dangle: 1*/
const bcrypt = require('bcryptjs');
const MongoClient = require('mongodb').MongoClient;
const dbConfig = require('../config/database.js');

const apiResultModel = {
  success: false,
  error: null,
  data: null
};

const customerModel = {
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


const encryptPassword = (password, passwordEncrypted) => {
  const saltRounds = 10;

  bcrypt.genSalt(saltRounds, (saltError, salt) => {

      if(saltError) {
        passwordEncrypted(saltError);
        return;
      }

      bcrypt.hash(password, salt, (hashError, hash) => {

        if(hashError) {
          passwordEncrypted(hashError);
          return;
        }

        passwordEncrypted(null, hash);
      });
  });
};

const apiResultFactory = (error, extractErrorMessage, extractData) => {
  if(error){

    if(extractErrorMessage){
      return Object.assign({}, apiResultModel, { error: extractErrorMessage() });
    }

    return Object.assign({}, apiResultModel, { error: error });
  }

  return Object.assign({}, apiResultModel, {
    success: true,
    data: extractData()
  });
};

const customerFactory = (customerCandidate, createdCallback) => {
  try{

    if(!customerCandidate){
      throw 'Instancia vazia de cliente.';
    }

    if(!customerCandidate.name){
      throw 'Informe seu nome.';
    }

    if(!customerCandidate.birthday){
      throw 'Informe sua data de nascimento.';
    }

    if(!Date.parse(customerCandidate.birthday)) {
      throw 'A data de nascimento deve ser uma data válida.';
    }

    if(!customerCandidate.phone){
      throw 'Informe seu telefone.';
    }

    if(!customerCandidate.email){
      throw 'Informe seu e-mail.';
    }

    if(!validEmail(customerCandidate.email)){
      throw 'Informe um e-mail valido.';
    }

    if(!customerCandidate.password){
      throw 'Informe sua senha.';
    }

    if(!customerCandidate.passwordConfirmation){
      throw 'Repita sua senha.';
    }

    if(!(customerCandidate.password === customerCandidate.passwordConfirmation)){
      throw 'A senha e a confirmação da senha devem ser iguais.';
    }
  }
  catch(validationError){
    createdCallback(validationError, null);
    return;
  }

  encryptPassword(customerCandidate.password, (encryptionError, encryptedPassword) => {

    if(encryptionError){
      createdCallback(encryptionError, null);
      return;
    }

    const customer = Object.assign({}, customerModel, {
      _id: customerCandidate._id,
      name: customerCandidate.name.trim(),
      email: customerCandidate.email.trim(),
      password: encryptedPassword,
      birthday: new Date(customerCandidate.birthday),
      phone: customerCandidate.phone.trim()
    });

    createdCallback(null, customer);
  });
};

const save = (customer, customerSaved) => {
  MongoClient.connect(dbConfig.url, (connectionError, db) => {

    db.collection('customers')
      .save(customer, (saveError, saveResult) => {

        if(saveError){
          customerSaved(saveError, null);
          return;
        }

        customerSaved(null, saveResult);
        db.close();
      });

  });
};

const saveCustomer = (customerCandidate, customerSaved) => {

  customerFactory(customerCandidate, (customerFactoryError, createdCustomer) => {
    if(customerFactoryError){
      customerSaved(apiResultFactory(customerFactoryError));
      return;
    }

    save(createdCustomer, (saveError, saveResult) => {

      customerSaved(apiResultFactory(saveError, () => {
        return saveError.message;
      }, () => {
        var customer = saveResult.ops[0];
        delete customer.password;
        return customer;
      }));

    });

  });
};


module.exports = {
  save: saveCustomer
};
