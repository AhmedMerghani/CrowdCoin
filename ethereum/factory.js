import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0xe654e1a27c5091fe1D708B4c0ac41cc8a1Db2a93"
);

export default instance;
