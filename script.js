// Santa Fortune's Starter Pack contract details
// TODO: Replace with your actual deployed contract address
const CONTRACT_ADDRESS = "0xREPLACE_WITH_YOUR_CONTRACT_ADDRESS";

// Attach buyStarterPack to the Buy Now button click event
document.addEventListener('DOMContentLoaded', function() {
  const buyBtn = document.getElementById('buyButton');
  if (buyBtn) {
    buyBtn.addEventListener('click', buyStarterPack);
  }
});

// Create a connectWallet function.
// Display connected wallet address on the page.
// Handle user rejection and MetaMask not installed errors.
async function connectWallet() {
  if (!window.ethereum) {
    const txStatus = document.getElementById('txStatus');
    if (txStatus) {
      txStatus.textContent = 'Error: MetaMask not installed. Please install it to continue.';
      txStatus.style.color = '#ff6b6b';
    }
    return null;
  }

  try {
    const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const walletAddrSpan = document.getElementById('walletAddr');
    if (walletAddrSpan) {
      walletAddrSpan.textContent = account.substring(0, 6) + '...' + account.substring(account.length - 4);
    }
    return account;
  } catch (err) {
    const txStatus = document.getElementById('txStatus');
    if (txStatus) {
      txStatus.textContent = 'Error: Wallet connection rejected.';
      txStatus.style.color = '#ff6b6b';
    }
    console.error('Wallet connection error:', err);
    return null;
  }
}

// Create a buyStarterPack function for Santa Fortune's.
// Behavior:
// 1. Check if MetaMask is installed
// 2. Request wallet connection
// 3. Use ethers.js to send 0.05 ETH to the contract
// 4. Show "Processing", "Success", or "Error" messages
// 5. Prevent double clicking while transaction is pending
async function buyStarterPack() {
  if (!window.ethereum) {
    alert('Please install MetaMask to purchase.');
    return;
  }

  const buyBtn = document.getElementById('buyButton');
  const txStatus = document.getElementById('txStatus');

  // Prevent double-click
  if (buyBtn && buyBtn.disabled) return;

  try {
    if (buyBtn) buyBtn.disabled = true;
    if (txStatus) {
      txStatus.textContent = 'Processing: Connecting wallet...';
      txStatus.style.color = '#ffd700';
    }

    // Connect wallet
    const account = await connectWallet();
    if (!account) {
      if (buyBtn) buyBtn.disabled = false;
      return;
    }

    if (txStatus) {
      txStatus.textContent = 'Processing: Sending transaction...';
      txStatus.style.color = '#ffd700';
    }

    // Send transaction
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();

    const tx = await signer.sendTransaction({
      to: CONTRACT_ADDRESS,
      value: ethers.utils.parseEther('0.05')
    });

    if (txStatus) {
      txStatus.textContent = `Processing: Waiting for confirmation... Hash: ${tx.hash}`;
      txStatus.style.color = '#ffd700';
    }
    if (buyBtn) buyBtn.textContent = 'Confirming...';

    // Wait for confirmation
    const receipt = await tx.wait();

    if (txStatus) {
      txStatus.textContent = `Success! Starter Pack purchased. Transaction: ${receipt.transactionHash}`;
      txStatus.style.color = '#90ee90';
    }
    if (buyBtn) {
      buyBtn.textContent = 'Purchase Complete ✓';
      buyBtn.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
    }
  } catch (err) {
    console.error('Purchase error:', err);
    if (txStatus) {
      txStatus.textContent = `Error: ${err.message || err}`;
      txStatus.style.color = '#ff6b6b';
    }
    if (buyBtn) {
      buyBtn.disabled = false;
      buyBtn.textContent = 'Buy Now — 0.05 ETH';
    }
  }
}
