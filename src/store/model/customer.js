const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

customerSchema.methods.encryptPassword = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

customerSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('Customer', customerSchema);
