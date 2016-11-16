const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/safie';


const withDb = function(cb){
  MongoClient.connect(url, function(err, db) {

    cb(db);

    db.close();
  });
};

const addCustomer = function(customer, cb){
  withDb(function(db){
    var customers = db.collection('customers');
    customers.insert(customer, function(err, result){
      cb(err, result.result);
    });
  });
};


module.exports = {
  add: addCustomer
};
