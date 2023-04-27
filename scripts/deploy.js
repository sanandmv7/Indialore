// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const IndialorePaymentToken = await hre.ethers.getContractFactory(
    "IndialorePaymentToken"
  );

  const indialorePaymentToken = await IndialorePaymentToken.deploy();

  await indialorePaymentToken.deployed();

  console.log(
    `IndialorePaymentToken contract deployed to ${indialorePaymentToken.address}`
  );

  const Marketplace = await hre.ethers.getContractFactory(
    "IndialoreMarketplace"
  );
  const marketplace = await Marketplace.deploy(indialorePaymentToken.address);

  await marketplace.deployed();

  console.log(`Marketplace contract deployed to ${marketplace.address}`);

  // const Escrow = await hre.ethers.getContractFactory(
  //   "Escrow"
  // );

  // const escrow = await Escrow.deploy(indialorePaymentToken.address);

  // await escrow.deployed();

  // console.log(`Escrow contract deployed to ${escrow.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
