# ATEON Hardhat Project

# to compile
npx hardhat compile

# to deploy codes to mainnet
npx hardhat run scripts/deploy_main.ts --network matic
npx hardhat run scripts/deploy_sub.ts --network matic

# to deploy codes to testnet (mumbai)
npx hardhat run scripts/deploy_main.ts --network mumbai
npx hardhat run scripts/deploy_sub.ts --network mumbai

# to verify code on polyscan
npx hardhat verify CONTRACT_ADDR --network matic

npx hardhat verify CONTRACT_ADDR --network mumbai
