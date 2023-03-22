const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("Store", function () {
  let store, owner, otherAccount;
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployStore() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const Store = await ethers.getContractFactory("Store");
    const store = await Store.deploy("SampleStore", "TEST");

    return [ store, owner, otherAccount ];
  }

  beforeEach(async function () {
    [store, owner, otherAccount] = await loadFixture(deployStore);
  });

  
  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await store.owner()).to.equal(owner.address);
    });
  });

  describe("List Product For Sale", function () {
    it("Should allow the owner to list products for sale", async function () {
      await store.listProductForSale(owner.address, 1, "Product 1", ethers.utils.parseEther('1'));
      expect(await store.ownerOf(1)).to.equal(owner.address);
    });

    it("Should not allow anyone other than the owner to list products for sale", async function () {
      await expect(store.connect(otherAccount).listProductForSale(otherAccount.address, 1, 'Product 1', ethers.utils.parseEther('1')))
        .to.be.revertedWith('Ownable: caller is not the owner');
    });
  });

  describe("Purchase Products", function () {
    beforeEach(async function () {
      await store.listProductForSale(owner.address, 1, 'Product 1', ethers.utils.parseEther('2'));
    });

    it('Should allow a user to purchase a product', async function () {
      await store.connect(otherAccount).purchaseProduct(1, { value: ethers.utils.parseEther('2') });
      expect(await store.ownerOf(1)).to.equal(otherAccount.address);
    });

    it('Should not allow a user to purchase a product with incorrect payment', async function () {
      await expect(store.connect(otherAccount).purchaseProduct(1, { value: ethers.utils.parseEther('1') }))
        .to.be.revertedWith('price doesn\'t match');
    });
  });
});
