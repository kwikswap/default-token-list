const { version } = require('../package.json');
const mainnet = require('./tokens/mainnet.json');
const ropsten = require('./tokens/ropsten.json');
const rinkeby = require('./tokens/rinkeby.json');
const goerli = require('./tokens/goerli.json');
const kovan = require('./tokens/kovan.json');

module.exports = function buildList() {
  const parsed = version.split('.');
  return {
    'name': 'Kwikswap Default List',
    'timestamp': (new Date().toISOString()),
    'version': {
      'major': +parsed[ 0 ],
      'minor': +parsed[ 1 ],
      'patch': +parsed[ 2 ]
    },
    'tags': {},
    'logoURI': 'ipfs://Qmbbh4P9mWddjtxAoM8uDbnS6oy8X8qnmL8YG24iJzSPyd',
    'keywords': [
      'uniswap',
      'default'
    ],
    tokens: [
      ...mainnet,
      ...ropsten,
      ...goerli,
      ...kovan,
      ...rinkeby
    ]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      })
  };
};
