module.exports = async ({ ethers, deployments, hardhatArguments } : any) => {
    // const network = hardhatArguments.network ? hardhatArguments.network : 'development';
    const { deploy } = deployments;
    const [ owner ] = await ethers.getSigners();

    await deploy('WBNB', {
        from: owner.address,
        log: true,
        args: []
    });

};
