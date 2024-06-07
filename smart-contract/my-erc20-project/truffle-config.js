const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = "YOUR_METAMASK_MNEMONIC";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
    },
    polygon: {
      provider: () => new HDWalletProvider(mnemonic, "https://polygon-mainnet.infura.io/v3/42a1970809a6468b8068c19e873087f8"),
      network_id: 137,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },
  compilers: {
    solc: {
      version: "0.8.0",
    },
  },
};
