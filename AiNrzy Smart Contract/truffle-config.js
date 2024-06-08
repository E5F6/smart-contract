const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = "film idle nominee remove black once vocal miss snake matter speed carbon";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
    },
    polygon: {
      provider: () => new HDWalletProvider(mnemonic, "https://polygonzkevm-cardona.g.alchemy.com/v2/i3dYDbzmgCsm8Lx8nrxKfq1b1GPHFfd9"),
      network_id: 2442, // Polygon mainnet network id
      gas: 1000000, // Minimum gas limit
      gasPrice: 1000000000, // Minimum gas price (1 Gwei)
      confirmations: 3,
      timeoutBlocks: 500,
      skipDryRun: true,
    },
  },
  compilers: {
    solc: {
      version: "0.8.20", // Specify exact version of solc
    },
  },
};