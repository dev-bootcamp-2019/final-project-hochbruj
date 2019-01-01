var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var DoraFactory = artifacts.require("./DoraFactory.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(DoraFactory);
};
