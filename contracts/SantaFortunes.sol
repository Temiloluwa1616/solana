// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SantaFortunes {
    event StarterPackPurchased(address indexed buyer, uint256 amount);

    // Buy the starter pack: requires at least 0.05 ETH
    function buyStarterPack() external payable {
        require(msg.value >= 0.05 ether, "Insufficient payment: 0.05 ETH required");

        // TODO: implement token minting or accounting logic here

        emit StarterPackPurchased(msg.sender, msg.value);
    }
}
