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
  boba: {
    1: '0xce9aFAF5b0dA6cE0366aB40435A48ccff65d2ED7',
  },
  masterChef: {
    1: '0x6a1c61D4FCfD36Ca908C8090418cf2B292951f8A',
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
    pid: 16,
    lpAddresses: {
      1: '0xdfb87fd2f9f5eec75930a2d8cfe67f791801fe30',
    },
    tokenAddresses: {
      1: '0xce9aFAF5b0dA6cE0366aB40435A48ccff65d2ED7',
    },
    name: 'Boba Party!',
    symbol: 'BOBA-ETH SLP',
    tokenSymbol: 'BOBA',
    icon: '🥤',
    depositUrl:'https://exchange.sushiswapclassic.org/#/add/0xce9aFAF5b0dA6cE0366aB40435A48ccff65d2ED7/ETH',
    isPair : true,
  },
  {
    pid: 17,
    lpAddresses: {
      1: '0x9e98deac1a416c9ce3c892bd8eef586f1291ca35',
    },
    tokenAddresses: {
      1: '0xa91ac63d040deb1b7a5e4d4134ad23eb0ba07e14',
    },
    name: 'Bella Bourbon',
    symbol: 'BEL',
    tokenSymbol: 'BEL',
    icon: '🥂',
    depositUrl:'https://etherscan.io/address/0xa91ac63d040deb1b7a5e4d4134ad23eb0ba07e14',
    isPair : false,
  },
  {
    pid: 1,
    lpAddresses: {
      1: '0x06da0fd433c1a5d7a4faa01111c044910a184553',
    },
    tokenAddresses: {
      1: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    },
    name: 'Tether Coffee',
    symbol: 'USDT-ETH SLP',
    tokenSymbol: 'USDT',
    icon: '☕',
    depositUrl: 'https://exchange.sushiswapclassic.org/#/add/0xdac17f958d2ee523a2206206994597c13d831ec7/ETH',
    isPair : true,
  },
  {
    pid: 2,
    lpAddresses: {
      1: '0x397ff1542f962076d0bfe58ea045ffa2d347aca0',
    },
    tokenAddresses: {
      1: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    },
    name: 'Circle Whiskey',
    symbol: 'USDC-ETH SLP',
    tokenSymbol: 'USDC',
    icon: '🥃',
    depositUrl: 'https://exchange.sushiswapclassic.org/#/add/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48/ETH',
    isPair : true,
  },
  {
    pid: 3,
    lpAddresses: {
      1: '0xc40d16476380e4037e6b1a2594caf6a6cc8da967',
    },
    tokenAddresses: {
      1: '0x514910771af9ca656af840dff83e8264ecf986ca',
    },
    name: 'LINK Beer',
    symbol: 'LINK-ETH SLP',
    tokenSymbol: 'LINK',
    icon: '🍺',
    depositUrl: 'https://exchange.sushiswapclassic.org/#/add/0x514910771af9ca656af840dff83e8264ecf986ca/ETH',
    isPair : true,
  },
  {
    pid: 5,
    lpAddresses: {
      1: '0x5e63360e891bd60c69445970256c260b0a6a54c6',
    },
    tokenAddresses: {
      1: '0x80fb784b7ed66730e8b1dbd9820afd29931aab03',
    },
    name: 'Aave Wine',
    symbol: 'LEND-ETH SLP',
    tokenSymbol: 'LEND',
    icon: '🍷',
    depositUrl: 'https://exchange.sushiswapclassic.org/#/add/0x80fb784b7ed66730e8b1dbd9820afd29931aab03/ETH',
    isPair : true,
  },
  {
    pid: 6,
    lpAddresses: {
      1: '0xa1d7b2d891e3a1f9ef4bbc5be20630c2feb1c470',
    },
    tokenAddresses: {
      1: '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f',
    },
    name: 'SNX Champagne',
    symbol: 'SNX-ETH SLP',
    tokenSymbol: 'SNX',
    icon: '🍾',
    depositUrl: 'https://exchange.sushiswapclassic.org/#/add/0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f/ETH',
    isPair : true,
  },
  {
    pid: 4,
    lpAddresses: {
      1: '0xcb2286d9471cc185281c4f763d34a962ed212962',
    },
    tokenAddresses: {
      1: '0xd46ba6d942050d489dbd938a2c909a5d5039a161',
    },
    name: 'AMPL Martini',
    symbol: 'AMPL-ETH SLP',
    tokenSymbol: 'AMPL',
    icon: '🍸',
    depositUrl: 'https://exchange.sushiswapclassic.org/#/add/0xd46ba6d942050d489dbd938a2c909a5d5039a161/ETH',
    isPair : true,
  },
  {
    pid: 7,
    lpAddresses: {
      1: '0x088ee5007c98a9677165d78dd2109ae4a3d04d0c',
    },
    tokenAddresses: {
      1: '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e',
    },
    name: 'YFI Sake',
    symbol: 'YFI-ETH SLP',
    tokenSymbol: 'YFI',
    icon: '🍶',
    depositUrl: 'https://exchange.sushiswapclassic.org/#/add/0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e/ETH',
    isPair : true,
  },
  {
    pid: 8,
    lpAddresses: {
      1: '0x95b54c8da12bb23f7a5f6e26c38d04acc6f81820',
    },
    tokenAddresses: {
      1: '0xAba8cAc6866B83Ae4eec97DD07ED254282f6aD8A',
    },
    name: 'YAM Juice',
    symbol: 'YAMV2-ETH SLP',
    tokenSymbol: 'YAMV2',
    icon: '🍹',
    depositUrl: 'https://exchange.sushiswapclassic.org/#/add/0xAba8cAc6866B83Ae4eec97DD07ED254282f6aD8A/ETH',
    isPair : true,
  },
  {
    pid: 0,
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
    depositUrl: 'https://exchange.sushiswapclassic.org/#/add/0x6B3595068778DD592e39A122f4f5a5cF09C90fE2/ETH',
    isPair : true,
  },
  {
    pid: 9,
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
    depositUrl: 'https://exchange.sushiswapclassic.org/#/add/0x4Fabb145d64652a948d72533023f6E7A623C7C53/ETH',
    isPair : true,
  },
  {
    pid: 10,
    lpAddresses: {
      1: '0x56feaccb7f750b997b36a68625c7c596f0b41a58',
    },
    tokenAddresses: {
      1: '0xa0246c9032bC3A600820415aE600c6388619A14D',
    },
    name: 'FARM Honey',
    symbol: 'FARM',
    tokenSymbol: 'FARM',
    icon: '🍯',
    depositUrl: 'https://etherscan.io/address/0xa0246c9032bC3A600820415aE600c6388619A14D',
    isPair : false,
  },
  {
    pid: 12,
    lpAddresses: {
      1: '0xb5697ab09923e1f762c60b973b9ac7e48a89ec45',
    },
    tokenAddresses: {
      1: '0xba50933c268f567bdc86e1ac131be072c6b0b71a',
    },
    name: 'ARPA Cake',
    symbol: 'ARPA',
    tokenSymbol: 'ARPA',
    icon: '🍰',
    depositUrl: 'https://etherscan.io/address/0xba50933c268f567bdc86e1ac131be072c6b0b71a',
    isPair : false,
  },
  {
    pid: 14,
    lpAddresses: {
      1: '0x8973be4402bf0a39448f419c2d64bd3591dd2299',
    },
    tokenAddresses: {
      1: '0xa1d0E215a23d7030842FC67cE582a6aFa3CCaB83',
    },
    name: 'YFII Doughnut',
    symbol: 'YFII',
    tokenSymbol: 'YFII',
    icon: '🍩',
    depositUrl: 'https://etherscan.io/address/0xa1d0E215a23d7030842FC67cE582a6aFa3CCaB83',
    isPair : false,
  },
  {
    pid: 13,
    lpAddresses: {
      1: '0x2fdbadf3c4d5a8666bc06645b8358ab803996e28',
    },
    tokenAddresses: {
      1: '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e',
    },
    name: 'YFI Pudding',
    symbol: 'YFI',
    tokenSymbol: 'YFI',
    icon: '🍮',
    depositUrl: 'https://etherscan.io/address/0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e',
    isPair : false,
  },
  {
    pid: 11,
    lpAddresses: {
      1: '0x17782d58c715aa2a4458d5fb1c1d8e52a69a62fc',
    },
    tokenAddresses: {
      1: '0x75231f58b43240c9718dd58b4967c5114342a86c',
    },
    name: 'OKB Candy',
    symbol: 'OKB',
    tokenSymbol: 'OKB',
    icon: '🍭',
    depositUrl: 'https://etherscan.io/address/0x75231f58b43240c9718dd58b4967c5114342a86c',
    isPair : false,
  },
  {
    pid: 15,
    lpAddresses: {
      1: '0xc139d8450177c0b8c3788608518687b585f7ae5a',
    },
    tokenAddresses: {
      1: '0xb8baa0e4287890a5f79863ab62b7f175cecbd433',
    },
    name: 'SWRV Chocolate',
    symbol: 'SWRV',
    tokenSymbol: 'SWRV',
    icon: '🍫',
    depositUrl: 'https://etherscan.io/address/0xb8baa0e4287890a5f79863ab62b7f175cecbd433',
    isPair : false,
  },
  
  
]
