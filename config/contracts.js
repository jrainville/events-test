module.exports = {
  // default applies to all environments
  default: {
    // Blockchain node to deploy the contracts
    deployment: {
      host: "localhost", // Host of the blockchain node
      port: 8546, // Port of the blockchain node
      type: "ws" // Type of connection (ws or rpc),
    },

    dappConnection: [
      "$WEB3",
      "ws://localhost:8546",
      "http://localhost:8545"
    ],

    gas: "auto",

    contracts: {
      SimpleStorage: {
        fromIndex: 0,
        args: [100]
      }
    }
  },

  privatenet: {
  },


  testnet: {
    deployment: {
      accounts: [
        {
          mnemonic: "example exile argue silk regular smile grass bomb merge arm assist farm",
          hdpath: "m/44'/60'/0'/0/",
          numAddresses: "10"
        }
      ],
      host: `rinkeby.infura.io/gBjAHp3zcUayoyNoYb9S`,
      port: false,
      protocol: 'https',
      type: "rpc"
    },
  },

  // merges with the settings in default
  // used with "embark run livenet"
  livenet: {
  },

  // you can name an environment with specific settings and then specify with
  // "embark run custom_name" or "embark blockchain custom_name"
  //custom_name: {
  //}
};
