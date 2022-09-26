import { ethers } from "./ethers-5.6.esm.min.js";

document.getElementById("checkBalance").addEventListener("click", checkBalance);

async function checkBalance() {

    let provider = new ethers.providers.AlchemyProvider("goerli", "DwQYBWMP6dh_-dYfoVqBXiVv388S7M1C");

    let address = document.getElementById("address").value;

    let balance = await provider.getBalance(address);

    alert(`Balance: ${ethers.utils.formatEther(balance)}`);
}