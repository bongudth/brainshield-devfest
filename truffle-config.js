const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic =
    "ball once void parent unhappy jump wool group magic assist total estate boy wash panther";

module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*", // Match any network id
        },
        networks: {
            ropsten: {
                provider: function () {
                    return new HDWalletProvider(
                        mnemonic,
                        "https://ropsten.infura.io/v3/241f03331919423cba6145c7a2bcc61a"
                    );
                },
                network_id: 3,
            },
        },
    },
    solc: {
        optimizer: {
            enabled: true,
            runs: 200,
        },
    },
    compilers: {
        solc: {
            version: "^0.8.9",
        },
    },
};
