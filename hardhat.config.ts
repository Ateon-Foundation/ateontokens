import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  defaultNetwork: "matic",
  networks: {
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts:
        process.env.TEST_PRIVATE_KEY !== undefined ? [process.env.TEST_PRIVATE_KEY] : [],
    },
    matic: {
      url: "https://rpc-mainnet.maticvigil.com/",
      chainId: 137,
      accounts:
        process.env.MAIN_PRIVATE_KEY !== undefined ? [process.env.MAIN_PRIVATE_KEY] : [],
    }
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.POLYSCAN_API_KEY
  },
};

export default config;
