import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0x3f586977d228D68FAA51290fbfc7fea1B1985C55"
);

export default instance;
