import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { Contract } from "ethers";
import { parseEther } from "ethers/lib/utils";
import { ethers } from "hardhat";

describe("WBNB", function () {
  let wbnb: Contract;
  let owner: SignerWithAddress;

  this.beforeEach(async () => {
    await ethers.provider.send("hardhat_reset", []);

    [owner] = await ethers.getSigners();

    const WBNB = await ethers.getContractFactory("WBNB");
    wbnb = await WBNB.deploy(parseEther("1000000"));
    await wbnb.deployed();

    await wbnb.mint(owner.address, parseEther("1000"));
  });

  it("should return total supply", async () => {
    expect(await wbnb.totalSupply()).equal(parseEther("1000"));
    expect(await wbnb.cap()).equal(parseEther("1000000"));
  });
});
