# Santa Fortune's $NEWYEARPUMP — Crypto Website & Smart Contract

A festive, blockchain-powered crypto wallet and token purchase platform built for the holiday season. This project includes an HTML/CSS/JS frontend with MetaMask integration and Solidity smart contracts for on-chain token purchases.

## 📁 Project Structure

```
solana-app/
├── sol.html                 # Main landing page with hero, features, wallet stats, testimonials
├── sol.css                  # Complete styling: animations, responsive design, Santa/snowfall effects
├── sol.js                   # Site interactivity: button effects, notifications, easter eggs
├── script.js                # Blockchain buy logic: MetaMask connect, buyStarterPack function
├── buy.html                 # Buy packages overview page
├── get-started.html         # Getting started guide
├── starter-pack.html        # Starter Pack purchase page (0.05 ETH) with MetaMask flow
├── holiday-bundle.html      # Holiday Bundle purchase page (0.1 ETH)
├── santas-fortune.html      # Santa's Fortune purchase page (0.5 ETH)
├── onepager.html            # Printable one-pager / whitepaper (PAGE 1-3)
├── contracts/
│   └── SantaFortunes.sol    # Solidity contract: buyStarterPack() payable function
└── react/
    └── StarterPackPurchase.jsx  # React component example (ethers.js integration)
```

## 🎄 Features

### Frontend
- ✨ **Animated Snowfall** — Continuous background snow effect
- 🎅 **Santa Sleigh Animation** — Bouncing reindeer and Santa moving across screen
- 🚀 **Flying Santa** — Aerial swooping animation
- 📱 **Responsive Design** — Mobile-first, works on all devices
- 🎨 **Modern Crypto UI** — Red/green/gold Christmas theme with glass-morphism
- 📊 **Feature Cards** — 6 highlight cards with hover animations
- 💳 **Wallet Stats** — 1.2M+ users, $500M+ TVL, 99.9% uptime, 24/7 support
- 📝 **One-Pager** — Printable whitepaper (3-page PDF format)
- 🛒 **Buy Packages** — Starter Pack ($10/0.05 ETH), Holiday Bundle ($100/0.1 ETH), Santa's Fortune ($500/0.5 ETH)

### Blockchain Integration
- 🔗 **MetaMask Integration** — Connect wallet, check balance, send transactions
- ⛓️ **Solidity Smart Contract** — `buyStarterPack()` payable function
- 📦 **ethers.js v5** — Web3 library for blockchain interaction
- 💰 **Transaction Handling** — Pending, success, and error states with feedback
- ✅ **Event Emissions** — `StarterPackPurchased` event for purchase tracking

## 🚀 Getting Started

### Prerequisites
- Node.js (for local testing, optional)
- MetaMask browser extension (for blockchain purchases)
- Solidity compiler (if deploying contract)

### Installation

1. **Clone or download the project**
   ```bash
   cd task-management/solana-app
   ```

2. **Open in browser (no build required)**
   ```bash
   # Simply open sol.html in your web browser
   # Or use a local server:
   python -m http.server 8000
   # Then visit: http://localhost:8000/sol.html
   ```

3. **Deploy Solidity Contract** (optional)
   - Use Remix IDE: https://remix.ethereum.org/
   - Copy contents of `contracts/SantaFortunes.sol`
   - Compile and deploy to Ethereum testnet (Sepolia) or mainnet
   - Copy deployed contract address

4. **Update Contract Address**
   - Edit `script.js` line 2:
     ```javascript
     const CONTRACT_ADDRESS = "0xYOUR_DEPLOYED_CONTRACT_ADDRESS";
     ```

## 📖 Page Guide

### `sol.html` — Main Landing Page
- Hero section with bouncing Christmas emojis
- 6 feature cards (Lightning Fast, Security, Low Fees, etc.)
- Wallet stats section
- Wallet demo card
- 3 pricing packages (Starter, Holiday, Fortune)
- Roadmap section (Q4 2026 - Q3 2026)
- Testimonials
- Newsletter signup
- Footer with links

### `buy.html` — Buy Overview
- Display of 3 packages with prices
- Links to individual product pages

### `starter-pack.html` — Purchase Page
- **Price:** 0.05 ETH (or $10 equivalent)
- **Tokens:** 1,000 NEWYEARPUMP
- **Features:**
  - Instant blockchain transfer
  - Community access
  - Rewards eligibility
- **Buy Button:** Connects MetaMask → sends transaction → shows confirmation
- **Status Display:** Wallet address, transaction hash, success/error messages

### `holiday-bundle.html` & `santas-fortune.html`
- Similar structure to starter-pack
- Different prices (0.1 ETH / 0.5 ETH)
- Different token amounts (15,000 / 100,000)

### `onepager.html` — Whitepaper
- **PAGE 1:** Executive Summary, Narrative Foundation, Timing
- **PAGE 2:** Ecosystem Overview, Features, Roadmap (4 phases)
- **PAGE 3:** Brand Identity, Marketing, Why It Stands Out
- Printable via browser print dialog (saves as PDF)

## ⚙️ Configuration

### Edit Token Name (if rebranding)
Search and replace across all files:
- Find: `$NEWYEARPUMP` → Replace with your token name
- Find: `NEWYEARPUMP` → Replace with token symbol

### Change Prices
- **starter-pack.html:** Line with `0.05 ETH`
- **holiday-bundle.html:** Line with `0.1 ETH`
- **santas-fortune.html:** Line with `0.5 ETH`

Update in `script.js` if creating new buy pages:
```javascript
ethers.utils.parseEther("0.05") // Starter Pack
ethers.utils.parseEther("0.1")  // Holiday Bundle
ethers.utils.parseEther("0.5")  // Fortune
```

### Customize Colors
Edit `sol.css` CSS variables (top of file):
```css
--primary-red: #C41E3A;
--primary-green: #165B33;
--gold: #FFD700;
--dark: #0F1B2E;
```

## 🔗 Blockchain Deployment

### Option 1: Ethereum Mainnet
1. Visit Remix: https://remix.ethereum.org/
2. Paste `contracts/SantaFortunes.sol`
3. Compile (Solidity 0.8.0+)
4. Deploy with MetaMask (mainnet)
5. Copy contract address

### Option 2: Testnet (Recommended First)
1. Switch MetaMask to Sepolia or Goerli testnet
2. Get test ETH from faucet (e.g., https://sepoliafaucet.com/)
3. Deploy on testnet
4. Test purchases with test ETH

### Example Contract Deployment Code (Hardhat)
```javascript
const SantaFortunes = await ethers.getContractFactory("SantaFortunes");
const contract = await SantaFortunes.deploy();
console.log("Deployed to:", contract.address);
```

## 📱 Responsive Design

All pages are optimized for:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (< 768px)

CSS media queries handle layout changes automatically.

## 🎭 Animation Effects

- **Snowfall:** Continuous falling snow (15 particles)
- **Santa Sleigh:** Horizontal slide across screen every 15 seconds
- **Flying Santa:** Arc motion from top-left to top-right
- **Bouncing Emojis:** Christmas trees in hero section
- **Floating Gift Box:** Vertical bounce animation
- **Swinging Ornaments:** 3 ornaments with different swing patterns
- **Button Ripple:** Click effect on all CTA buttons

## 🛡️ Security Considerations

1. **Contract Address:** Always verify the deployed address before linking
2. **MetaMask Validation:** Check `window.ethereum` before transactions
3. **Error Handling:** Graceful fallback if MetaMask not installed
4. **Transaction Limits:** Set reasonable gas limits for user safety
5. **Frontend Validation:** Validate wallet addresses and transaction amounts

## 📦 Dependencies

### External CDN Links
- **ethers.js v5:** `https://cdn.jsdelivr.net/npm/ethers@5.7.2/dist/ethers.min.js`
- **axios:** (optional, included in sol.html but not used)

### No Build Required
This is a standalone HTML/CSS/JS project with no npm dependencies for the frontend.

## 🧪 Testing

### Test Checklist
- [ ] Open `sol.html` in browser → all animations work
- [ ] Click "Get Started" button → links to `get-started.html`
- [ ] Click "Buy Now" buttons → links to correct product page
- [ ] On `starter-pack.html`, click "Buy Now" → MetaMask popup appears
- [ ] Connect wallet → address displays
- [ ] Complete transaction → success message shows
- [ ] Check one-pager → print to PDF works
- [ ] Test mobile responsiveness (DevTools)

### MetaMask Test Flow
1. Install MetaMask extension
2. Create test account or import test wallet
3. Switch to Sepolia testnet
4. Get test ETH from faucet
5. Visit `starter-pack.html`
6. Click "Buy Now" → approve in MetaMask
7. Wait for confirmation

## 📚 React Component Usage

If using React (e.g., Next.js):
```jsx
import StarterPackPurchase from './react/StarterPackPurchase';

export default function App() {
  return <StarterPackPurchase />;
}
```

Requires `ethers.js` in dependencies:
```bash
npm install ethers
```

## 🎨 Customization Tips

### Change Theme Colors
Edit `sol.css` lines 5-11:
```css
:root {
  --primary-red: #YOUR_RED;
  --primary-green: #YOUR_GREEN;
  --gold: #YOUR_GOLD;
  /* ... */
}
```

### Update Content
- **Hero Title:** `sol.html` line 54
- **Features:** `sol.html` lines 77-110
- **Pricing:** `sol.html` lines 168-210
- **Testimonials:** `sol.html` lines 241-256

### Add More Animations
Edit `sol.css` and add `@keyframes` blocks. Reference in element styles.

## 📄 License

This project is part of the Santa Fortune's initiative. Use freely for learning and development.

## 🤝 Support

For questions or issues:
- Check MetaMask docs: https://docs.metamask.io/
- Solidity docs: https://docs.soliditylang.org/
- ethers.js docs: https://docs.ethers.org/v5/

---

**Happy Holidays! 🎄 May your crypto pump like Santa's sleigh! 🎅**
