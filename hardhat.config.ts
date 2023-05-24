import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";  
import "@nomiclabs/hardhat-etherscan";      /// etherscan
import "hardhat-deploy";                    /// deploy
import "hardhat-deploy-ethers";             /// yarn run hardhat deploy
import "hardhat-contract-sizer";            /// yarn run contract-sizer
import '@primitivefi/hardhat-dodoc';        /// 
import "@typechain/hardhat";                /// yarn hardhat prepare-package
import "hardhat-packager";                  /// yarn hardhat prepare-package
import { config as dotenvConfig } from "dotenv";

dotenvConfig();

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  namedAccounts: {
    deployer: 0 
  },
  networks: {
    "europa-staging-v3": {
      url: "https://staging-v3.skalenodes.com/v1/staging-legal-crazy-castor",
      accounts: [(process.env.PRIVATE_KEY as string)]
    },
    "calypso-staging-v3": {
      url: "https://staging-v3.skalenodes.com/v1/staging-utter-unripe-menkar",
      accounts: [(process.env.PRIVATE_KEY as string)]
    },
    calypso: {
      url: "https://mainnet.skalenodes.com/v1/honorable-steel-rasalhague",
      accounts: [(process.env.PRIVATE_KEY as string)]
    },
    europa: {
      url: "https://mainnet.skalenodes.com/v1/elated-tan-skat",
      accounts: [(process.env.PRIVATE_KEY as string)]
    }

  },
  etherscan: {
    apiKey: {
      "calypso-staging-v3": "does-not-matter",
      "europa-staging-v3": "does-not-matter",
      "calypso": "does-not-matter",
      "europa": "does-not-matter"
    },
    customChains: [
      {
        network: "calypso-staging-v3",
        chainId: 344106930,
        urls: {
          apiURL: "https://staging-utter-unripe-menkar.explorer.staging-v3.skalenodes.com/api",
          browserURL: "https://staging-utter-unripe-menkar.explorer.staging-v3.skalenodes.com"
        }
      },
      {
        network: "calypso",
        chainId: 1564830818,
        urls: {
            apiURL: "https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com/api",
            browserURL: "https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com"
        }
      },
      {
        network: "europa-staging-v3",
        chainId: 476158412,
        urls: {
          apiURL: "https://staging-legal-crazy-castor.explorer.staging-v3.skalenodes.com/api",
          browserURL: "https://staging-legal-crazy-castor.explorer.staging-v3.skalenodes.com"
        }
      },
      {
        network: "europa",
        chainId: 2046399126,
        urls: {
            apiURL: "https://elated-tan-skat.explorer.mainnet.skalenodes.com/api",
            browserURL: "https://elated-tan-skat.explorer.mainnet.skalenodes.com"
        }
      }
    ]
  },
  packager: {
    contracts: ["AutoSwapper", "Gatekeeper"]
  }
};

export default config;
