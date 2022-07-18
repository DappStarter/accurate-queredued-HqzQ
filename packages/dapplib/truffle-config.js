require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture brand tail tooth blanket crater remind concert grace nasty flip turkey'; 
let testAccounts = [
"0x7e87f351eb32bc5690805f9cde3a7c72c60d11b52e08f5141a78d42f2a0c0176",
"0xa4cd97a4d595a19923969440a5410c8fad886b6475363fd555fb0519bb914a73",
"0x026b94cb76d78fe67bc2cd952a2bc21d2b87447c1d9a8d786ae2f8a1f6f1fa7a",
"0xf06cd1299b554c3a571fde8b01b801a452da04ad3818a4dec0190646bc02cc5f",
"0xb1289b2bb0c87cacaf08bd2e3e612d68732ebd14415e405911a47841d984909f",
"0xd30921b600935bf5b545e7a265f4ec59a4642c9a86c342114f2de7b5ee654145",
"0x5364ebe24b2b36d43adfe4ce600026f3de850e3c672827092688faca89d9f684",
"0xae43defe6c7f52df8f69adefedf73af424d7b4c9399eb00cd1f096fb54d76707",
"0x71b57af146861272eaea4e38497d15a4d70444ed35a2245359d2b5083da1c537",
"0xb88c6847a43c194184c73a89ca70790e9c76527335ef37831341fc106c13d876"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

