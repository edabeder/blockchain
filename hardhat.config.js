// https://eth-goerli.g.alchemy.com/v2/SKtHaJvNHKbDUU2tbbs1CeITDVjqusIt

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/SKtHaJvNHKbDUU2tbbs1CeITDVjqusIt',

      // private key
      accounts: ['4264e07c58e5df576e39b788396e3b1c4d1f2ecdd5c36a7e294576a878202976'],
    },
  },
};