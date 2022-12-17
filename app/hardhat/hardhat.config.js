require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()

const PRIVATE_KEY=process.env.PRIVATE_KEY;
const URL=process.env.URL;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    polygon:{
      url:URL,
      accounts:[PRIVATE_KEY]
    }
  }
};
