const Fcontracts = artifacts.require('Fcontracts');

module.exports = function(deployer) {
  // Use deployer to state migration tasks.
  deployer.deploy(Fcontracts);
};
