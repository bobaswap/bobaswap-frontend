import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

// export const addressMap = {
//   uniswapFactory: '0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95',
//   uniswapFactoryV2: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
//   YFI: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
//   YCRV: '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8',
//   UNIAmpl: '0xc5be99a02c6857f9eac67bbce58df5572498f40c',
//   WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
//   UNIRouter: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
//   LINK: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
//   MKR: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
//   SNX: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
//   COMP: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
//   LEND: '0x80fB784B7eD66730e8b1DBd9820aFD29931aab03',
//   SUSHIYCRV: '0x2C7a51A357d5739C5C74Bf3C96816849d2c9F726',
// }

export const contractAddresses = {
  sushi: {
    1: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
  },
  masterChef: {
    1: '0xc2edad668740f1aa35e4d8f227fb8e17dca888cd',
  },
  weth: {
    1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  },
}

/*
SLP Address on mainnet for reference
==========================================
0  USDT 0x
*/

export const supportedPools = [
  {
    pid: 12,
    lpAddresses: {
      1: '0x795065dCc9f64b5614C407a6EFDC400DA6221FB0',
    },
    tokenAddresses: {
      1: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
    },
    name: 'Boba Party!',
    symbol: 'BOBA-ETH SLP',
    tokenSymbol: 'BOBA',
    icon: '🥤',
  },
  {
    pid: 0,
    lpAddresses: {
      1: '0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852',
    },
    tokenAddresses: {
      1: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    },
    name: 'Tether Coffee',
    symbol: 'USDT-ETH SLP',
    tokenSymbol: 'USDT',
    icon: '☕',
  },
  {
    pid: 1,
    lpAddresses: {
      1: '0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc',
    },
    tokenAddresses: {
      1: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    },
    name: 'Circle Whiskey',
    symbol: 'USDC-ETH SLP',
    tokenSymbol: 'USDC',
    icon: '🥃',
  },
  {
    pid: 8,
    lpAddresses: {
      1: '0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974',
    },
    tokenAddresses: {
      1: '0x514910771af9ca656af840dff83e8264ecf986ca',
    },
    name: 'LINK Beer',
    symbol: 'LINK-ETH SLP',
    tokenSymbol: 'LINK',
    icon: '🍺',
  },
  {
    pid: 5,
    lpAddresses: {
      1: '0xab3f9bf1d81ddb224a2014e98b238638824bcf20',
    },
    tokenAddresses: {
      1: '0x80fb784b7ed66730e8b1dbd9820afd29931aab03',
    },
    name: 'Aave Wine',
    symbol: 'LEND-ETH SLP',
    tokenSymbol: 'LEND',
    icon: '🍷',
  },
  {
    pid: 6,
    lpAddresses: {
      1: '0x43ae24960e5534731fc831386c07755a2dc33d47',
    },
    tokenAddresses: {
      1: '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f',
    },
    name: 'Sync Champagne',
    symbol: 'SNX-ETH SLP',
    tokenSymbol: 'SNX',
    icon: '🍾',
  },
  {
    pid: 10,
    lpAddresses: {
      1: '0xc5be99a02c6857f9eac67bbce58df5572498f40c',
    },
    tokenAddresses: {
      1: '0xd46ba6d942050d489dbd938a2c909a5d5039a161',
    },
    name: 'Ample Cocktail',
    symbol: 'AMPL-ETH SLP',
    tokenSymbol: 'AMPL',
    icon: '🍸',
  },
  {
    pid: 11,
    lpAddresses: {
      1: '0x2fdbadf3c4d5a8666bc06645b8358ab803996e28',
    },
    tokenAddresses: {
      1: '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e',
    },
    name: 'YFI Sake',
    symbol: 'YFI-ETH SLP',
    tokenSymbol: 'YFI',
    icon: '🍶',
  },
  {
    pid: 20,
    lpAddresses: {
      1: '0x95b54c8da12bb23f7a5f6e26c38d04acc6f81820',
    },
    tokenAddresses: {
      1: '0xAba8cAc6866B83Ae4eec97DD07ED254282f6aD8A',
    },
    name: 'YAMV2 Juice',
    symbol: 'YAMV2-ETH SLP',
    tokenSymbol: 'YAMV2',
    icon: '🍹',
  },
  {
    pid: 21,
    lpAddresses: {
      1: '0x795065dcc9f64b5614c407a6efdc400da6221fb0',
    },
    tokenAddresses: {
      1: '0x6B3595068778DD592e39A122f4f5a5cF09C90fE2',
    },
    name: 'SUSHI Milk',
    symbol: 'SUSHI-ETH SLP',
    tokenSymbol: 'SUSHI',
    icon: '🥛',
  },
  {
    pid: 24,
    lpAddresses: {
      1: '0x715134a16acb73c86e81df5542e1cf759eeb6fc7',
    },
    tokenAddresses: {
      1: '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
    },
    name: 'BUSD Soup',
    symbol: 'BUSD-ETH SLP',
    tokenSymbol: 'BUSD',
    icon: '🥣',
  },
  {
    pid: 22,
    lpAddresses: {
      1: '0x56feaccb7f750b997b36a68625c7c596f0b41a58',
    },
    tokenAddresses: {
      1: '0xa0246c9032bC3A600820415aE600c6388619A14D',
    },
    name: 'FARM Honey',
    symbol: 'FARM SLP',
    tokenSymbol: 'FARM',
    icon: '🍯',
  },
  {
    pid: 25,
    lpAddresses: {
      1: '0xb5697ab09923e1f762c60b973b9ac7e48a89ec45',
    },
    tokenAddresses: {
      1: '0xba50933c268f567bdc86e1ac131be072c6b0b71a',
    },
    name: 'ARPA Cake',
    symbol: 'ARPA SLP',
    tokenSymbol: 'ARPA',
    icon: '🍰',
  },
  {
    pid: 26,
    lpAddresses: {
      1: '0x8973be4402bf0a39448f419c2d64bd3591dd2299',
    },
    tokenAddresses: {
      1: '0xa1d0E215a23d7030842FC67cE582a6aFa3CCaB83',
    },
    name: 'YFII Doughnut',
    symbol: 'YFII SLP',
    tokenSymbol: 'YFII',
    icon: '🍩',
  },
  {
    pid: 27,
    lpAddresses: {
      1: '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e',
    },
    tokenAddresses: {
      1: '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e',
    },
    name: 'YFI Pudding',
    symbol: 'YFI SLP',
    tokenSymbol: 'YFI',
    icon: '🍮',
  },
  {
    pid: 28,
    lpAddresses: {
      1: '0x17782d58c715aa2a4458d5fb1c1d8e52a69a62fc',
    },
    tokenAddresses: {
      1: '0x75231f58b43240c9718dd58b4967c5114342a86c',
    },
    name: 'OKB Candy',
    symbol: 'OKB SLP',
    tokenSymbol: 'OKB',
    icon: '🍭',
  },
  {
    pid: 29,
    lpAddresses: {
      1: '0xc139d8450177c0b8c3788608518687b585f7ae5a',
    },
    tokenAddresses: {
      1: '0xb8baa0e4287890a5f79863ab62b7f175cecbd433',
    },
    name: 'SWRV Chocolate',
    symbol: 'SWRV SLP',
    tokenSymbol: 'SWRV',
    icon: '🍫',
  },
  
  
]
