var TranswattToken = artifacts.require("./TranswattToken.sol");

module.exports = function(deployer) {
  deployer.deploy(TranswattToken, 1000000);
};
