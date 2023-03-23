const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");

describe("Marketplace", function () {
  let marketplace, owner, otherAccount;
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployMarketplace() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const Marketplace = await ethers.getContractFactory("IndialoreMarketplace");
    const marketplace = await Marketplace.deploy();

    return [marketplace, owner, otherAccount];
  }

  beforeEach(async function () {
    [marketplace, owner, otherAccount] = await loadFixture(deployMarketplace);
  });

  it("should allow a seller to register", async function () {
    await marketplace.registerSeller();
    expect(await marketplace.isSeller(owner.address)).to.equal(true);
  });

  it("should only allow one store per seller", async function () {
    await marketplace.registerSeller();
    await marketplace.createStore("My Store");
    await expect(marketplace.createStore("My Second Store")).to.be.revertedWith("Only one store per seller is allowed");
  });

  it("should allow the seller to create a store", async function () {
    await marketplace.registerSeller();
    await marketplace.createStore("My Store");

    const Store = await ethers.getContractFactory("Store");
    const storeAddress = await marketplace.sellerToStore(owner.address);
    const store = await Store.attach(storeAddress);
    expect(await store.symbol()).to.equal("IL0");
  });
});
