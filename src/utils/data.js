/*
TYPES =>
  1: Number
  2: date
  3: seconds
  4: boolean
  5: address ~ string
*/

const sweepRequestedData = {
  ammPrice: { type: 1, decimals: 6 },
  arbSpread: { type: 1, decimals: 0 },
  circulatingSupply: { type: 1, decimals: 18 },
  currentInterestRate: { type: 1, decimals: 6 },
  currentPeriodStart: { type: 2 },
  currentTargetPrice: { type: 1, decimals: 6 },
  daysInterest: { type: 1, decimals: 0 },
  interestRate: { type: 1, decimals: 6 },
  isMintingAllowed: { type: 4 },
  nextInterestRate: { type: 1, decimals: 6 },
  nextPeriodStart: { type: 2 },
  nextTargetPrice: { type: 1, decimals: 6 },
  periodStart: { type: 2 },
  stepValue: { type: 1, decimals: 0 },
  targetPrice: { type: 1, decimals: 6 },
  totalSupply: { type: 1, decimals: 18 },
  twaPrice: { type: 1, decimals: 6 }
}

const sweeprRequestedData = {
  circulatingSupply: { type: 1, decimals: 18 },
  isGovernanceChain: { type: 4 },
  price: { type: 1, decimals: 6 },
  totalMinted: { type: 1, decimals: 18 },
}

const assetRequestedData = {
  borrower: { type: 5 },
  sweepBorrowed: { type: 1, decimals: 18 },
  loanLimit: { type: 1, decimals: 18 },
  currentValue: { type: 1, decimals: 6 },
  assetValue: { type: 1, decimals: 6 },
  getEquityRatio: { type: 1, decimals: 6 },
  getJuniorTrancheValue: { type: 1, decimals: 6 },
  name: { type: 5 },
  getDebt: { type: 1, decimals: 18 },
  accruedFee: { type: 1, decimals: 18 },
  minEquityRatio: { type: 1, decimals: 6 },
  callDelay: { type: 3 },
  callAmount: { type: 1, decimals: 18 },
  callTime: { type: 2 },
  spreadFee: { type: 1, decimals: 6 },
  spreadDate: { type: 2 },
  autoInvestMinRatio: { type: 1, decimals: 6 },
  autoInvestMinAmount: { type: 1, decimals: 18 },
  autoInvestEnabled: { type: 4 },
  settingsEnabled: { type: 4 },
  startingTime: { type: 2 },
  startingPrice: { type: 1, decimals: 6 },
  decreaseFactor: { type: 1, decimals: 6 },
  minLiquidationRatio: { type: 1, decimals: 6 },
  auctionAllowed: { type: 4 },
}

module.exports = {
  sweepRequestedData,
  sweeprRequestedData,
  assetRequestedData,
}