export const gigMarketplaceABI = [
  {
    "inputs": [
      { "internalType": "address", "name": "_relayer", "type": "address" },
      { "internalType": "address", "name": "_registry", "type": "address" },
      {
        "internalType": "address",
        "name": "_paymentProcessor",
        "type": "address"
      },
      { "internalType": "address", "name": "_craftCoin", "type": "address" }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "gigId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "artisan",
        "type": "address"
      }
    ],
    "name": "ArtisanHired",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "gigId",
        "type": "uint256"
      }
    ],
    "name": "ArtisanMarkCompleted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "gigId",
        "type": "uint256"
      }
    ],
    "name": "ClientConfirmCompleted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "gigId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "artisan",
        "type": "address"
      }
    ],
    "name": "GigApplicationSubmitted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "gigId",
        "type": "uint256"
      }
    ],
    "name": "GigClosed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "gigId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "client",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "rootHash",
        "type": "bytes32"
      }
    ],
    "name": "GigCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "gigId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "newRootHash",
        "type": "bytes32"
      }
    ],
    "name": "GigStateUpdated",
    "type": "event"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_artisan", "type": "address" },
      { "internalType": "bytes32", "name": "_databaseId", "type": "bytes32" }
    ],
    "name": "applyForGigFor",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "", "type": "address" },
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ],
    "name": "artisanAppliedGigs",
    "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "name": "artisanHiredCount",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "", "type": "address" },
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ],
    "name": "clientCreatedGigs",
    "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "name": "clientGigCount",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_client", "type": "address" },
      { "internalType": "bytes32", "name": "_databaseId", "type": "bytes32" }
    ],
    "name": "closeGigFor",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_client", "type": "address" },
      { "internalType": "bytes32", "name": "_databaseId", "type": "bytes32" }
    ],
    "name": "confirmCompleteFor",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "craftCoin",
    "outputs": [
      { "internalType": "contract ICraftCoin", "name": "", "type": "address" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_client", "type": "address" },
      { "internalType": "bytes32", "name": "_rootHash", "type": "bytes32" },
      { "internalType": "bytes32", "name": "_databaseId", "type": "bytes32" },
      { "internalType": "uint256", "name": "_budget", "type": "uint256" }
    ],
    "name": "createGigFor",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_artisan", "type": "address" }
    ],
    "name": "getArtisanAppliedGigs",
    "outputs": [
      { "internalType": "bytes32[]", "name": "", "type": "bytes32[]" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_artisan", "type": "address" }
    ],
    "name": "getArtisanHiredCount",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_client", "type": "address" }
    ],
    "name": "getClientCreatedGigs",
    "outputs": [
      { "internalType": "bytes32[]", "name": "", "type": "bytes32[]" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_client", "type": "address" }
    ],
    "name": "getClientGigCount",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "bytes32", "name": "_databaseId", "type": "bytes32" }
    ],
    "name": "getGigApplicants",
    "outputs": [
      { "internalType": "address[]", "name": "", "type": "address[]" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getGigCount",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "bytes32", "name": "_databaseId", "type": "bytes32" }
    ],
    "name": "getGigInfo",
    "outputs": [
      { "internalType": "address", "name": "client", "type": "address" },
      { "internalType": "address", "name": "hiredArtisan", "type": "address" },
      { "internalType": "uint256", "name": "paymentId", "type": "uint256" },
      { "internalType": "bytes32", "name": "rootHash", "type": "bytes32" },
      { "internalType": "bool", "name": "artisanComplete", "type": "bool" },
      { "internalType": "bool", "name": "isCompleted", "type": "bool" },
      { "internalType": "bool", "name": "isClosed", "type": "bool" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getLatestRootHash",
    "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "bytes32", "name": "_databaseId", "type": "bytes32" }
    ],
    "name": "getRequiredCFT",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "gigCounter",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "name": "gigs",
    "outputs": [
      { "internalType": "address", "name": "client", "type": "address" },
      { "internalType": "address", "name": "hiredArtisan", "type": "address" },
      { "internalType": "uint256", "name": "paymentId", "type": "uint256" },
      { "internalType": "bytes32", "name": "databaseId", "type": "bytes32" },
      { "internalType": "bytes32", "name": "rootHash", "type": "bytes32" },
      { "internalType": "bool", "name": "artisanComplete", "type": "bool" },
      { "internalType": "bool", "name": "isCompleted", "type": "bool" },
      { "internalType": "bool", "name": "isClosed", "type": "bool" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_artisan", "type": "address" },
      { "internalType": "bytes32", "name": "_databaseId", "type": "bytes32" }
    ],
    "name": "hasAppliedForGig",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_client", "type": "address" },
      { "internalType": "bytes32", "name": "_databaseId", "type": "bytes32" },
      { "internalType": "address", "name": "_artisan", "type": "address" }
    ],
    "name": "hireArtisanFor",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }],
    "name": "indexes",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_artisan", "type": "address" },
      { "internalType": "bytes32", "name": "_databaseId", "type": "bytes32" }
    ],
    "name": "markCompleteFor",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "paymentProcessor",
    "outputs": [
      {
        "internalType": "contract IPaymentProcessor",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "registry",
    "outputs": [
      { "internalType": "contract IRegistry", "name": "", "type": "address" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "relayer",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_client", "type": "address" },
      { "internalType": "bytes32", "name": "_databaseId", "type": "bytes32" },
      { "internalType": "bytes32", "name": "_newRootHash", "type": "bytes32" }
    ],
    "name": "updateGigInfoFor",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]