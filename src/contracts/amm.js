const ammABI = require("../abis/amm.json");
const sweepABI = require("../abis/sweep.json");

const { addresses } = require("../utils/constants");
const { safeGet, parser } = require("../utils/helper");

class AMM {
  constructor(provider) {
    this.provider = provider;
  }

  async fetchData(network, ammAddress, tokenId) {
    const multicall = this.provider.getMulticall(network);

    const callInfo = [
      {
        reference: 'sweep',
        contractAddress: addresses.sweep,
        abi: sweepABI,
        calls: [{ reference: 'target', methodName: 'targetPrice' }]
      },
      {
        reference: 'amm',
        contractAddress: ammAddress,
        abi: ammABI,
        calls: [{ reference: 'position', methodName: 'getPositions', methodParameters: [tokenId] }]
      }
    ]

    let callResults = await multicall.call(callInfo);
    const sweepData = callResults.results['sweep']['callsReturnContext'];
    const ammData = callResults.results['amm']['callsReturnContext'];

    const target = safeGet({ type: 1, decimals: 6 }, sweepData, 0);
    const position = ammData[0] && ammData[0].returnValues || [0,0,0];

    // TODO: remove fixed decimals
    const usdcDecimals = network === 'bsc' ? 18 : 6;
    const usdxPosition = parser(parseInt(position[0]?.hex, 16), usdcDecimals);
    const sweepPosition = parser(parseInt(position[1]?.hex, 16), 18);
    const lpPosition = parser(parseInt(position[2]?.hex, 16), 18);

    return {
      position: {
        usdxAmount: usdxPosition,
        sweepAmount: sweepPosition,
        lp: lpPosition,
        sweepValue: (sweepPosition * target)
      }
    };
  }
}

module.exports = AMM;
