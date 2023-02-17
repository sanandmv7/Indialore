const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("Store", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployStore() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const Store = await ethers.getContractFactory("Store");
    const store = await Store.deploy("SampleStore", "TEST");

    return { store, owner, otherAccount };
  }

  
  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      const { store, owner } = await loadFixture(deployStore);

      expect(await store.owner()).to.equal(owner.address);
    });
  });
});
