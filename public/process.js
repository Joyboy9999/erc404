$(document).ready(function () {
  var curAddress = "";
  // Interact Contract 
  const abi = [{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"AlreadyExists","type":"error"},{"inputs":[],"name":"InvalidOwner","type":"error"},{"inputs":[],"name":"InvalidRecipient","type":"error"},{"inputs":[],"name":"InvalidSender","type":"error"},{"inputs":[],"name":"NotFound","type":"error"},{"inputs":[],"name":"Unauthorized","type":"error"},{"inputs":[],"name":"UnsafeRecipient","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ERC20Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"}],"name":"ERC721Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amountOrId","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseTokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dataURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"owner","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"revokeOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_dataURI","type":"string"}],"name":"setDataURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"}],"name":"setNameSymbol","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_tokenURI","type":"string"}],"name":"setTokenURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bool","name":"state","type":"bool"}],"name":"setWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amountOrId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]
  const addressSM = "0x67931A8980d7F65513381011FA448cAE02fE749D"; 
  const web3 = new Web3(window.ethereum);
  window.ethereum.enable(); 
  var contract = new web3.eth.Contract(abi,addressSM);
  console.log(contract);
  // End Contract setup

  checkMM();
  listenForAccountChanges(); // Call the function to start listening for account changes

  $("#connectMM").click(function () {
    connectMM()
      .then((data) => {
        curAddress = data[0];
        updateFrontend(curAddress); // Update the frontend with the current address
      })
      .catch((err) => {
        console.log(err);
      });
  });

  $("#mint_NFT").click(function () {

    contract.methods.transfer("0xBc023E357F8b7433613AEe6DaDBA98b19160227B", 100000000000).send({
        from : curAddress, gas:100000
    });


    // Post to database user
    $(".firework-container").show();
    setTimeout(function () {
      $(".firework-container").hide();
    }, 3000);
    
    showToast("error");
    $.post(
      "./setuser",
      {
        Address: curAddress,
      },
      function (data) {
        console.log("Update database: " + data);
      }
    );
  });

  // notification
  function showToast(type) {
    var toast = $(".toast-" + type)
      .first()
      .clone();
    $("#toast-container").append(toast);
    toast
      .fadeIn(400)
      .delay(3000)
      .fadeOut(400, function () {
        $(this).remove();
      });
  }

  // Function to close a toast on clicking the 'close' button
  $(document).on("click", ".toast-close", function () {
    $(this)
      .parent(".toast")
      .fadeOut(400, function () {
        $(this).remove();
      });
  });
});

async function connectMM() {
  await switchToLinea();
  const account = await ethereum.request({ method: "eth_requestAccounts" });
  return account;
}

// Reusable function to update the frontend
function updateFrontend(address) {
  console.log(address);
  const shortAddress = address.slice(0, 3) + "..." + address.slice(-4);
  $("#Update_Wallet").text(shortAddress);
}

async function connectMM() {
  await switchToLinea();
  const account = await ethereum.request({ method: "eth_requestAccounts" });
  return account;
}

async function switchToLinea() {
  const chainId = "0xe704"; // mainnet 0xe708
  try {
    await ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: chainId }], // Chain ID for Linea
    });
  } catch (switchError) {
    // This error code indicates that the chain has not been added to MetaMask
    if (switchError.code === 4902) {
      try {
        await ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: chainId,
              chainName: "Linea",
              nativeCurrency: {
                name: "Linea Ether",
                symbol: "ETH", // 2-6 characters long
                decimals: 18,
              },
              rpcUrls: ["https://linea-testnet.rpc.thirdweb.com"],
              blockExplorerUrls: ["https://linea.build"],
            },
          ],
        });
      } catch (addError) {
        // Handle the error
        console.error("Failed to add Linea chain", addError);
      }
    } else {
      // Handle other errors
      console.error("Failed to switch to Linea chain", switchError);
    }
  }
}

function checkMM() {
  if (typeof window.ethereum !== "undefined") {
    console.log("Metamask is installed!");
  } else {
    console.log("You have not installed Metamask");
  }
}

function listenForAccountChanges() {
  if (window.ethereum) {
    window.ethereum.on("accountsChanged", function (accounts) {
      // User changed account, update the frontend
      if (accounts.length > 0) {
        updateFrontend(accounts[0]); // Update with the first account
        // Optionally, you can also refresh other parts of your UI or make necessary backend updates here
      } else {
        // Handle case where user disconnects all accounts
        $("#Update_Wallet").text("Please connect to MetaMask");
      }
    });
  }
}
