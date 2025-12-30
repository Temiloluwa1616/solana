import React, { useState } from 'react';
import { ethers } from 'ethers';

const CONTRACT_ADDRESS = '0xREPLACE_WITH_YOUR_CONTRACT_ADDRESS';
const CONTRACT_ABI = [
  {
    "inputs": [],
    "name": "buyStarterPack",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }
];

export default function StarterPackPurchase() {
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  async function connectWallet() {
    if (!window.ethereum) {
      setMessage('MetaMask not detected');
      return;
    }
    try {
      const [acc] = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(acc);
      setMessage('Wallet connected: ' + acc);
    } catch (err) {
      setMessage('Connection rejected');
    }
  }

  async function buyStarterPack() {
    if (!window.ethereum) {
      setMessage('MetaMask not available');
      return;
    }

    setLoading(true);
    setMessage('Preparing transaction...');

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

      const tx = await contract.buyStarterPack({ value: ethers.utils.parseEther('0.05') });
      setMessage('Transaction submitted: ' + tx.hash);
      await tx.wait();
      setMessage('Purchase confirmed!');
    } catch (err) {
      setMessage('Error: ' + (err.message || err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: 8}}>
      <h3>Starter Pack — 0.05 ETH</h3>
      <p>1,000 NEWYEARPUMP tokens. Instant delivery (on-chain).</p>
      <p>Wallet: {account || 'Not connected'}</p>
      <div style={{display: 'flex', gap: 8, marginTop: 8}}>
        {!account && <button className="btn btn-outline" onClick={connectWallet}>Connect Wallet</button>}
        <button className="btn btn-primary" onClick={buyStarterPack} disabled={loading}>{loading ? 'Processing...' : 'Buy Now — 0.05 ETH'}</button>
      </div>
      {message && <p style={{marginTop:8}}>{message}</p>}
    </div>
  );
}
