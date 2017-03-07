const bcrypt = require('bcryptjs');

const customerModel = {
  name: '',
  email: '',
  birthday: '',
  phone: '',
  measurements: []
};

const validEmail = (email) => {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const encryptPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

const validPassword = (password, customer) => {
  return bcrypt.compareSync(password, customer.password);
};

const from = (customerCandidate, customer) => {
  if (!customerCandidate) {
    throw 'Instancia vazia de cliente.';
  }

  if (!customerCandidate.name) {
    throw 'Informe seu nome.';
  }

  if (!customerCandidate.birthday) {
    throw 'Informe sua data de nascimento.';
  }

  if (!Date.parse(customerCandidate.birthday)) {
    throw 'A data de nascimento deve ser uma data válida.';
  }

  if (!customerCandidate.phone) {
    throw 'Informe seu telefone.';
  }

  if (!customerCandidate.email) {
    throw 'Informe seu e-mail.';
  }

  if (!validEmail(customerCandidate.email)) {
    throw 'Informe um e-mail valido.';
  }

  if (!customerCandidate.password) {
    throw 'Informe sua senha.';
  }

  if (!customerCandidate.passwordConfirmation) {
    throw 'Repita sua senha.';
  }

  if (!(customerCandidate.password === customerCandidate.passwordConfirmation)) {
    throw 'A senha e a confirmação da senha devem ser iguais.';
  }

  Object.assign(customer, customerModel, {
    name: customerCandidate.name.trim(),
    email: customerCandidate.email.trim(),
    birthday: new Date(customerCandidate.birthday),
    phone: customerCandidate.phone.trim(),
    password: encryptPassword(customerCandidate.password)
  });
};

const whithoutSensitiveInfo = (customer) => {

  if (!customer) {
    return null;
  }

  return Object.assign({}, customerModel, {
    id: customer.id,
    name: customer.name,
    email: customer.email,
    birthday: customer.birthday,
    phone: customer.phone
  });
};


module.exports = {
  from: from,
  model: customerModel,
  validPassword: validPassword,
  whithoutSensitiveInfo: whithoutSensitiveInfo
};
