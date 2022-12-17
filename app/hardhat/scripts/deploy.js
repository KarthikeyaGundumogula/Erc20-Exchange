const { ethers }=require("hardhat");

async function main(){
  const tokenFactory=await ethers.getContractFactory("StreaxToken");
  console.log("deploying your token contract...");
  const token=await tokenFactory.deploy();
  await token.deployed();

  console.log("token is ddeployed at ",token.address);
}

main().then().catch(
  e=>{(console.error(e))}
)