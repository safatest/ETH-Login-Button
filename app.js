// var Web3 = require("web3")
// import Web3 from web3

const btn = document.getElementById("btn-login");
async function ethEnabled() {
    if(btn.innerText == "Web3 Metamask Login"){
        if (window.ethereum) {
            // const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
            const accounts = await window.ethereum.send('eth_requestAccounts');
            window.web3 = new Web3(window.ethereum);
            // console.log(accounts.result[0])
            const address = accounts.result[0]
            // console.log(address)
            web3.eth.getBalance(address, function(err, result) {
                if (err) {
                    console.log(err)
                } else {
                    let ethbal = web3.utils.fromWei(result, "ether") + " ETH"
                    console.log(ethbal)
                    btn.innerText = ethbal
                }
              })
            // let response = web3.eth.getBalance(address)
            //     .then(res => {console.log(res)
            //         // document.getElementById("output").innerHTML = res + " ETH";
            //         btn.innerText = res+"ETH";})
        return true;
        }
        return false;
    }
}
