import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x67f8CB0e9Db403f0beE32B3d49A77fe5634b27a7"
);

export default instance;
