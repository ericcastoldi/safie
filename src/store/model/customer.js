const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const customerSchema = new Schema({
  name: String,
  email: String,
  password: String,
  birthday: Date,
  phone: String,
  facebookId: String,
  facebookToken: String,
  measurements: [
    {
      name: String,
      description: String
    }
  ]
});



module.exports = mongoose.model('Customer', customerSchema);
