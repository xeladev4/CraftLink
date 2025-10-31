# 🎨 CraftLink

> **Empowering Artisans, Connecting Clients, Building Trust**

CraftLink is a decentralized marketplace that bridges the gap between skilled artisans and clients worldwide. Built on blockchain technology, it provides secure escrow payments, gasless transactions, and cryptographic verification to ensure trust, transparency, and fair compensation for creative work.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Solidity](https://img.shields.io/badge/Solidity-0.8.20-blue)](https://soliditylang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15.0-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)

---
Hedera Certificate Link : https://drive.google.com/file/d/1Ki2Q-0h-M8qoAsL5REH_kIM5AaD6YhTc/view?usp=drivesdk
Pitch Deck Link: https://gamma.app/docs/CraftLink-wrpqpq1ykrbe7yo?mode=doc
## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Smart Contracts](#-smart-contracts)
- [How It Works](#-how-it-works)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

CraftLink solves critical problems in the freelance and gig economy:

- **Trust Issues**: Escrow smart contracts hold funds until work is verified
- **High Fees**: Gasless transactions eliminate blockchain barriers for users
- **Payment Security**: Automated payment release with platform fee distribution
- **Reputation System**: On-chain reviews build verifiable professional history
- **Data Integrity**: Merkle tree verification ensures tamper-proof records

### **Problem Statement**

Traditional freelance platforms charge high fees (15-20%), offer limited payment security, and lack transparency. Artisans in developing regions face additional barriers like payment processing fees and currency conversion issues.

### **Our Solution**

A blockchain-based marketplace with:
- **10% platform fee** (vs 15-20% on traditional platforms)
- **Gasless transactions** via meta-transaction relayer
- **Escrow protection** with smart contract automation
- **Cryptographic verification** using Merkle trees
- **Token economics** to prevent spam and reward participation

---

## ✨ Key Features

### **For Artisans**
- 🎯 **Browse & Apply** - Find gigs matching your skills
- 💰 **Secure Payments** - Funds held in escrow until completion
- 🏆 **Build Reputation** - On-chain reviews and portfolio
- 🎁 **Earn Tokens** - Mint 50 CFT every 30 days
- 💬 **Direct Messaging** - Communicate with clients

### **For Clients**
- 📝 **Post Jobs** - Create detailed gig listings
- 👥 **Review Applicants** - Browse artisan profiles and portfolios
- ✅ **Milestone Tracking** - Mark completion and release funds
- ⭐ **Leave Reviews** - Rate artisan performance
- 🔒 **Refund Protection** - Get funds back if gig is cancelled

### **Platform Features**
- 🚀 **Gasless Transactions** - No gas fees for users
- 🔐 **Data Verification** - Merkle tree proofs ensure integrity
- 🌐 **IPFS Storage** - Decentralized media hosting
- 🔗 **Multi-Wallet Support** - MetaMask, Coinbase, WalletConnect, and more
- 📱 **Responsive Design** - Works on desktop and mobile

---

## 🏗️ Architecture

CraftLink uses a **hybrid architecture** combining on-chain and off-chain components:

```
┌─────────────────────────────────────────────────────────────┐
│                         Frontend                             │
│              (Next.js + React + Thirdweb)                   │
└─────────────┬───────────────────────────┬───────────────────┘
              │                           │
              ▼                           ▼
    ┌─────────────────┐         ┌─────────────────┐
    │     Backend     │         │     Relayer     │
    │  (Express API)  │         │ (Meta-Tx Server)│
    └────────┬────────┘         └────────┬────────┘
             │                           │
             ▼                           ▼
    ┌─────────────────┐         ┌─────────────────┐
    │    MongoDB      │         │  Smart Contracts│
    │  (Off-chain DB) │         │ (Hedera Testnet)│
    └─────────────────┘         └─────────────────┘
             │                           │
             └───────────┬───────────────┘
                         ▼
                ┌─────────────────┐
                │  IPFS Storage   │
                │  (Media Files)  │
                └─────────────────┘
```

### **Data Flow**

1. **User Action** → Frontend captures user input
2. **Sign Message** → User signs transaction with wallet
3. **Relayer Execution** → Relayer submits transaction on-chain
4. **Blockchain Update** → Smart contract state changes
5. **Backend Sync** → Backend verifies and stores detailed data
6. **Merkle Verification** → Cryptographic proof ensures data integrity

---

## 🛠️ Tech Stack

### **Blockchain Layer**
| Component | Technology | Purpose |
|-----------|-----------|---------|
| Smart Contracts | Solidity 0.8.20 | Core business logic |
| Development Framework | Foundry | Testing & deployment |
| Network | Hedera Testnet | Testnet deployment |
| Token Standards | ERC-20 | USDT mock & CraftCoin |

### **Backend Services**
| Component | Technology | Purpose |
|-----------|-----------|---------|
| API Server | Express + TypeScript | RESTful API |
| Database | MongoDB + Mongoose | Off-chain data storage |
| Relayer | Express + Ethers.js | Gasless transactions |
| Verification | MerkleTree.js | Data integrity proofs |

### **Frontend Application**
| Component | Technology | Purpose |
|-----------|-----------|---------|
| Framework | Next.js 15 | React framework |
| Styling | Tailwind CSS | Responsive design |
| State Management | Zustand | Client state |
| Wallet Connection | Thirdweb | Multi-wallet support |
| Animations | Framer Motion | UI animations |
| Blockchain Interaction | Ethers.js + Viem | Smart contract calls |

### **Infrastructure**
| Component | Technology | Purpose |
|-----------|-----------|---------|
| Storage | IPFS + Cloudinary | Decentralized media |
| Hosting | Vercel | Frontend & API hosting |
| Version Control | Git + GitHub | Source control |

---

## 📁 Project Structure

```
CraftLink/
├── smart_contract/          # Solidity smart contracts
│   ├── src/
│   │   ├── Registry.sol           # User registration
│   │   ├── GigMarketplace.sol     # Gig management
│   │   ├── PaymentProcessor.sol   # Escrow system
│   │   ├── Token.sol              # Mock USDT
│   │   ├── CraftCoin.sol          # Platform token
│   │   ├── ReviewSystem.sol       # Rating system
│   │   ├── ChatSystem.sol         # Message hashes
│   │   └── interfaces/            # Contract interfaces
│   ├── script/                    # Deployment scripts
│   ├── test/                      # Contract tests
│   └── foundry.toml               # Foundry config
│
├── relayer/                 # Meta-transaction relayer
│   ├── src/
│   │   ├── server.ts              # Main server
│   │   ├── abi/                   # Contract ABIs
│   │   └── *.ts                   # Utility functions
│   └── package.json
│
├── backend/                 # Express API server
│   ├── src/
│   │   ├── index.ts               # Entry point
│   │   ├── models/                # MongoDB schemas
│   │   ├── controllers/           # Route handlers
│   │   ├── routes/                # API routes
│   │   ├── utils/                 # Helper functions
│   │   └── types/                 # TypeScript types
│   └── package.json
│
├── frontend/                # Next.js application
│   ├── app/                       # App router pages
│   │   ├── page.tsx               # Landing page
│   │   ├── authenticate/          # Wallet connection
│   │   ├── role/                  # User onboarding
│   │   ├── marketplace/           # Browse gigs
│   │   ├── manage-jobs/           # Job management
│   │   ├── profile/               # User profiles
│   │   └── messages/              # Chat interface
│   ├── components/                # React components
│   ├── hooks/                     # Custom hooks
│   ├── utils/                     # Helper functions
│   ├── constants/                 # App constants
│   └── package.json
│
└── README.md                # This file
```

---

## 🚀 Getting Started

### **Prerequisites**

- **Node.js** v18+ and npm/yarn
- **MongoDB** (local or Atlas)
- **Git**
- **Foundry** (for smart contracts)
- **MetaMask** or compatible Web3 wallet

### **Installation**

#### **1. Clone the Repository**

```bash
git clone https://github.com/xeladev4/CraftLink/
cd CraftLink
```

#### **2. Smart Contracts Setup**

```bash
cd smart_contract

# Install Foundry (if not already installed)
curl -L https://foundry.paradigm.xyz | bash
foundryup

# Install dependencies
forge install

# Compile contracts
forge build

# Run tests
forge test

# Deploy to testnet (configure .env first)
forge script script/Deploy.s.sol --rpc-url $RPC_URL --broadcast
```

**Environment Variables** (create `.env`):
```env
RPC_URL=https://testnet.hashio.io/api
PRIVATE_KEY=your_private_key_here
ETHERSCAN_API_KEY=your_block_explorer_api_key
```

#### **3. Backend Setup**

```bash
cd ../backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Start development server
npm run dev
```

**Environment Variables** (`.env`):
```env
PORT=3001
MONGODB_URI=mongodb://localhost:27017/craftlink
NODE_ENV=development
```

#### **4. Relayer Setup**

```bash
cd ../relayer

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Encrypt your private key
npm run encrypt

# Start relayer
npm run dev
```

**Environment Variables** (`.env`):
```env
PORT=3005
RPC_URL=https://testnet.hashio.io/api
PRIVATE_KEY_PASSWORD=your_secure_password
ENCRYPTED_KEY_JSON={"encrypted":"..."}
TOKEN_ADDRESS=0xd1fb7489D8689c45082Ea68dC025247d4143f15E
REGISTRY_ADDRESS=0x9c78Bbfc9a101f0C467560BD93401B72cC4152C1
REVIEW_SYSTEM_ADDRESS=0x6182AfDA6817a0a78a5e87Da57DD19F05bfCa9cf
GIG_MARKETPLACE_ADDRESS=0x78b06bfd164Ae7dee46E606da3e4d2Cb59997cD2
PAYMENT_PROCESSOR_ADDRESS=0x6976762d8dF143771eB8a2a930061A57806b6fd4
CRAFT_COIN_ADDRESS=0x77A5a2b9DCbe2B3e14057F6774D050C5f0f66336
```

#### **5. Frontend Setup**

```bash
cd ../frontend

# Install dependencies
npm install

# Create .env.local file
cp .env.example .env.local

# Start development server
npm run dev
```

**Environment Variables** (`.env.local`):
```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:3001
NEXT_PUBLIC_RELAYER_URL=http://localhost:3005
NEXT_PUBLIC_RPC_URL=https://testnet.hashio.io/api
NEXT_PUBLIC_CHAIN_ID=296
THIRDWEB_CLIENT_ID=your_thirdweb_client_id
THIRDWEB_SECRET_KEY=your_thirdweb_secret_key
```

#### **6. Access the Application**

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001
- **Relayer**: http://localhost:3005

---

## 📜 Smart Contracts

### **Deployed Contracts (Hedera Testnet)**

| Contract | Address | Purpose |
|----------|---------|---------|
| Registry | `0x9c78Bbfc9a101f0C467560BD93401B72cC4152C1` | User registration |
| Token (USDT) | `0xd1fb7489D8689c45082Ea68dC025247d4143f15E` | Payment token |
| CraftCoin (CFT) | `0x77A5a2b9DCbe2B3e14057F6774D050C5f0f66336` | Platform token |
| PaymentProcessor | `0x6976762d8dF143771eB8a2a930061A57806b6fd4` | Escrow system |
| GigMarketplace | `0x78b06bfd164Ae7dee46E606da3e4d2Cb59997cD2` | Gig management |
| ReviewSystem | `0x6182AfDA6817a0a78a5e87Da57DD19F05bfCa9cf` | Rating system |
| ChatSystem | `0x580C07f608C12563440086FF025E4c7aC7F2BcA7` | Message verification |

**Block Explorer**: [HashScan Testnet](https://hashscan.io/testnet)

### **Contract Architecture**

```
Registry (User Management)
    ↓
GigMarketplace (Core Logic) ←→ PaymentProcessor (Escrow)
    ↓                               ↓
ReviewSystem                    Token (USDT)
    ↓
ChatSystem ←→ CraftCoin (CFT)
```

### **Key Functions**

#### **Registry**
- `registerAsArtisanFor(address, ipfsUrl)` - Register artisan profile
- `registerAsClientFor(address, ipfsUrl)` - Register client profile
- `isArtisanVerified(address)` - Check verification status

#### **GigMarketplace**
- `createGigFor(client, rootHash, databaseId, budget)` - Post new gig
- `applyForGigFor(artisan, databaseId)` - Apply to gig (burns CFT)
- `hireArtisanFor(client, databaseId, artisan)` - Hire applicant
- `markCompleteFor(artisan, databaseId)` - Mark work done
- `confirmCompleteFor(client, databaseId)` - Confirm completion

#### **PaymentProcessor**
- `createPaymentFor(client, amount)` - Lock funds in escrow
- `releaseArtisanFundsFor(artisan, paymentId)` - Release payment
- `refundClientFunds(paymentId)` - Refund cancelled gig

---

## 🔄 How It Works

### **User Journey: Artisan**

1. **Connect Wallet** → Use MetaMask or other Web3 wallet
2. **Register Profile** → Fill out skills, experience, portfolio (gasless)
3. **Claim Tokens** → Get 1000 USDT from faucet (testnet only)
4. **Mint CFT** → Receive 50 CraftCoin tokens
5. **Browse Gigs** → Filter by skills, budget, location
6. **Apply to Gig** → Burns 2-10 CFT based on budget (gasless)
7. **Get Hired** → Client selects you from applicants
8. **Complete Work** → Mark gig as complete (gasless)
9. **Receive Payment** → Funds released after client confirmation
10. **Get Reviewed** → Build on-chain reputation

### **User Journey: Client**

1. **Connect Wallet** → Use MetaMask or other Web3 wallet
2. **Register Profile** → Create client profile (gasless)
3. **Claim Tokens** → Get 1000 USDT from faucet (testnet only)
4. **Post Gig** → Create detailed job listing (gasless)
5. **Lock Funds** → USDT held in escrow smart contract
6. **Review Applicants** → Browse artisan profiles
7. **Hire Artisan** → Select best candidate (gasless)
8. **Track Progress** → Communicate via messaging
9. **Confirm Completion** → Release payment to artisan (gasless)
10. **Leave Review** → Rate artisan performance

### **Gasless Transaction Flow**

```
1. User Action (Frontend)
   ↓
2. Sign Message (Wallet)
   ↓
3. Send to Relayer (API Call)
   ↓
4. Verify Signature (Relayer)
   ↓
5. Execute Transaction (Relayer pays gas)
   ↓
6. Update State (Smart Contract)
   ↓
7. Sync Database (Backend)
   ↓
8. Update UI (Frontend)
```

### **Merkle Tree Verification**

CraftLink uses Merkle trees to ensure data integrity:

1. **Create Gig** → Backend generates Merkle tree of all gigs
2. **Generate Proof** → Specific proof for new gig
3. **Store Root** → Root hash stored on-chain
4. **Store Proof** → Proof stored in MongoDB
5. **Verify Later** → Anyone can verify data hasn't been tampered with

---

## 🔐 Environment Variables

### **Smart Contracts**
```env
RPC_URL=https://testnet.hashio.io/api    # Hedera Testnet RPC endpoint
PRIVATE_KEY=                              # Deployer private key
ETHERSCAN_API_KEY=                        # For contract verification (if supported)
```

### **Backend**
```env
PORT=3001
MONGODB_URI=                # MongoDB connection string
NODE_ENV=development
```

### **Relayer**
```env
PORT=3005
RPC_URL=https://testnet.hashio.io/api    # Hedera Testnet RPC endpoint
PRIVATE_KEY_PASSWORD=                     # Password for encrypted key
ENCRYPTED_KEY_JSON=                       # Encrypted relayer private key
TOKEN_ADDRESS=0xd1fb7489D8689c45082Ea68dC025247d4143f15E
REGISTRY_ADDRESS=0x9c78Bbfc9a101f0C467560BD93401B72cC4152C1
REVIEW_SYSTEM_ADDRESS=0x6182AfDA6817a0a78a5e87Da57DD19F05bfCa9cf
GIG_MARKETPLACE_ADDRESS=0x78b06bfd164Ae7dee46E606da3e4d2Cb59997cD2
PAYMENT_PROCESSOR_ADDRESS=0x6976762d8dF143771eB8a2a930061A57806b6fd4
CRAFT_COIN_ADDRESS=0x77A5a2b9DCbe2B3e14057F6774D050C5f0f66336
```

### **Frontend**
```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:3001    # Backend API URL
NEXT_PUBLIC_RELAYER_URL=http://localhost:3005    # Relayer API URL
NEXT_PUBLIC_RPC_URL=https://testnet.hashio.io/api    # Hedera Testnet RPC endpoint
NEXT_PUBLIC_CHAIN_ID=296                          # Network chain ID (296 for Hedera Testnet)
THIRDWEB_CLIENT_ID=                               # Thirdweb client ID
THIRDWEB_SECRET_KEY=                              # Thirdweb secret key
```

---

## 🌐 Deployment

### **Smart Contracts**

```bash
cd smart_contract

# Deploy to Hedera Testnet
forge script script/Deploy.s.sol \
  --rpc-url https://testnet.hashio.io/api \
  --broadcast \
  --verify

# Verify contracts on HashScan
# Note: Contract verification on Hedera uses HashScan
# Visit https://hashscan.io/testnet to view deployed contracts
```

### **Backend & Relayer**

Both are configured for **Vercel** deployment:

```bash
# Deploy backend
cd backend
vercel --prod

# Deploy relayer
cd relayer
vercel --prod
```

**Note**: Update environment variables in Vercel dashboard.

### **Frontend**

```bash
cd frontend

# Build production
npm run build

# Deploy to Vercel
vercel --prod
```

### **MongoDB**

Use **MongoDB Atlas** for production:
1. Create cluster at https://cloud.mongodb.com
2. Whitelist Vercel IPs
3. Update `MONGODB_URI` in environment variables

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### **Development Guidelines**

- Follow existing code style and conventions
- Write tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR
- Use meaningful commit messages

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👥 Team

**CraftLink** is built by passionate developers committed to empowering the global artisan community.

- **Author**: Ekarika Nsemeke
- **GitHub**: [github.com/xeladev4](https://github.com/xeladev4)

---

## 🔗 Links

- **Live Demo**: [https://craftlink-coral.vercel.app](https://craftlink-coral.vercel.app)
- **Documentation**: [Coming Soon]
- **Twitter**: [Coming Soon]
- **Discord**: [Coming Soon]

---

## 🙏 Acknowledgments

- **OpenZeppelin** - Secure smart contract libraries
- **Foundry** - Fast Solidity development framework
- **Thirdweb** - Wallet connection infrastructure
- **Vercel** - Hosting platform
- **Hedera** - Enterprise-grade distributed ledger network

---

## 📞 Support

For questions or support:
- Open an issue on GitHub
- Email: [Coming Soon]
- Join our Discord community

---

<div align="center">

**Built with ❤️ for artisans worldwide**

⭐ Star us on GitHub if you find this project useful!

</div>
