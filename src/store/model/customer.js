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
  addresses: [{ type: Schema.ObjectId, ref: 'Address' }]
});

module.exports = mongoose.model('Customer', customerSchema);
