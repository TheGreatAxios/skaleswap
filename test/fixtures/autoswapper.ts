import { ethers } from "hardhat";

export async function deployAutoSwapper() {

  const [deployer] = await ethers.getSigners();

  const factory = await ethers.getContractFactory("AutoSwapper");

  const contract = await factory.deploy();

  return { contract, deployer };
}
