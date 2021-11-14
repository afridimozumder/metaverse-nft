require("@nomiclabs/hardhat-waffle");

const fs = require("fs")
const privatekey = fs.readFileSync(".secret").toString()
const projectId = "2644eaf7a0fbfbbcfc01743f";
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://speedy-nodes-nyc.moralis.io/${projectId}/polygon/mumbai`,
      accounts: [privatekey]
    },
    mainnet: {
      url: `https://speedy-nodes-nyc.moralis.io/${projectId}/polygon/mainnet`,
      accounts: [privatekey]
    }
  },
  solidity: "0.8.4",
};
