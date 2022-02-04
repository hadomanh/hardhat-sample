import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { Contract } from "ethers";
import { parseEther } from "ethers/lib/utils";
import { ethers } from "hardhat";

describe("WBNB", function () {

  let wbnb: Contract
  let owner: SignerWithAddress

  this.beforeEach(async () => {
    await ethers.provider.send("hardhat_reset", []);

    [ owner ] = await ethers.getSigners();

    const WBNB = await ethers.getContractFactory("WBNB");
    wbnb = await WBNB.deploy();
    await wbnb.deployed();

  })

  it("should return total supply", async () => {
    expect(await wbnb.totalSupply()).equal(parseEther('10000'))
  })

  it('should return valid owner', async () => {
    expect(await wbnb.owner()).equal(owner.address)
  })

});
