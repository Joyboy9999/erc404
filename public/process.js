$(document).ready(function(){
    var curAddress = "";
    checkMM();
    $("#connectMM").click(function(){
        conntectMM().then((data=>{
            curAddress = data[0]
            console.log(curAddress);
            const shortdaddress = curAddress.slice(0, 3) + "..."+ curAddress.slice(-4);
            $('#Update_Wallet').text(shortdaddress); 
        })).catch((err)=>{
            console.log(err);
        })
    })
});

async function conntectMM(){
    const account = await ethereum.request({method: 'eth_requestAccounts'});
    return account;
}

function checkMM(){
    if(typeof window.ethereum !== 'undefined'){
        console.log('Metamask is installed!');
    }
    else{
        console.log('Ban chua cai metamask');
    }
}