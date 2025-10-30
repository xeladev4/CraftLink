import { ethers } from "ethers";
import { gigMarketplaceABI } from "./abi/gigMarketplaceABI.js";
const GIG_MARKET_PLACE_ADDRESS = "0x664EaD8be84e632652dD14d391416f2634E50f68";
export const getGigContract = (providerOrSigner) => new ethers.Contract(GIG_MARKET_PLACE_ADDRESS, gigMarketplaceABI, providerOrSigner);
//# sourceMappingURL=contracts.js.map