async function checkBalance(address, apiKey) {
  const apiUrl = `https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const result = await response.json();

    if (result.status === '1') {
      const balanceInEther = web3.utils.fromWei(result.result, 'ether');
      console.log(`Balance of ${address}: ${balanceInEther} ETH`);
    } else {
      console.error(`Error: ${result.message}`);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Your API key from Etherscan
const apiKey = 'Your-API-key';

// Ethereum address to check balance
const ethereumAddress = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e';

checkBalance(ethereumAddress, apiKey);
