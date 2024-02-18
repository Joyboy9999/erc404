$(document).ready(function() {
    var curAddress = "";
    checkMM();
    listenForAccountChanges(); // Call the function to start listening for account changes

    $("#connectMM").click(function() {
        connectMM().then((data) => {
            curAddress = data[0];
            updateFrontend(curAddress); // Update the frontend with the current address
            
        }).catch((err) => {
            console.log(err);
        });
    });

    $("#mint_NFT").click(function() {
             // Post to database user
        $('.firework-container').show();
        showToast('success');
        setTimeout(function() {
                $('.firework-container').hide();
              }, 3000);
        $.post("./setuser", {
            Address: curAddress
            }, function(data) {
                console.log("Update database: "+ data);
        });
    });

    // notification
    function showToast(type) {
        var toast = $('.toast-' + type).first().clone();
        $('#toast-container').append(toast);
        toast.fadeIn(400).delay(3000).fadeOut(400, function() {
          $(this).remove();
        });
      }
    
      // Function to close a toast on clicking the 'close' button
      $(document).on('click', '.toast-close', function() {
        $(this).parent('.toast').fadeOut(400, function() {
          $(this).remove();
        });
      });
});

async function connectMM() {
    await switchToLinea();
    const account = await ethereum.request({method: 'eth_requestAccounts'});
    return account;
}

// Reusable function to update the frontend
function updateFrontend(address) {
    console.log(address);
    const shortAddress = address.slice(0, 3) + "..." + address.slice(-4);
    $('#Update_Wallet').text(shortAddress); 
}

async function connectMM() {
    await switchToLinea();
    const account = await ethereum.request({method: 'eth_requestAccounts'});
    return account;
}

async function switchToLinea() {
    const chainId = '0xe704'; // mainnet 0xe708
    try {
        await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{chainId: chainId}], // Chain ID for Linea
        });
    } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask
        if (switchError.code === 4902) {
            try {
                await ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [{
                        chainId: chainId,
                        chainName: 'Linea',
                        nativeCurrency: {
                            name: 'Linea Ether',
                            symbol: 'ETH', // 2-6 characters long
                            decimals: 18,
                        },
                        rpcUrls: ['https://linea-testnet.rpc.thirdweb.com'],
                        blockExplorerUrls: ['https://linea.build'],
                    }],
                });
            } catch (addError) {
                // Handle the error
                console.error('Failed to add Linea chain', addError);
            }
        } else {
            // Handle other errors
            console.error('Failed to switch to Linea chain', switchError);
        }
    }
}

function checkMM() {
    if (typeof window.ethereum !== 'undefined') {
        console.log('Metamask is installed!');
    } else {
        console.log('You have not installed Metamask');
    }
}

function listenForAccountChanges() {
    if (window.ethereum) {
        window.ethereum.on('accountsChanged', function(accounts) {
            // User changed account, update the frontend
            if (accounts.length > 0) {
                updateFrontend(accounts[0]); // Update with the first account
                // Optionally, you can also refresh other parts of your UI or make necessary backend updates here
            } else {
                // Handle case where user disconnects all accounts
                $('#Update_Wallet').text('Please connect to MetaMask');
            }
        });
    }
}