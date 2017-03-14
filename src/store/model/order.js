const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colorSchema = new Schema({
  name: String,
  hex: String
});

const optionsSchema = new Schema({
  color: colorSchema,
  measurements: Schema.Types.Mixed
});

const pictureSchema = new Schema({
  main: Number,
  product: Number,
  paths: Schema.Types.Mixed
});

const productSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  measurements: Schema.Types.Mixed,
  pictures: pictureSchema,
  colors: Schema.Types.Mixed,
  defaultColor: Schema.Types.Mixed
});

const orderAddressSchema = new Schema({
  street: String,
  number: String,
  obs: String,
  district: String,
  state: String,
  city: String,
  code: String
});

const shippingSchema = new Schema({
  address: orderAddressSchema,
  price: Number
});

const itemSchema = new Schema({
  product: productSchema,
  options: optionsSchema
});

const orderSchema = new Schema({
  items: [itemSchema],
  shipping: shippingSchema,
  totalPrice: Number,
  status: String,
  transactionCode: String,
  date: Date,
  customer: {
    type: Schema.ObjectId,
    ref: 'Customer'
  }
});

module.exports = mongoose.model('Order', orderSchema);
