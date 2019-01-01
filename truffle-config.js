const path = require("path");

var HDWalletProvider = require("truffle-hdwallet-provider");
 
 const infuraprovider = new HDWalletProvider(
  'legend firm glue rubber letter autumn vacuum vote use they famous tip',
  'https://rinkeby.infura.io/EJWYEvc3XuZHCpeK7GOE'
)

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
  
    rinkeby: {
      // must be a thunk, otherwise truffle commands may hang in CI
      provider: infuraprovider,
      network_id: '3',
      gas: 4500000,
      gasPrice: 10000000000,
    }
  }
};
