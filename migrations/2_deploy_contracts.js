var TransWattToken = artifacts.require("./TransWattToken.sol");
var TransWattTokenSale = artifacts.require("./TransWattTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(TransWattToken, 1000000).then(function() {
    // token price is 0.001 ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(TransWattTokenSale, TransWattToken.address,tokenPrice);
  });
};
