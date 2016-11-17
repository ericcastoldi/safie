const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/safie';


const addCustomer = function(customer, callback){
  MongoClient.connect(url, function(err, db) {

    db.collection('customers').insert(customer, function(insertErr, result) {
      db.close();
      callback(insertErr, result);
    });

  });
};


module.exports = {
  add: addCustomer
};
