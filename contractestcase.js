require('dotenv').config(); // Đảm bảo dòng này ở đầu tệp để cấu hình dotenv
const Web3 = require('web3').default;

// Thông tin kết nối với Linear Testnet
const rpcURL = 'https://rpc.goerli.linea.build';
const web3 = new Web3(new Web3.providers.HttpProvider(rpcURL));

// Đọc private keys từ tệp .env
const privateKeys = [
    process.env.PRIVATE_KEY_1,
    process.env.PRIVATE_KEY_2,
    process.env.PRIVATE_KEY_3
];
privateKeys.forEach(key => web3.eth.accounts.wallet.add(key));

// Thông tin hợp đồng
const contractAddress = 'CONTRACT_ADDRESS'; // Thay thế bằng địa chỉ thực tế của hợp đồng
const contractABI = []; // Thay thế bằng ABI thực tế của hợp đồng
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Gọi một hàm từ hợp đồng
const callContractFunction = async () => {
    try {
        const accountAddress = web3.eth.accounts.wallet[0].address;
        
        // Ví dụ gọi hàm và gửi giao dịch
        // Lưu ý: Thay `YOUR_METHOD_NAME` và các tham số nếu cần
        const callResult = await contract.methods.YOUR_METHOD_NAME().call({from: accountAddress});
        console.log('Kết quả gọi hàm:', callResult);

        // Ví dụ gửi giao dịch (nếu cần)
        const sendResult = await contract.methods.YOUR_METHOD_NAME(/* Tham số nếu có */).send({from: accountAddress, gas: 1000000});
        console.log('Kết quả gửi giao dịch:', sendResult);
    } catch (error) {
        console.error('Lỗi khi gọi hợp đồng:', error);
    }
};

callContractFunction();

