import { ethers } from "ethers";
const RPC_URL = "https://base-sepolia.g.alchemy.com/v2/7YcyjUTTMHZ7Ff_gdbynvaCPgRB6kL0Q";
// read only provider pointing to sepolia. It allows read only access to the sepolia blockchain
export const readOnlyProvider = new ethers.JsonRpcProvider(RPC_URL);
// read/write provider, that allows you to read data and also sign transaction on whatever chain it's pointing to
export const getProvider = (provider) => new ethers.BrowserProvider(provider);
//# sourceMappingURL=providers.js.map