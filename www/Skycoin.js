var exec = require('cordova/exec');

var Skycoin = {
  generateAddresses: function(successCallback, errorCallback, args) {
    console.log('retrieving addresses');
    exec(successCallback, errorCallback, "Skycoin", "GenerateAddresses", args);
  },
  generateSeed: function(successCallback, errorCallback, args) {
      console.log('retrieving new seed');
      exec(successCallback, errorCallback, "Skycoin", "GenerateSeed", args);
  },
  prepareTransaction: function(successCallback, errorCallback, args) {
    console.log('creating transaction');
    exec(successCallback, errorCallback, "Skycoin", "PrepareTransaction", args);
  },
};

module.exports = Skycoin;
