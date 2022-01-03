// https://eth-ropsten.alchemyapi.io/v2/Jwa1tYQfhbl5LtBEQ48gs1LNcDJIu9LP


require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/Jwa1tYQfhbl5LtBEQ48gs1LNcDJIu9LP",
      accounts: ['e12daf8388e26ab9c23b8751af443273844c5a66000273eafeb2c3e13de423e7']
    }
  }

}