async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    console.log("Account balance:", (await deployer.getBalance()).toString());

    /* EasyDCA */
    /*
    const EasyDCA = await ethers.getContractFactory("EasyDCA");
    const easyDCA = await EasyDCA.deploy();
    console.log("Easy DCA address:", easyDCA.address);
    */
   
    /* Experiments */
    const DynamicArrays = await ethers.getContractFactory("DynamicArrays");
    const dynamicArrays = await DynamicArrays.deploy();
    console.log("Dynamic Arrays address:", dynamicArrays.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });