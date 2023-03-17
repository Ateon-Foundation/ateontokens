const { ethers } = require("hardhat");

async function deploy_Erc20Token(erc20TokenName: string) {
  // We get the contract to deploy
  const token = await ethers.getContractFactory(erc20TokenName);

  const erc20 = await token.deploy();  
  await erc20.deployed();

  const [owner] = await ethers.getSigners();

  console.log(`${erc20TokenName} deployed to: ${erc20.address}, balance ${await erc20.balanceOf(owner.address)}`);
}

module.exports = {
	  deploy_Erc20Token,
};