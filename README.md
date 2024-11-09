# CrowdCoin - Decentralized Crowdfunding Platform

Welcome to **CrowdCoin**, a decentralized crowdfunding platform built on the Ethereum blockchain. This project allows individuals and organizations to create campaigns, raise funds, and manage contributions transparently and securely using blockchain technology.

---

## 🌐 Live Demo

[Insert link to live demo if available]

## 🚀 Key Features

- **Campaign Creation**: Start campaigns with a funding goal and manage requests for funds.
- **Decentralized Approval System**: Contributors vote on requests to ensure funds are spent responsibly.
- **Contribution Tracking**: Transparent and immutable tracking of every contribution on the blockchain.

## 📸 Screenshots

Include screenshots or GIFs of the main screens like campaign creation, request approval, and contribution process to give users a visual overview.

## 🛠️ Tech Stack

- **Frontend**: `React`, `Next.js`, `Material-UI` for a responsive, user-friendly interface.
- **Smart Contracts**: `Solidity` for secure, decentralized functionality.
- **Blockchain Integration**: `Web3.js` for interacting with the Ethereum blockchain.
- **Development Frameworks**: `Hardhat`/`Truffle` for contract development and deployment.

## 📖 How It Works

1. **Create a Campaign**: Users create a campaign by specifying the minimum contribution and funding goal.
2. **Contribute to Campaigns**: Contributors donate to campaigns and become eligible to vote on requests.
3. **Request Approval Process**: Campaign creators submit requests to withdraw funds. Contributors vote to approve or reject each request.
4. **Funds Management**: Once a request receives sufficient votes, funds are released to the intended recipient.

## 📦 Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/AhmedMerghani/CrowdCoin.git
   cd CrowdCoin
   ```

2. **Install Dependencies**:

```bash
npm install
```

3. **Create a `.env.local` file for environment variables**:
   Add the following environment variables to a `.env.local` file in the root directory to securely store your sensitive data.

```bash
MNEMONIC="your mnemonic phrase here" ALCHEMY_API_URL="https://eth-sepolia.g.alchemy.com/v2/your-alchemy-api-key"
```

4. **Compile and Deploy Smart Contracts**:
   Configure your deployment script to use `process.env.MNEMONIC` and `process.env.ALCHEMY_API_URL`, then run:

```bash
npx hardhat run scripts/deploy.js --network your_network
```

5. **Run the Development Server**:

```bash
npm run dev
```

6. **Open the App**:

Visit `http://localhost:3000` to see the app in action.

## 🔑 Environment Variables

Create a `.env.local` file in the project root and add these values:

```bash
MNEMONIC="your mnemonic phrase here" ALCHEMY_API_URL="https://eth-sepolia.g.alchemy.com/v2/your-alchemy-api-key"
```

The `.env.local` file should be added to `.gitignore` to keep sensitive information private.

## 🧪 Testing

To test the smart contracts, run:

```bash
npx hardhat test
```

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## 📜 License

This project is licensed under the `MIT License`.

## 🙏 Acknowledgments

Ethereum for decentralized infrastructure
`Material-UI` for UI components
`Web3.js` for blockchain interaction
