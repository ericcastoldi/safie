const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const addressSchema = new Schema({
  customer: { type: Schema.ObjectId, ref: 'Customer' },
  street: String,
  number: String,
  obs: String,
  district: String, // bairro
  state: String,
  city: String,
  code: String // cep
});


module.exports = mongoose.model('Address', addressSchema);
