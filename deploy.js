const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { abi, evm } = require("./compile");

const provider = new HDWalletProvider(
    "write here your 12 word mnemonic",
    "https://rinkeby.infura.io/v3/unique_conn_id"
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log("Attempting to deploy from account", accounts[0]);
    // console.log(accounts);
    const result = await new web3.eth.Contract(abi)
        .deploy({ data: evm.bytecode.object, arguments: ["Hi there!"] })
        .send({ from: accounts[0], gas: "1000000" });
    console.log("Contract deployed to: ", result.options.address);
    provider.engine.stop();
};

deploy();
