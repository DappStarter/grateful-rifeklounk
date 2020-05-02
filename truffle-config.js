require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow fringe skull guard render remind essay grid clip swallow team'; 
let testAccounts = [
"0x38354b367d691376662fbcf0e84129d4aae9dba095e46416b2a71cdf575d3b8b",
"0x579962900f16c0b05f5d091fb4021255907c15f7803b6c53006258b6ea0ae1b2",
"0x00651380dc6c439a889df7e49a7bce05e237da8a9dd6185e7a31517a2acbb196",
"0x7f88d9b75a4093453dd69e1dac2080d10ec6c6919fea712acab9a2a43e2e7803",
"0xb45d1e956e1d7f23f1360b641c7e5447fdb9814d2c522148ee4fb2f4a6e887d7",
"0xe9e7643d089cef5871694d71ac37853b81eb74cab0df32fef6db8e69fb5a897e",
"0x2f2af7eeb3f7c63dc674a22223f6256ddde3579a89fcd550d1ece3c052154892",
"0x8bcfa0c9746c6514cc8e96cc24d78ed8c3a2e1917a718713ac8f71d850bc0358",
"0x57d8cf287989b1151ad4750f822bf0ea5c841ecc7db190dbb3d0c2dcecfdbcfb",
"0x304a5f829e383721c8814a2ecd707ba5f2618a41414ff91d72ed7e43be7a66bb"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
