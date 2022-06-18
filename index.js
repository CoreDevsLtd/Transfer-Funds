const Web3 = require('web3')
const web3 = new Web3(process.env.NODE_URL)
const privateKey = process.env.PRIVATE_KEY
const sender = web3.eth.accounts.privateKeyToAccount(privateKey).address



const main = async (receiver,amount) => {
    try {
        //Checking current balance of receiver
        let balance = await web3.eth.getBalance(receiver)
        balance = web3.utils.fromWei(balance, 'ether')
        console.log(`Balance of ${receiver} is ${balance}`)

        //Sending ether to receiver
        console.log(`Sending ${amount} ether to ${receiver}`);
        amount = await web3.utils.toWei(amount, 'ether')
        await web3.eth.sendTransaction({to:receiver, from:sender, value:amount})

        //Checking current balance of receiver
        balance = await web3.eth.getBalance(receiver)
        balance = web3.utils.fromWei(balance, 'ether')
        console.log(`Balance of ${receiver} is ${balance}`)
        
    } catch (error) {
        console.log(`Something went wrong. Please check the Node URL, Private Key, and Wallet Balance of Sender.`);
        console.log(error)
    }
        
    
    
}
main("0x646C416a8F2a8Ce0b02EA0A6ce8035F7905d422d","10")