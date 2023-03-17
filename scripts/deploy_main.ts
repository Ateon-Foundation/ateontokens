var common = require('./deploy_common.ts');

async function main() {
  await common.deploy_Erc20Token("AteonToken");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
