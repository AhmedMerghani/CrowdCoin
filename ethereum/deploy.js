const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  "canoe guard ensure sentence duck more dose west pair anger cause pet",
  "https://eth-sepolia.g.alchemy.com/v2/tUCUOirXmytmdp664FyHOcCS_ZSQekYB"
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("Attempting to deploy from account ", accounts[0]);

  const fixedGasLimit = 10000000;
  const maxPriorityFeePerGas = web3.utils.toWei("2", "gwei");
  const maxFeePerGas = web3.utils.toWei("50", "gwei");
  const gasPrice = web3.utils.toWei("20", "gwei");

  try {
    const { abi, evm } = compiledFactory;
    if (!abi || !evm || !evm.bytecode || !evm.bytecode.object) {
      throw new Error("ABI or bytecode is missing in the compiled contract.");
    }

    const result = await new web3.eth.Contract(abi)
      .deploy({ data: evm.bytecode.object })
      .send({
        gas: fixedGasLimit,
        gasPrice: gasPrice,
        from: accounts[0],
      });
    console.log("Contract deployed to", result.options.address);
  } catch (error) {
    console.log("Error deploying contract:", error.message);
  }
};

deploy();
