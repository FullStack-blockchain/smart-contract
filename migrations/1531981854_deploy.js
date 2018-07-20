var BigNumber = require('bignumber.js');
var initialDisbursement = new BigNumber(1500000000000000000000000);

var RiobitBackend = artifacts.require("./contracts/RiobitBackend.sol");
var RiobitDelegate = artifacts.require("./contracts/RiobitDelegate.sol")
var addresses = ['0x54fd80d6ae7584d8e9a19fe1df43f04e5282cc43', '0xa6d135de4acf44f34e2e14a4ee619ce0a99d1e08'];
module.exports = function(deployer) {
  deployer.deploy(RiobitBackend, addresses, 2, initialDisbursement);
  deployer.deploy(RiobitDelegate, addresses, 1);
};

