import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  web3 = new Web3(window.ethereum);
} else {
  const provider = new Web3.providers.HttpProvider(process.env.ALCHEMY_API_URL);

  web3 = new Web3(provider);
}

export default web3;
