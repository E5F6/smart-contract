const AinrzyToken = artifacts.require("AinrzyToken");

module.exports = function (deployer) {
  const initialSupply = web3.utils.toWei('1000', 'ether'); // 1000 tokens with 18 decimals
  deployer.deploy(AinrzyToken, initialSupply);
};