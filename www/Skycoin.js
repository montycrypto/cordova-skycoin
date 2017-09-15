var exec = require('cordova/exec');

var Skycoin = {
  getAddresses: function(successCallback, errorCallback, args) {
    console.log('retrieving addresses');
    exec(successCallback, errorCallback, "Skycoin", "GetAddresses", args);
  },
  getBalances: function(successCallback, errorCallback, args) {
    console.log('retrieving addresses with balance');
    exec(successCallback, errorCallback, "Skycoin", "GetBalances", args);
  },
  getSeed: function(successCallback, errorCallback, args) {
      console.log('retrieving new seed');
      exec(successCallback, errorCallback, "Skycoin", "GetSeed", args);
  },
  postTransaction: function(successCallback, errorCallback, args) {
    console.log('creating transaction');
    exec(successCallback, errorCallback, "Skycoin", "PostTransaction", args);
  },
};

module.exports = Skycoin;
