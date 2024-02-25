$(document).ready(function () {
  var curAddress = "";
  // Interact Contract 
  const abi = [{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"uint8","name":"decimals_","type":"uint8"},{"internalType":"address","name":"initialOwner_","type":"address"},{"internalType":"uint256","name":"maxMint_","type":"uint256"},{"internalType":"address","name":"_recipient","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"AlreadyExists","type":"error"},{"inputs":[],"name":"DecimalsTooLow","type":"error"},{"inputs":[],"name":"InsufficientAllowance","type":"error"},{"inputs":[],"name":"InvalidApproval","type":"error"},{"inputs":[],"name":"InvalidExemption","type":"error"},{"inputs":[],"name":"InvalidOperator","type":"error"},{"inputs":[],"name":"InvalidRecipient","type":"error"},{"inputs":[],"name":"InvalidSender","type":"error"},{"inputs":[],"name":"InvalidSigner","type":"error"},{"inputs":[],"name":"InvalidSpender","type":"error"},{"inputs":[],"name":"InvalidTokenId","type":"error"},{"inputs":[],"name":"MintLimitReached","type":"error"},{"inputs":[],"name":"NotFound","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[],"name":"OwnedIndexOverflow","type":"error"},{"inputs":[],"name":"PermitDeadlineExpired","type":"error"},{"inputs":[],"name":"QueueEmpty","type":"error"},{"inputs":[],"name":"QueueFull","type":"error"},{"inputs":[],"name":"QueueOutOfBounds","type":"error"},{"inputs":[],"name":"RecipientIsERC721TransferExempt","type":"error"},{"inputs":[],"name":"Unauthorized","type":"error"},{"inputs":[],"name":"UnsafeRecipient","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"Minted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"WhitelistAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"WhitelistRemoved","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ID_ENCODING_PREFIX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_MINT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"VOYAGE","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"addresses","type":"address[]"}],"name":"addToWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender_","type":"address"},{"internalType":"uint256","name":"valueOrId_","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender_","type":"address"},{"internalType":"uint256","name":"value_","type":"uint256"}],"name":"erc20Approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"}],"name":"erc20BalanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"erc20TotalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"value_","type":"uint256"}],"name":"erc20TransferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender_","type":"address"},{"internalType":"uint256","name":"id_","type":"uint256"}],"name":"erc721Approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"}],"name":"erc721BalanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"erc721TotalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"target_","type":"address"}],"name":"erc721TransferExempt","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"id_","type":"uint256"}],"name":"erc721TransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getERC721QueueLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"start_","type":"uint256"},{"internalType":"uint256","name":"count_","type":"uint256"}],"name":"getERC721TokensInQueue","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"hasVoyageNft","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintERC20","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"minted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"}],"name":"owned","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id_","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"erc721Owner","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"},{"internalType":"address","name":"spender_","type":"address"},{"internalType":"uint256","name":"value_","type":"uint256"},{"internalType":"uint256","name":"deadline_","type":"uint256"},{"internalType":"uint8","name":"v_","type":"uint8"},{"internalType":"bytes32","name":"r_","type":"bytes32"},{"internalType":"bytes32","name":"s_","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"recipient","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"addresses","type":"address[]"}],"name":"removeFromWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"id_","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"id_","type":"uint256"},{"internalType":"bytes","name":"data_","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator_","type":"address"},{"internalType":"bool","name":"approved_","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account_","type":"address"},{"internalType":"bool","name":"value_","type":"bool"}],"name":"setERC721TransferExempt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"state_","type":"bool"}],"name":"setSelfERC721TransferExempt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id_","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"value_","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"transferAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from_","type":"address"},{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"valueOrId_","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"units","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newAmount","type":"uint256"}],"name":"updateTransferAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]
  const addressSM = "0x1780801D5F575094abf5D77d655606050D36bc53"; 
  const web3 = new Web3(window.ethereum);
  window.ethereum.enable(); 
  var contract = new web3.eth.Contract(abi,addressSM);
  //console.log(contract);
  // End Contract setup

  //infura setup
  var provider = new Web3.providers.WebsocketProvider("wss://linea-mainnet.infura.io/ws/v3/f41cc23788d84ef3a4de42ea3a8398b3")
  var web3_infura = new Web3(provider);
  var contract_Infura = web3_infura.eth.Contract(abi,addressSM);
  //console.log(contract_Infura);
  contract_Infura.events.Minted({filter:{},fromBlock:"latest"}, function(error, event){
    if(error){
      console.log(error);
    }else{
      console.log(event);
          // Post to database user
      $(".firework-container").show();
      setTimeout(function () {
        $(".firework-container").hide();
      }, 3000);
      
      showToast("success");
      $.post(
        "./setuser",
        {
          Address: curAddress,
        },
        function (data) {
          console.log("Update database: " + data);
        }
      );
    }

  });
  
  listenForAccountChanges(); // Call the function to start listening for account changes

  $("#connectMM").click(function () {
    checkMM();
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
    
    const amountToSend = web3.utils.toWei('0.0018', 'ether');
    contract.methods.mintERC20().send({
      from: curAddress,
      value: amountToSend,
      gasLimit: 200000
    })
    .then((receipt) => {
      // Transaction successful, handle the receipt if needed
      console.log(receipt);
    })
    .catch((error) => {
      // Transaction failed, handle the error
      console.error(error);
    });


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
  const chainId = "0xe708"; // mainnet 0xe708
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
              rpcUrls: ["https://59144.rpc.thirdweb.com"],
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
