const addresses = {
  sweep: "0xB88a5Ac00917a02d82c7cd6CEBd73E2852d43574",
  sweepr: "0x89B1e7068bF8E3232dD8f16c35cAc45bDA584f4E"
}

const supportedNetworks = {
  mainnet: {
    rpc: "https://ethereum.publicnode.com",
    alchemy: "https://eth-mainnet.alchemyapi.io/v2/",
    chainId: 1
  },
  arbitrum: {
    rpc: "https://arb1.arbitrum.io/rpc",
    alchemy: "https://arb-mainnet.g.alchemy.com/v2/",
    chainId: 42161
  },
  optimism: {
    rpc: "https://mainnet.optimism.io",
    alchemy: "https://opt-mainnet.g.alchemy.com/v2/",
    chainId: 10
  },
  base: {
    rpc: "https://mainnet.base.org",
    alchemy: "https://base-mainnet.g.alchemy.com/v2/",
    chainId: 8453
  },
  // bnb: {
  //   rpc: "https://bscrpc.com",
  //   alchemy: ""
  //   chainId: 1
  // },
  polygon: {
    rpc: "https://polygon.llamarpc.com",
    alchemy: "https://polygon-mainnet.g.alchemy.com/v2/",
    chainId: 137
  },
  // avalanche: {
  //   rpc: "",
  //   alchemy: "",
  //   chainId: 1
  // },
  // celo: {
  //   rpc: "",
  //   alchemy: "",
  //   chainId: 1
  // },
}

module.exports = {
  addresses,
  supportedNetworks
}