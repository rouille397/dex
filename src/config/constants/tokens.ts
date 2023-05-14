import { ChainId, Token } from '@pancakeswap/sdk'

export const NTFD: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0x1cbF4cCDEfb2b880933f413D7D9B45Af7cdfBA9e',
    18,
    'NTFD',
    'NitfeeDex',
  ),
  [ChainId.TESTNET]: new Token(
    ChainId.TESTNET,
    '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    18,
    'NTFD',
    'PancakeSwap Token',
  ),
}
export const USDT: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0xfe97e85d13abd9c1c33384e796f10b73905637ce',
    18,
    'USDT',
    'Tether USD',
  ),
  [ChainId.TESTNET]: new Token(
    ChainId.TESTNET,
    '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee',
    18,
    'USDT',
    'Binance USD',
  ),
}

export const WCFX = new Token(ChainId.MAINNET, '0x14b2d3bc65e74dae1030eafd8ac30c533c976a9b', 18, 'WCFX', 'Wrapped CFX')
export const DAI = new Token(ChainId.MAINNET, '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3', 18, 'DAI', 'Dai Stablecoin')
export const BTCB = new Token(ChainId.MAINNET, '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', 18, 'BTCB', 'Binance BTC')
export const UST = new Token(
  ChainId.MAINNET,
  '0x23396cF899Ca06c4472205fC903bDB4de249D6fC',
  18,
  'UST',
  'Wrapped UST Token',
)
export const ETH = new Token(
  ChainId.MAINNET,
  '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
  18,
  'ETH',
  'Binance-Peg Ethereum Token',
)
// export const USDC = new Token(
//   ChainId.MAINNET,
//   '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
//   18,
//   'USDC',
//   'Binance-Peg USD Coin',
// )

const tokens = {
  bnb: {
    symbol: 'CFX',
    projectLink: 'https://www.binance.com/',
  },
  cake: {
    symbol: 'NTFD',
    address: {
      1030: '0x1cbF4cCDEfb2b880933f413D7D9B45Af7cdfBA9e',
      96: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://nitfeeswap.xyz/',
  },
  ntf: {
    symbol: 'NTF',
    address: {
      1030: '0x91908317a1445f9f12208952533588e34d716054',
      96: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://nitfeeswap.xyz/',
  },
  wbnb: {
    symbol: 'wCFX',
    address: {
      1030: '0x14b2d3bc65e74dae1030eafd8ac30c533c976a9b',
      96: '0x14b2d3bc65e74dae1030eafd8ac30c533c976a9b',
    },
    decimals: 18,
    projectLink: 'https://pancakeswap.finance/',
  },
  busd: {
    symbol: 'USDT',
    address: {
      1030: '0xfe97e85d13abd9c1c33384e796f10b73905637ce',
      96: '',
    },
    decimals: 18,
    projectLink: 'https://www.paxos.com/busd/',
  },
  eth: {
    symbol: 'ETH',
    address: {
      1030: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
      96: '',
    },
    decimals: 18,
    projectLink: 'https://ethereum.org/en/',
  },
  dai: {
    symbol: 'DAI',
    address: {
      1030: '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
      96: '',
    },
    decimals: 18,
    projectLink: 'https://www.makerdao.com/',
  },
  
  uni: {
    symbol: 'UNI',
    address: {
      1030: '0xBf5140A22578168FD562DCcF235E5D43A02ce9B1',
      96: '',
    },
    decimals: 18,
    projectLink: 'https://www.makerdao.com/',
  },
  twt: {
    symbol: 'TWT',
    address: {
      1030: '0x4b0f1812e5df2a09796481ff14017e6005508003',
      96: '',
    },
    decimals: 18,
    projectLink: 'https://www.makerdao.com/',
  },
  link: {
    symbol: 'LINK',
    address: {
      1030: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
      96: '',
    },
    decimals: 18,
    projectLink: 'https://www.makerdao.com/',
  },
  
  ust: {
    symbol: 'UST',
    address: {
      1030: '0x23396cF899Ca06c4472205fC903bDB4de249D6fC',
      96: '',
    },
    decimals: 18,
    projectLink: 'https://mirror.finance/',
  },
  btcb: {
    symbol: 'BTCB',
    address: {
      1030: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
      96: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://bitcoin.org/',
  },
  ada: {
    symbol: 'ADA',
    address: {
      1030: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
      96: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://bitcoin.org/',
  },
  ltc: {
    symbol: 'LTC',
    address: {
      1030: '0x4338665cbb7b2485a8855a139b75d5e34ab0db94',
      96: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://bitcoin.org/',
  },
  dot: {
    symbol: 'DOT',
    address: {
      1030: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
      96: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://bitcoin.org/',
  },
  trx: {
    symbol: 'TRX',
    address: {
      1030: '0x85eac5ac2f758618dfa09bdbe0cf174e7d574d5b',
      96: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://bitcoin.org/',
  },
  syrup: {
    symbol: 'NTFDRT',
    address: {
      1030: '0x9700C7982Dc4D5d1476DD444C41605514d70AbC1',
      96: '0xfE1e507CeB712BDe086f3579d2c03248b2dB77f9',
    },
    decimals: 18,
    projectLink: 'https://pancakeswap.finance/',
  },
  
}

export default tokens
