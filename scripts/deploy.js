require('dotenv').config()

const CONTRACT_FILE_NAME = process.env.CONTRACT_FILE_NAME

async function main() {
    const MyNFT = await ethers.getContractFactory(CONTRACT_FILE_NAME)

    const myNFT = await MyNFT.deploy()
    console.log("Contract deployed to address:", myNFT.address)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
