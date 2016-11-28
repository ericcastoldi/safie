const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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


let customerSchema = new Schema({
  name: String,
  email: String,
  password: String,
  birthday: Date,
  phone: String,
  measurements: [
    {
      name: String,
      description: String
    }
  ]
});

const encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

const validPassword = (password) => {
    return bcrypt.compareSync(password, this.password);
};

const create = (customerCandidate) => {
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

  return Object.assign({}, customerModel, {
    name: customerCandidate.name.trim(),
    email: customerCandidate.email.trim(),
    birthday: new Date(customerCandidate.birthday),
    phone: customerCandidate.phone.trim(),
    password: this.encryptPassword(customerCandidate.password)
  });
};

const whithoutSensitiveInfo = () => {
  return Object.assign({}, customerModel, {
    id: this.id,
    name: this.name,
    email: this.email,
    birthday: this.birthday,
    phone: this.phone
  });
};

const from = (customerCandidate) => {
  const customer = create(customerCandidate);

  this.name = customer.name;
  this.email = customer.email;
  this.phone = customer.phone;
  this.birthday = customer.birthday;
  this.password = encryptPassword(customer.password);
};


customerSchema.methods.encryptPassword = encryptPassword;
customerSchema.methods.validPassword = validPassword;
customerSchema.methods.create = create;
customerSchema.methods.from = from;
customerSchema.methods.whithoutSensitiveInfo = whithoutSensitiveInfo;


module.exports = mongoose.model('Customer', customerSchema);
