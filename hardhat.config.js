// import config before anything else

require('dotenv').config({ path: __dirname + '/.env' })

require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    }
  },
  networks: {
    fantom: {
      url: "https://rpc.ankr.com/fantom",
      accounts: [process.env.DEPLOYER_KEY],
    }
  },
  etherscan: {
    apiKey: {
      fantom: process.env.FTM_SCAN_KEY,
    },
    customChains: [
      {
        network: "fantom",
        chainId: 250,
        urls: {
          apiURL: "https://api.ftmscan.com/api",
          browserURL: "https://ftmscan.com"
        }
      }
    ]
  },
};
