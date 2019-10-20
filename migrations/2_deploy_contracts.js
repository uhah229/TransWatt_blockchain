var TransWattToken = artifacts.require("./TransWattToken.sol");

module.exports = function(deployer) {
  deployer.deploy(TransWattToken, 1000000);
};
